import React, { useState } from 'react'
import { addBlogToJson } from '../service/AllApi';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


function Create() {
  const [open , setOpen] = useState(true)
  const [blog, setBlog] = useState({
    title: "",
    discription: "",
    tags: "",
    imgurl: ".."
  })
  console.log(blog);

  const handileImage = (e) => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setBlog({ ...blog, imgurl: url })
    }

  }

  const handileSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await addBlogToJson(blog)
      console.log(response.data);
      Swal.fire({
        title: "Create SucessFully!",
        icon: "success",
        draggable: true
      });
      setOpen(false)

    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

    }
  }
  return (
    <>

     { open &&
     
     <div className='vh-100 container d-flex  align-items-center justify-content-center '>

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
            <input type="file" accept='image/png' onChange={handileImage} />

          </div>
          <button type='submit' className='btn btn-primary mt-4'  >Upload</button>
        </form>

      </div>
       
      }


    </>
  )
}

export default Create