import { createContext, useEffect, useState } from "react";

export const DataCntx = createContext()

export default function DataContex({children}) {

    const [data, setData] = useState([])
    const dataObj = {data, setData}

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(item => setData(item))
    },[])

    return (
        <DataCntx.Provider value={dataObj}>
            {children}
        </DataCntx.Provider>
    )
}
