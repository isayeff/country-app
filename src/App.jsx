import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AnaLayout from './layout/AnaLayout'
import CardDet from './pages/CardDet'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<AnaLayout />}>
              <Route index element={<Home />} />
              <Route path='/details/:cca3' element={<CardDet />} />
              <Route path='countries/:cont' element={<Home />} />
          </Route>
        </Routes>
    </>
  )
}

export default App