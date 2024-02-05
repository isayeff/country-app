import React, { useContext } from 'react'
import { DataCntx } from '../../data/DataContex'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'

function CardDet() {
    const { data, setData } = useContext(DataCntx)
    const { cca3 } = useParams()
    const element = data.find(item => item.cca3 == cca3)
    // console.log(element);
    return (
        <>
            {
                element &&
                <>
                    <div className="h-[73vh] dark:bg-gray-800 dark:text-gray-50 shadow-md flex items-center">
                        <div id="openedCard" className="container w-[65vw] md:w-[80vw] flex justify-between flex-col md:flex-row mx-auto dark:bg-gray-900 overflow-hidden">
                            <div className="flex flex-col p-3 md:p-6 order-2 md:order-1">
                                <div className="flex justify-start">
                                    <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">{element.cca3}</span>
                                </div>
                                <h1 className=" text-[1.5rem] md:text-3xl font-semibold">{element.name.common}</h1>
                                <p className="flex-1 pt-1 md:pt-2">Capital: {element.capital}</p>
                                <p className="flex-1 pt-1 md:pt-2">Region: {element.region}</p>
                                <p className="flex-1 pt-1 md:pt-2">Alternative names: {element.name.official}</p>
                                <div className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm  text-white">
                                    <span>{element.borders ? element.borders.map(ad3 =><Link  key={nanoid()} to={`/details/${ad3}`}><button className='border-0 px-[10px] bg-slate-600 rounded-sm m-[5px]'>{ad3}</button></Link>) : <u>No Borders</u>}</span>
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex space-x-2">
                                        <span className="self-center text-sm">Population: {element.population}</span>
                                    </div>
                                    <span className="text-xs">{element.area}km2</span>
                                </div>
                            </div>
                            <div className="md:basis-[40%] h-[200px] md:h-auto order-1 md:order-2">
                                <img className='h-full w-full object-cover' src={element.flags.svg} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default CardDet