import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Product from './Product'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ProductDetails from './ProductDetails'
import ShowCart from './ShowCart'
import Payment from './Payment'
import Checkout from './Chackout'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'


export default function Router(){
    
    return <>
    <NavBar></NavBar>
    <Routes>
        <Route path='home' element= {<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='signin' element= {<SignIn />} />
        <Route path='signup' element= {<SignUp />} />
        <Route path='ProductDetails' element= {<ProductDetails/>} />
        <Route path='showCart' element={<ShowCart/>} />
        <Route path='payment' element={<Payment/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='addProduct' element={<AddProduct/>}/>
        <Route path='updateProduct' element={<UpdateProduct/>}/>
        <Route path='/' element= {<Navigate to ='/home'/>} />
        {/* <Route path='*' element = {}/> */}
    </Routes>
    </>
}