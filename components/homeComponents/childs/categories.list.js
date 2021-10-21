/* eslint-disable array-callback-return */
import React from "react";
import { Chip } from "@material-ui/core";
import { useRouter } from "next/router";

import { items } from "../../../config/navbarItems.config";

export const CategoriesList = () => {
  const router = useRouter();

  const goToCategory = (name) => {
    router.push({
      pathname: '/category/[name]',
      query: { name: name },
    })
  };

  
  return (
    <div className="fontQuantico">
      {items.map((item) => {
        if (item.text !== "Home") {
          return (
            <a  onClick={() => goToCategory(item.text)} key={item.text}>
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
            </a>
          );
        }
      })}
    </div>
  );
};
