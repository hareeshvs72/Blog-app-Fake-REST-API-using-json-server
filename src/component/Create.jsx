import React, { useState } from 'react'
import { addBlogToJson } from '../service/AllApi';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';



function Create({setBlogId,setBlog,blog}) {
  const {title,discription , tags , imgurl} = blog
 const navigate = useNavigate()
  console.log(blog);

  const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Url = reader.result; // "data:image/png;base64,iVBORw0K..."
      console.log("Base64 URL:", base64Url);
      setBlog({ ...blog, imgurl: base64Url });
    };
    reader.readAsDataURL(file);
  }
};


  const handileSubmit = async (e) => {
    e.preventDefault()
     
    try {
      if(title && discription && tags && imgurl ){
          const response = await addBlogToJson(blog)
      // setBlogId(response?.data?.id)
      console.log(response.data);
      if(response?.status ===201){
             Swal.fire({
        title: "Create SucessFully!",
        icon: "success",
        draggable: true,
      });
       navigate('/')
      }
      }
      else{
        alert("Please Fill The Form")
      }
     
     
    }catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
     
      });

    }
  }
  return (
    <>

     
     <div className='vh-100 container d-flex  align-items-center justify-content-center  '>

        <form action="" className='w-50' onSubmit={handileSubmit} >
          <div className='d-flex flex-column my-2'>
            <label htmlFor="title" className='mt-1'  >Title</label>
            <input id='title' type="text" className='form-control' placeholder='Title' onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
          </div>
          <div className='d-flex flex-column my-2'>
            <label htmlFor="description" className='my-2'>Discription</label>
            <div id='description' contentEditable={true} onInput={(e) => setBlog({ ...blog, discription: e.currentTarget.innerText })}   >
            </div>
          </div>
          <div className='d-flex flex-column my-2'>
            <label htmlFor="description" className='my-2'>Tags</label>
            <div id='tags' contentEditable={true} onInput={(e) => setBlog({ ...blog, tags: e.currentTarget.innerText })}   >
            </div>
          </div>
          <div className='d-flex mt-3'>
            <div className='me-2' >
              <img className='img-fluid border' src={blog.imgurl} />
            </div>
            <input type="file" accept='image/png' onChange={handleImage} />

          </div>
          <button type='submit' className='btn btn-primary mt-4'  >Upload</button>
        </form>

      </div>
       
      


    </>
  )
}

export default Create