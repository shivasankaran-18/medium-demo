import { atomFamily,selector,selectorFamily,atom } from "recoil";
import { BACKEND_URL } from "../../config";
import axios from "axios";



export const fullBlog=atomFamily({
    key:"fullBlog",
    default:selectorFamily(
        {
            key:"Fullblog",
            get:(id:string)=>async ()=>{
                const result=await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                })

                return result.data;
            }
        }
    )
})


export const blogs=atom({
    key:"blogs",
    default:selector({
        key:"Blogs",
        get:async ()=>{
            const result=await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            
            return result.data;
        }
    })
})

export const details=atom({
    key:"details",
    default:selector({
        key:"Details",
        get:async()=>{
            const result=await axios.get(`${BACKEND_URL}/api/v1/blog/details`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`

                }
            });
            console.log(result.data)
            return result.data; 

        }
    })
})