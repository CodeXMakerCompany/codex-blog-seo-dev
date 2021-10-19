/* eslint-disable array-callback-return */
import React from "react";
import { Chip } from "@material-ui/core";
import Link from "next/link";

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
            <Link href={`category/${item.text}`} passHref key={item.text}>
              <Chip
                style={{
                  margin: "2px",
                  backgroundColor: item.color,
                  color: "black",
                  borderStyle: "solid",
                  borderColor: "#005985",
                  fontSize: "14px",
                  fontFamily: "'Quantico', sans-serif",
                }}
                label={item.text}
                onClick={() => goToCategory(item.text)}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};
