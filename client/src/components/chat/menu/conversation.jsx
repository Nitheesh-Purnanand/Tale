import { Box,styled,Typography } from "@mui/material"
const Component = styled(Box)`
display:flex;
height:45px;
padding:13px 0px;
cursor:pointer;
`
const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:"50%",
    padding:"0 14px",
    objectFit:"cover"
})

const Conversation = ({user}) =>{
    return(
        <Component>
            <Box>
                <Image src={user.picture} alt="dp"/>            
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}
export default Conversation