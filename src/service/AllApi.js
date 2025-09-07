import BASEURL from "./BaseUrl"
import CommonAPI from "./CommonAPI"


// add items to blog

export const addBlogToJson = async  (blog)=>{
 return await CommonAPI("POST",`${BASEURL}/blog`,blog) 
}


// show data in landing page

export const showBlogInLand = async ()=>{
    return await CommonAPI("GET",`${BASEURL}/blog`,{})
}

// get data 

export const getDataInPreview =async (id)=>{
    return await CommonAPI("GET",`${BASEURL}/blog/${id}`,{})
}

// updatedata

export const updateData =async (id,post)=>{
    return await CommonAPI("PUT",`${BASEURL}/blog/${id}`,post)
}

export const deleteData = async(id)=>{
      return await CommonAPI("DELETE",`${BASEURL}/blog/${id}`,{})
}