import axios from "axios" ;
const URL = "https://localhost:3000" 
export const addUser = async (data) => {

    try {
        await axios.post(`${URL}/add`,data)
    }catch(error){
        console.log("error while addUser api ", error.message);
    }
}