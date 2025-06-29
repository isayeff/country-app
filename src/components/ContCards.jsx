import React, { useContext } from 'react'
import { DataCntx } from '../../data/DataContex'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'

function ContCards({val}) {
    const { data, useData } = useContext(DataCntx)
    const { cont } = useParams()
    // console.log(cont);
    return (
        <>
            {
                data
                    .filter(item => item.region.toLowerCase() == cont)
                    .filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
                    .map(item => (
                        <article key={nanoid()} className="w-[292px] countryCards flex flex-col bg-white dark:bg-gray-900 shadow-md rounded-sm overflow-hidden">
                            <Link to={`/details/${item.alpha3Code}`}>
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={item.flag} />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link className="text-xs tracki uppercase hover:underline dark:text-violet-400">{item.region}</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi dark:text-white">{item.name}, <span className='italic'>{item.capital}</span></h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Population: {item.population}</span>
                                    <span>{item.area} km <sup>2</sup></span>
                                </div>
                            </div>
                        </article>
                    ))

            }
        </>
    )
}

export default ContCards