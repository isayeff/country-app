import React, { useContext, useState } from 'react'
import { DataCntx } from '../../data/DataContex'

function Home() {
    const { data, setData } = useContext(DataCntx)
    const [load, setLoad] = useState(40)
    console.log(data);

    const obj = data.find(item => item.cca3 == 'AZE')
    console.log(obj);

    function showMore() {
        setLoad(load + 40)
    }

    return (
        <>
            <main className='bg-gray-800  py-10'>
                <div className="cards flex flex-wrap gap-5 justify-center">
                    {data.slice(0, load).map(item => (
                        <article key={item.ccn3} className="w-[292px] countryCards flex flex-col dark:bg-gray-900 shadow-md rounded-sm overflow-hidden">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={item.flags.svg} />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                <a rel="noopener noreferrer" href="#"
                                    className="text-xs tracki uppercase hover:underline dark:text-violet-400">{item.region}</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi text-white">{item.name.common}, <span className='italic'>{item.capital}</span></h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Population: {item.population}</span>
                                    <span>{item.area} km2</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="loadBtn text-center">
                    {load < data.length && <button className='bg-slate-900 text-white py-[10px] px-[20px] rounded-[5px] mt-[20px]' onClick={showMore}>Show More...</button>}
                </div>
            </main>
        </>
    )
}

export default Home