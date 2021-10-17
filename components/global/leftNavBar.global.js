import React from "react";
// import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { items } from "../../config/navbarItems.config";
import { useSelector } from "react-redux";
import { themes } from "../../styles/theme";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const TemporaryDrawer = (props) => {
  const classes = useStyles();
  // let history = useHistory();
  const { theme } = useSelector((state) => state.settings);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const goToCat = (path) => {
    // if (path === "Home") {
    //   return history.push("/");
    // }

    // history.push(`/${path}/articles`);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        backgroundColor: themes[theme].pageBackground,
        transition: "all .5s ease",
        color: themes[theme].titleColor,
        height: "100%",
      }}
    >
      <List>
        {items.map((i, index) => (
          <ListItem button key={i.text} onClick={() => goToCat(i.text)}>
            <ListItemIcon
              dangerouslySetInnerHTML={{ __html: i.icon }}
              style={{
                color: theme === "light" ? "black" : "white",
                width: "20px !important",
              }}
            ></ListItemIcon>
            <ListItemText primary={i.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              alt="codexmaker-logo"
              style={{ cursor: "pointer", width: "60px", maxWidth: "60px !important" }}
              onClick={toggleDrawer("left", true)}
              src="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
            />
          </Grid>
          <Grid item xs={8}>
            <Typography style={{ marginTop: "15%" }} variant="h6">CodexBlog</Typography>
          </Grid>
        </Grid>
      </div>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};
