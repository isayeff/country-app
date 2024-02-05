import React, { useContext } from 'react'
import { DataCntx } from '../../data/DataContex';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

function Card({ count, val }) {
    const { data, setData } = useContext(DataCntx)
    const { cont } = useParams()

    return (
        <>
            {data
            .filter(item => item.name.common.toLowerCase().includes(val.toLowerCase()))
            .slice(0, count)
            .map(item => (
                <article key={nanoid()} className="w-[292px] countryCards flex flex-col dark:bg-gray-900 shadow-md rounded-sm overflow-hidden">
                    <Link to={`/details/${item.cca3}`}>
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={item.flags.svg} />
                        <div className="flex flex-col flex-1 p-6">
                            <p className="text-xs tracki uppercase dark:text-violet-400">{item.region}</p>
                            <h3 className="flex-1 py-2 text-lg font-semibold leadi text-white">{item.name.common}, <span className='italic'>{item.capital}</span></h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>Population: {item.population}</span>
                                <span>{item.area} km2</span>
                            </div>
                        </div>
                    </Link>
                </article>
            ))}
        </>
    )
}

export default Card