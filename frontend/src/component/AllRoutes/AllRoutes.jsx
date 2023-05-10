import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../../pages/Home/Home'
import MacPage from '../../pages/MacPage/MacPage'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mac" element={<MacPage/>}/>
    </Routes>

    </>
  )
}

export default AllRoutes