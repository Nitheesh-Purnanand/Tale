import { Dialog,Box, styled } from "@mui/material"
import Menu from "./menu/menu";
import Emptychat from "./chat/emptychat"
import { Component } from "react";
import Chatbox from "./chat/chatbox";

const Chatdialog = () =>{
    const Component1 = styled(Box)`
    display:flex;
    `
    const LeftComponent = styled(Box)`
    min-width:450px;
    `
    const Rightcomponent = styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0,0.14)
    `
    const dialogstyle = {
        height: "95%",
        width:"100%",
        marginTop: "2%",
        maxWidth: "100%",
        maxHeight: "100%",
        boxShadow: "2px",
        borderRadius:"5px",
        overflow: "none",
    };
    return (
        <>
        <Dialog 
        open = {true}
        PaperProps={{ sx: dialogstyle }} hideBackdrop={true} maxWidth={"md"}
        >

<Component1>
    <LeftComponent>
        <Menu/>
    </LeftComponent>
    <Rightcomponent>
        {/* <Emptychat/> */}
        <Chatbox></Chatbox>
    </Rightcomponent>
</Component1>

        </Dialog>
        </>
    )
}
export default Chatdialog 