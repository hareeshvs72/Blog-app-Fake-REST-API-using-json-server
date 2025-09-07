import React, { useEffect, useState } from 'react'
import { showBlogInLand } from '../../service/AllApi'
import Privew from '../Privew'
import { Link } from 'react-router-dom'


function LatestBlog({setBlogId,blogid}) {
   const[post, setPost]= useState([])
   const [edit , setEdit] = useState(true)
  useEffect( ()=>{
      getData()    
  },[])
 
  const getData = async ()=>{
        const respons = await showBlogInLand()
        //  console.log(respons.data);
         setPost(respons.data)
        
  }
  console.log(post);
  
   const handileedit = (id)=>{
        console.log(id);
        
        setEdit(false)
        setBlogId(id) 
       
         
       
   }
   
   
  return (
    <>
      <div className='container'>
        <h1>Latest Blog</h1>
        <div className="row">
                
           
          { edit? 
            post?.length>0 &&
            post.map((item,index)=>(
              
                <div className="col-md-3 my-2" key={index}  onClick={()=>handileedit(item.id)} >
                   <Link to={'/prview' }  > 
               <div className="card" style={{width:"18rem",minHeight:'20rem' ,height:'20rem' , overflow:'hidden' }}>
              <img src={`${item?.imgurl}`}className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <p className="card-text">{item?.discription}</p>
                  <a href="#" className="text-primary ">{item.tags}</a>
                </div>
            </div>
             </Link>
            </div>
            
            )) :
            null
             
           
             
            }
          
          
        
        </div>
      </div>
    </>
  )
}

export default LatestBlog