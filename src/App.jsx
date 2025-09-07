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
import Privew from './component/Privew.jsx'

function App() {
   const [blog, setBlog] = useState({
    title: "",
    discription: "",
    tags: "",
    imgurl: ""
  })
 const [ blogid ,setBlogId ] = useState("")

  return (
    <>
         <Header/>
           <Routes>
            <Route path='/' element={<Landing   blogid={blogid} setBlogId={setBlogId} />  } />
            <Route path='/create' element={<Create blog={blog} setBlog={setBlog} />} />
            <Route path='/prview' element={<Privew   blog={blog} setBlog={setBlog}  blogid={blogid} setBlogId={setBlogId} />} />
            <Route path='/*' element={<PageNotFound/>} />
         </Routes>

        <Footer/>
     
    </>
  )
}

export default App
