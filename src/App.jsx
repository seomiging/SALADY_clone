import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './page/Home'
import Brand from './page/Brand'
import Menu from './page/Menu'
import Nutrition from './page/Nutrition'
import Application from './page/Application'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brand' element={<Brand/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/nutrition' element={<Nutrition/>}/>
        <Route path='/application' element={<Application/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
