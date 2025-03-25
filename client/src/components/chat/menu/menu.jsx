import { Box } from "@mui/material"
import Header from "./header"
import Search from "./search"
import Conversations from "./conversations"
const Menu = () =>{
    return (
        <><Box>
        <Header></Header>
        <Search></Search>
        <Conversations/>
        </Box>
        </>
    )
}
export default Menu