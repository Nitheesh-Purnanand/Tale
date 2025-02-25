import Logindialog from "./account/loginDialog"
import { useContext } from "react"
import {AppBar,Toolbar,styled} from "@mui/material"
import { AccountContext } from "./context/Accountprovider"
import Chatdialog from "./chat/Chatdialog"
const LoginHeader = styled(AppBar)`
height:300px;
background-color:#00bfa5;
box-shadow:20px;
`
const Header = styled(AppBar)`
height:125px;
background-color:#00A884;
box-shadow:none;
`

const Messenger = () =>{
   const {account} = useContext(AccountContext)
 return (<>
 {account ? 
 <><Header><Toolbar></Toolbar></Header>
 <Chatdialog/></> : <><LoginHeader><Toolbar></Toolbar></LoginHeader><Logindialog/></>}
 </>)
}
export default Messenger