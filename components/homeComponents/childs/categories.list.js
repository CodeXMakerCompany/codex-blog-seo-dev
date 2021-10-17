/* eslint-disable array-callback-return */
import { Chip } from "@material-ui/core";
import React from "react";
// import { useHistory } from "react-router";
import { items } from "../../../config/navbarItems.config";
export const CategoriesList = () => {
  // const history = useHistory();
  const goToCategory = (path) => {
    // if (path === "Home") {
    //   return history.push("/");
    // }

    // history.push(`/${path}/articles`);
  };
  return (
    <div className="fontQuantico">
      {items.map((item) => {
        if (item.text !== "Home") {
          return (
            <Chip
            key={item.text}
              style={{
                margin: "2px",
                backgroundColor: item.color,
                color: "black",
                borderStyle: "solid",
                borderColor: "#005985",
                fontSize: "14px",
                fontFamily: "'Quantico', sans-serif"
              }}
              label={item.text}
              onClick={() => goToCategory(item.text)}
            />
          );
        }
      })}
    </div>
  );
};
