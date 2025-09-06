import React, { useEffect, useState } from 'react'
import { showBlogInLand } from '../../service/AllApi'

function LatestBlog() {
   const[post, setPost]= useState([{}])
  useEffect( ()=>{
      getData()    
  },[])
 
  const getData = async ()=>{
        const respons = await showBlogInLand()
        //  console.log(respons.data);
         setPost(respons.data)
  }
  console.log(post);
  

  return (
    <>
      <div className='container'>
        <h1>Latest Blog</h1>
        <div className="row">
                
           
          {
            post!={} &&
            post.map((item,index)=>(
               <div className="col-md-3 my-2">
            <div className="card" style={{width:"18rem" }}>
              <img src={item.imgurl}className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.discription}</p>
                  <a href="#" className="text-primary ">{item.tags}</a>
                </div>
            </div>
            </div>
            )) 
             
            }
          
          
        
        </div>
      </div>
    </>
  )
}

export default LatestBlog