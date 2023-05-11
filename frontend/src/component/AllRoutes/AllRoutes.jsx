import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../../pages/Home/Home'
import MacPage from '../../pages/MacPage/MacPage'
import SingleProduct from '../../pages/SingleProduct/SingleProduct'
import Cart from '../../pages/Cart/Cart'
import Payment from '../../pages/Payment/Payment'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/:category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

    </>
  )
}

export default AllRoutes