import React from "react";

import { GlobalCard } from "@globalComponents/card/global.card";
import { useSelector } from "react-redux";

export const LatestElementslist = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      { posts ? <GlobalCard props={posts[0]} /> : "In work..."}
    </div>
  );
};
