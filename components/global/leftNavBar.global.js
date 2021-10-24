/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { themes } from "../../styles/theme";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

import { items } from "../../config/navbarItems.config";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/actions/category.action";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const getMyIcon = (name) => {
  const result = items.filter((i) => i.text === name)[0];
  return result?.icon || "no hay";
};

const getMyColor = (name) => {
  const result = items.filter((i) => i.text === name)[0];
  return result?.color || "no hay";
};

export const TemporaryDrawer = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settings);
  const { categories } = useSelector((state) => state.categories);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
        <ListItem
          button
          key={"home"}
          onClick={() => {
            router.push({
              pathname: "/",
            });
          }}
        >
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        {categories?.map((i, index) => (
          <ListItem
            button
            key={i.name}
            onClick={() => {
              if (i.text === "Home") {
                return router.push({
                  pathname: "/",
                });
              }
              router.push({
                pathname: "/category/[name]",
                query: { name: i.name },
              });
            }}
          >
            <ListItemIcon
              dangerouslySetInnerHTML={{ __html: getMyIcon(i.name) }}
              style={{
                color: getMyColor(i.name),
                width: "20px !important",
              }}
            ></ListItemIcon>
            <ListItemText primary={i.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              alt="codexmaker-logo"
              style={{
                cursor: "pointer",
                width: "60px",
                maxWidth: "60px !important",
              }}
              onClick={toggleDrawer("left", true)}
              src="https://res.cloudinary.com/codexmaker/image/upload/v1630026497/logos/codexmaker_logo_my3ecl.png"
            />
          </Grid>
          {/* <Grid item xs={8}>
            <Typography style={{ marginTop: "15%" }} variant="h6">
              CodexBlog
            </Typography>
          </Grid> */}
        </Grid>
      </div>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};
