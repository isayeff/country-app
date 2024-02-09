import React, { useContext } from 'react'
import { DataCntx } from '../../data/DataContex'
import { Link } from 'react-router-dom';

function RandomCard() {
    const data = useContext(DataCntx)

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randNum = rand(0, 249)
    let obj = data.data[randNum]

    console.log(obj);
    console.log(obj && obj.name.common);
    return (
        <>
            {
                obj &&
                <Link to={`details/${obj.cca3}`}>
                    <section className="dark:bg-gray-800 dark:text-gray-100 mb-[100px]">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                                <img src={obj.flags.svg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{obj.name.common}</h3>
                                    <span className="text-xs dark:text-gray-400">{obj.capital}</span>
                                    <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Link>
            }
        </>
    )
}

export default RandomCard