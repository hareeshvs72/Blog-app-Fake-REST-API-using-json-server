import React from 'react'

function Create() {
  return (
    <>
    <div className='vh-100 container d-flex  align-items-center justify-content-center '>

      <form action="" className='w-50'>
        <div className='d-flex flex-column my-2'>
          <label htmlFor="title" className='mt-1'>Title</label>
          <input id='title' type="text" className='form-control' placeholder='Title' />
        </div>
        <div className='d-flex flex-column my-2'>
          <label htmlFor="description"  className='my-2'>Discription</label>
          <div id='description' contentEditable={true}    >
          </div>
        </div>
        <div>
          
           <input type="file" />
           <div>
             <img src="..." alt="preview" />
          </div>
        </div>
        <button className='btn btn-primary mt-4' >Upload</button>
      </form>

    </div>
    
    
    </>
  )
}

export default Create