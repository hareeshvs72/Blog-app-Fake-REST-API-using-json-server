import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Headeing from './Pages/Headeing'
import LatestBlog from './Pages/LatestBlog'


function Landing({setBlogId,blogid}) {
  return (
    <>
     <Headeing/>
      <LatestBlog  blogid={blogid} setBlogId={setBlogId}/>
    </>
  )
}

export default Landing