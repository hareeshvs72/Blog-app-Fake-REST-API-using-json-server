import axios from "axios"

const CommonAPI = async (httpreq,url , reqbody)=>{
 const reqConfiq = {
    method:httpreq,
    url,
    data:reqbody
 }

 return await axios(reqConfiq).then((response)=>{
   return response
 }).catch((err=>{
     console.log(err);
 }))
 
}
export default CommonAPI