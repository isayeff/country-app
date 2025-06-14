import React, { useContext, useState } from 'react'
import { DataCntx } from '../../data/DataContex'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import ContCards from '../components/ContCards';
import Input from '../components/Input';
import RandomCard from '../components/RandomCard';

function Home() {
    const data = useContext(DataCntx)
    const [load, setLoad] = useState(20)
    const [val, setVal] = useState('')
    const [state, setState] = useState(false)
    // console.log(data);

    function showMore() {
        setLoad(load + 40)
    }
    function getVal(e) {
        setVal(e.target.value);
    }

    const { cont } = useParams()

    function scroll() {
        window.scrollTo({
            top: 600,
            behavior: "smooth",
        });
    }

    function handleSearch() {
        setState(!state)
        console.log(state);
    }

    return (
        <>
            <main className='bg-[#E5E7EB] dark:bg-gray-800 py-10 min-h-[100vh] scroll-smooth'>
                <div className='container m-auto'>
                    {
                        cont == undefined ?
                            <div className="title flex flex-col justify-center items-center gap-[40px] h-[65vh] text-center">
                                <h2 className="inline text-3xl font-bold tracking-tight dark:text-white sm:block sm:text-5xl">Welcome to CountryApp Website</h2>
                                <p className="inline text-3xl font-bold tracking-tight text-violet-500 sm:block sm:text-4xl">You can find data of any country in this website.</p>
                                <Input getVal={getVal} handleSearch={handleSearch} state={state} />
                                <div className='flex flex-col md:flex-row gap-[30px]'>
                                    <button onClick={scroll} className='w-[170px] py-[15px] rounded-[5px] border-0 font-bold text-white bg-violet-500 uppercase text-[.9rem] hover:bg-[#6f4cd6]'>have a look</button>
                                    <button onClick={handleSearch} className='w-[170px] py-[15px] rounded-[5px] border-0 font-bold text-white bg-[#000] uppercase text-[.9rem] hover:bg-[#191919]'>search</button>
                                </div>
                            </div>
                            : ''
                    }
                    {
                        cont == undefined && state == false && <RandomCard />
                    }
                    <div className="cards flex flex-wrap gap-5 justify-center">
                        {
                            cont == undefined ?
                                <Card count={load} val={val} />
                                : <ContCards val={val} />
                        }
                    </div>
                    <div className="loadBtn text-center">
                        {load < data.length && cont == undefined && state == false && <button className='dark:bg-slate-900 dark:text-white py-[10px] px-[20px] rounded-[5px] mt-[20px] border-[2px] border-[#9a9a9a] dark:border-0' onClick={showMore}>Show More...</button>}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home