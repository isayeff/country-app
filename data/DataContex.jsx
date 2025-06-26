import { createContext, useEffect, useState } from "react";

export const DataCntx = createContext()


export default function DataContex({children}) {

    const [data, setData] = useState([])
    const dataObj = {data, setData}

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL)
        .then(res => res.json())
        .then(item => setData(item))
    },[])

    return (
        <DataCntx.Provider value={dataObj}>
            {children}
        </DataCntx.Provider>
    )
}
