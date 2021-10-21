import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../../redux/actions/auth.actions";
import Cookies from "universal-cookie";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import IconButton from "@mui/material/IconButton";
import { PersonRounded } from "@mui/icons-material";

import { SwitchThemeMenu } from "./childs/switchTheme.menu";

export const MenuHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const { user } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    setAnchorEl(null);
    return router.push({
      pathname: "/auth/login",
    });
  };
  const handleLogout = () => {
    cookies.remove("token",  { path: '/' });
    dispatch(setUser({}));

    return router.push({
      pathname: "/",
    });
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
        {user?._id ? (
          <img
            style={{ width: "50px", borderRadius: "50%" }}
            src={user.avatar}
          />
        ) : (
          <PersonRounded />
        )}
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
        {user?._id ? (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        ) : (
          <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>

            <div>
              <MenuItem onClick={handleClose}>
                Mode : <SwitchThemeMenu />
              </MenuItem>
            </div>

            <MenuItem onClick={handleLogin}>Login</MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};
