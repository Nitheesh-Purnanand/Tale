
import { Box } from "@mui/material"
import Chatheader from "./chatheader"
import Messages from "./messages"

const Chatbox = () =>{
    return(
       <Box style={{height:"75%"}}>
        <Chatheader></Chatheader>
        <Messages></Messages>
       </Box>
    )
}

export default Chatbox