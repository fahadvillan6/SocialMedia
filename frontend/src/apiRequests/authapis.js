import axios from "axios";

const api = 'http://localhost:4000'

export const  registerapi = async (body) => {
    await axios.post(`${api}/register`,{body})
} 
export const loginapi = async (body) =>{
    await axios.post(`${api}/login`,body)
}