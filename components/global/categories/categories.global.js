import { Box } from "@material-ui/core";
import React from "react";
import { CarouselComponent } from "./components/carousel";

export const CategoriesGlobal = () => {
  return (
    <Box pt={3} pb={3} ml={10}>
          <CarouselComponent/>
    </Box>
  );
};
