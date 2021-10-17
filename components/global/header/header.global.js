import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";

// Components
import { TemporaryDrawer } from "../leftNavBar.global";
import { SearchBarGlobal } from "../../global/searchBar/searchBar.global";
import { MenuHeader } from "./components/menu.header";

//Styles
import { navBarStyles } from "../../../styles/react-material-styles";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export const HeaderGlobal = (props) => {
  const classes = navBarStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} className={classes.root}>
        <AppBar>
          <Toolbar className={classes.container}>
            <TemporaryDrawer specialClass={classes.button} />

            <SearchBarGlobal />

            <MenuHeader />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
