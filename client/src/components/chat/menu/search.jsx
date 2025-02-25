import { Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import {InputBase} from "@mui/material"


const Component = styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #000000;
display:flex;
align-items:center;
`
const Wrapper = styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;
`
const Icon = styled(Box)`
position:absolute;
height:100%;
padding:6px;
color:#919191;
`
const Inputfield = styled(InputBase)`
Width:100%;
padding:16px;
height:15px;
padding-left:65px;
font-size:14px;
`

const Search = () =>{
return(
    <>
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon></SearchIcon>
            </Icon>
            <Inputfield placeholder="Search or Start a new chat"></Inputfield>
        </Wrapper>
    </Component>
    </>
)
}
export default Search