import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

import { Route, Router, Routes } from 'react-router-dom'
import Landing from './component/Landing'
import PageNotFound from './component/PageNotFound.jsx'
import Create from './component/Create.jsx'
function App() {


  return (
    <>
         <Header/>
           <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/create' element={<Create/>} />
            
            <Route path='/*' element={<PageNotFound/>} />
         </Routes>

        <Footer/>
     
    </>
  )
}

export default App
