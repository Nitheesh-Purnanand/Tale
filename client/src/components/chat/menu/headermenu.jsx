import { useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem } from '@mui/material';
const Headermenu = () =>{
    const [open,setopen] = useState(false);
    const handleClose =()=>{
        setopen(false)
    }
const handleclick = (e)=>{
    setopen(e.target)
}
return (
<>
<MoreVertIcon onClick={handleclick}></MoreVertIcon>
<Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getConetentAnchorE1 = {null}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:"center"
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
</>
)
}

export default Headermenu