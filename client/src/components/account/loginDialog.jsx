import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/Accountprovider";
import { GoogleLogin } from "@react-oauth/google";
import { addUser } from "../../service/api";

const Logindialog = () => {
    const { setAccount } = useContext(AccountContext);

    const onloginsuccess = async(res) => {
        if (res.credential) {
            const decoded = jwtDecode(res.credential);
            setAccount(decoded);
            await addUser(decoded)
            console.log(decoded);
        } else {
            console.error("Google login response does not contain a credential.");
        }
    };
    
    const onloginerror = () => {
        console.error("Google login failed.");
    };

    const dialogstyle = {
        height: "96%",
        marginTop: "12%",
        width: "60%",
        maxWidth: "100%",
        maxHeight: "100%", // ✅ Fixed typo
        boxShadow: "1px",
        overflow: "none",
    };

    const Component = styled(Box)`
        display: flex;
    `;

    const Title = styled(Typography)`
        font-size: 40px;
    `;

    return (
        <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
            <Component>
                <Box>
                    <Title>To use WhatsApp on your computer</Title>
                    <List>
                        <ListItem>1. Open WhatsApp on your mobile</ListItem>
                        <ListItem>2. Tap menu</ListItem>
                        <ListItem>3. Point the phone to the screen</ListItem>
                    </List>
                </Box>
                <Box>
                    <img alt="QR code" />
                    <Box>
                        <GoogleLogin onSuccess={onloginsuccess} onError={onloginerror} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    );
};

export default Logindialog;
