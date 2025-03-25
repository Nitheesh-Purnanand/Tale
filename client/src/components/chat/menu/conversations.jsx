import { useEffect,useState,useContext, Component } from "react"
import { getUsers } from "../../../service/api.js"
import Conversation from "./conversation.jsx";
import { Box,styled,Divider } from "@mui/material";
import { AccountContext } from "../../context/Accountprovider.jsx";

const Componen = styled(Box)`
height:81vh;
overflow:overlay;
`
const StyledDivider = styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
opacity:.6;
`


const Conversations = () =>{
    const [users,setusers] = useState([]);
    const {account} = useContext(AccountContext)
    useEffect(()=>{
        const  fetchData = async () =>{
            let response = await getUsers();
            setusers(response)
        }
        fetchData();
    },[])
    return(
    <Componen>
        {users.map(user=>(
            user.sub !== account.sub &&
            <>
            <Conversation user={user}></Conversation>
            <StyledDivider></StyledDivider>
            </>))}
    </Componen>    
    )
}

export default Conversations