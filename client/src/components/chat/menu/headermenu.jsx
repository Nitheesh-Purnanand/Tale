import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";

const Headermenu = ({ setopen }) => {
  const [anchorEl, setAnchorEl] = useState(null); // Use null instead of false

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element properly
  };

  return (
    <>
      <MoreVertIcon onClick={handleClick} style={{ cursor: "pointer" }} />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)} // Ensure open is a boolean
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => { handleClose(); setopen(true); }}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Headermenu;
