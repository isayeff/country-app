import React from 'react'
import DataContex from '../data/DataContex'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AnaLayout from './layout/AnaLayout'

function App() {
  return (
    <>
      <DataContex>
        <Routes>
          <Route path='/' element={<AnaLayout />}>
              <Route index element={<Home />} />
          </Route>
        </Routes>
      </DataContex>
    </>
  )
}

export default App