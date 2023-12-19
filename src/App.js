import React from 'react'
import Navbar from './components/Assets/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingup from './Pages/LoginSingup'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import Login from './Pages/Login'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes> 
      <Route  path='/shop' element={<Shop/>}/>
      <Route  path='/mens' element={<Shopcategory banner ={men_banner} category ="men"/>}/>
      <Route  path='/womens' element={<Shopcategory banner ={women_banner} category ="women"/>}/>
      <Route  path='/kids' element={<Shopcategory banner ={kids_banner} category ="kid"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element = {<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' index element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
