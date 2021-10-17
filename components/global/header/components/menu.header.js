import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import { PersonRounded } from "@mui/icons-material";

import { SwitchThemeMenu } from "./childs/switchTheme.menu";
// import { useHistory } from "react-router";

export const MenuHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const history = useHistory()
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    // history.push("/auth/login");
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        id="basic-IconButton"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <PersonRounded />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>
            Mode : <SwitchThemeMenu />
          </MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleLogin}>Login</MenuItem>
        </div>
      </Menu>
    </div>
  );
};
