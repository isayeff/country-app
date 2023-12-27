import React, { useContext } from 'react'
import { DataCntx } from '../../data/DataContex'
import { useParams } from 'react-router-dom'

function CardDet() {
    const { data, setData } = useContext(DataCntx)
    const { cca3 } = useParams()
    console.log(cca3);
    const element = data.find(item => item.cca3 == cca3)
    console.log(element);
    return (
        <>
            {
                element &&
                <>
                    <div className="mt-[80px] dark:bg-gray-800 dark:text-gray-50 shadow-md">
                        <div id="openedCard" className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                            <div className="w-[400px] bg-no-repeat bg-cover col-span-full lg:col-span-4" style={{backgroundImage: `url(${element.flags.svg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                                <div className="flex justify-start">
                                    <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">{element.cca3}</span>
                                </div>
                                <h1 className="text-3xl font-semibold">{element.name.common}</h1>
                                <p className="flex-1 pt-2">Capital: {element.capital}</p>
                                <p className="flex-1 pt-2">Region: {element.region}</p>
                                <p className="flex-1 pt-2">Alternative names: {element.name.official}</p>
                                <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm  text-white">
                                    <span>{element.borders ? element.borders.map(ad3 => <button class='border-0 mx-[5px] px-[10px] bg-slate-600 rounded-sm'>{ad3}</button>) : 'no borders'}</span>
                                </a>
                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex space-x-2">
                                        <span className="self-center text-sm">Population: {element.population}</span>
                                    </div>
                                    <span className="text-xs">{element.area}km2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default CardDet