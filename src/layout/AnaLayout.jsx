import React from 'react'
import DataContex from '../../data/DataContex'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function AnaLayout() {
    return (
        <>
            <DataContex>
                <Nav />
                <Outlet />
                <Footer />
            </DataContex>
        </>
    )
}

export default AnaLayout