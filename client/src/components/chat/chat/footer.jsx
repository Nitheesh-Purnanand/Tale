import { Box,InputBase,styled} from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const Container = styled(Box)`
height:55px;
background:#ededed;
`

const Footer =()=>{
    return(
        <><h1>hello</h1></>
        // <Container>
        //     <EmojiEmotionsOutlinedIcon></EmojiEmotionsOutlinedIcon>
        //     <AttachFileOutlinedIcon></AttachFileOutlinedIcon>
        //     <Box>
        //         <InputBase
        //         placeholder=" Type a mesaage! "
        //         ></InputBase>
        //     </Box>
        // </Container>
    )
}

export default Footer