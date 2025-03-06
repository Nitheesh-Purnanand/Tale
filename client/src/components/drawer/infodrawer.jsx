import { Drawer,Box,Typography,styled } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./profile";
const drawerStyle ={
    left:20,top:17,height:"95%",width:"30%",boxShadow:"none"
}
const Newarrow = styled(ArrowBackIcon)`
font-size:50px;
`
const Head = styled(Box)`
background-color:#f0f2f5;
height:107px;
color:#000000;
display:flex;
&>svg,&>p{
margin-top:auto;
padding:15px;
}
`
const Text = styled(Typography)`
font-size:30px;
`
const Component = styled(Box)`
background-color:yellow;
height:85%;
`
const Infodrawer =(props)=>{
    const handleclose=()=>{
        props.setopen(false)
    }
    return(
        <Drawer
        open={props.open}
        onClose={handleclose}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex:1500}}
      >
        <Head>
            <Newarrow onClick={() => {props.setopen(false)}}></Newarrow>
            <Text>Profile</Text>
        </Head>
        <Component>
            <Profile>
                
            </Profile>
        </Component>
      </Drawer>
    )
}

export default Infodrawer