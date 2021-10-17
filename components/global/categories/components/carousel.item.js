import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Fade from "@material-ui/core/Fade";
import NestedMenuItem from "material-ui-nested-menu-item";

export const CarouselItem = ({ props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuPosition, setMenuPosition] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    history.push(`/tcg/${props.title}`);
    setAnchorEl(null);
    setMenuPosition(null);
  };
  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  const handleMainClick = (event) => {
    //console.log(event);
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <div onClick={handleMainClick}>
      <Button
        variant="contained"
        style={{ backgroundColor: props.background }}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </NestedMenuItem>
      </Menu>
    </div>
  );
};
