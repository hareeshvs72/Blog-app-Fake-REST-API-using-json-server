
import React, { useState, useEffect } from 'react'
import { deleteData, getDataInPreview, updateData } from '../service/AllApi'
import { Link, useNavigate } from 'react-router-dom'


function Privew({ setBlogId, blogid }) {
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  // ✅ Fetch blog details when blogid changes
  useEffect(() => {
    if (blogid) {
      handileData()
    }
  }, [blogid])

  const handileData = async () => {
    try {
      const result = await getDataInPreview(blogid)
      console.log("Fetched Post:", result.data)
      setPost(result.data)
      setBlogId("")
    } catch (error) {
      console.error(error)
    }
  }

  // ✅ Handle Update
  const handileUpdate = async (e) => {
    e.preventDefault()
    try {
      const result = await updateData(post?.id, post) // send id + post object
      console.log("Updated:", result.data)
      alert("Blog updated successfully!")
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  // ✅ Handle Image Upload & Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPost({ ...post, imgurl: url }) // update local state with preview
    }
  }

  // handile delete data 

  const handileDelete = async()=>{
    try {
      const result = await deleteData(post?.id)
      alert("are you sure to delete ")
      console.log("delet sucess fully ", result.data);
      navigate('/')
      setPost(null)
      setBlogId("")
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="vh-100 container d-flex align-items-center justify-content-center">
      {post ? (
        <form className="w-50" onSubmit={handileUpdate}>
          {/* Title */}
          <div className="d-flex flex-column my-2">
            <label htmlFor="title" className="mt-1">Title</label>
            <input
              id="title"
              value={post?.title || ""}
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>

          {/* Description */}
          <div className="d-flex flex-column my-2">
            <label htmlFor="description" className="my-2">Description</label>
            <textarea
              id="description"
              value={post?.discription || ""}
              className="form-control"
              onChange={(e) => setPost({ ...post, discription: e.target.value })}
            />
          </div>

          {/* Tags */}
          <div className="d-flex flex-column my-2">
            <label htmlFor="tags" className="my-2">Tags</label>
            <input
              id="tags"
              value={post?.tags || ""}
              type="text"
              className="form-control"
              onChange={(e) => setPost({ ...post, tags: e.target.value })}
            />
          </div>

          {/* Image Upload */}
          <div className="d-flex mt-3 align-items-center">
            <div className="me-2">
              <img
                className="img-fluid border"
                src={post?.imgurl || "https://via.placeholder.com/150"}
                alt={post?.title}
                width="150"
              />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Buttons */}
          <button type="submit" className="btn btn-primary mt-4">Update</button>
          <button type="button" onClick={handileDelete} className="btn btn-danger mt-4 ms-2">Delete</button>
        </form>
      ) : (
       <p>Loading............</p>
      )}
    </div>
  )
}

export default Privew
