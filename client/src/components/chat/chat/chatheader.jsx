import { Box,Typography,styled } from "@mui/material"
import {Search,MoreVert} from "@mui/icons-material"

const Header = styled(Box)`
height:44px;
background-color:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Image = styled('img')({
    height:40,
    width:40,
    objectFit:"cover",
    borderRadius:"50%",
})
const Name = styled(Typography)`
margin-left:12px !important;
`
const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0,0,0,0.6)
`
const RightContainer = styled(Box)`
margin-left:auto;
&> svg{
padding:8px;
font-size:24px; 
color:#000; 
}
`


const Chatheader = () =>{
    return(
        <Header>
            <Image src={" "} alt="dp"/>
            <Box>
                <Name>Name</Name>
                <Status>online status</Status>
            </Box>
            <RightContainer>
                <Search></Search>
                <MoreVert></MoreVert>
            </RightContainer>
        </Header>
    )
}

export default Chatheader