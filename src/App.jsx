import React from 'react'
import DataContex from '../data/DataContex'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AnaLayout from './layout/AnaLayout'
import CardDet from './pages/CardDet'

function App() {
  return (
    <>
      <DataContex>
        <Routes>
          <Route path='/' element={<AnaLayout />}>
              <Route index element={<Home />} />
              <Route path='/details/:cca3' element={<CardDet />} /> 
          </Route>
        </Routes>
      </DataContex>
    </>
  )
}

export default App