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