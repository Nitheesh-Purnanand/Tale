import { Box,Typography,styled } from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../context/Accountprovider"
const Imagecontainer = styled(Box)`
display:flex;
justify-content:center;
`
const Image = styled("img")({
   width:200,height:200,borderRadius:"50%",padding:"25px 0"
})
const Boxwrapper = styled(Box)`
background:#ffffff;
padding:12px 30px 2px;
box-shadow:0 5px 5px rgba(0,0,0,0.1);
`
const Descriptioncontainer = styled(Box)`
padding:15px 20px 28px 30px;
& > p {
font-size:13px;
color:#8696a0;
}
`
const Profile = ()=>{
   const {account} = useContext(AccountContext)
 return(
    <>
    <Imagecontainer>
      <Image src={account.picture} alt="DP" />
    </Imagecontainer>
    <Boxwrapper>
      <Typography>Your Name</Typography>
      <Typography>{account.name}</Typography>
    </Boxwrapper>
    <Descriptioncontainer>
      <Typography>This is not your username or pin.This name will be visible to your contacts.</Typography>
    </Descriptioncontainer>
    <Boxwrapper>
      <Typography>About</Typography>
      <Typography>Eat! sleep! repeat!</Typography>
    </Boxwrapper>
    </>
 )   
}

export default Profile