import React, { useContext, useState } from 'react'
import { DataCntx } from '../../data/DataContex'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import ContCards from '../components/ContCards';

function Home() {
    const { data, setData } = useContext(DataCntx)
    const [load, setLoad] = useState(20)
    // console.log(data);

    function showMore() {
        setLoad(load + 40)
    }
    const { cont } = useParams()
    console.log(cont);

    return (
        <>
            <main className='bg-gray-800  py-10 min-h-[100vh]'>
                <div className="cards flex flex-wrap gap-5 justify-center">
                    {
                        cont == undefined ?
                            <Card count={load} />
                            : <ContCards />
                    }
                </div>
                <div className="loadBtn text-center">
                    {load < data.length && cont == undefined && <button className='bg-slate-900 text-white py-[10px] px-[20px] rounded-[5px] mt-[20px]' onClick={showMore}>Show More...</button>}
                </div>
            </main>
        </>
    )
}

export default Home