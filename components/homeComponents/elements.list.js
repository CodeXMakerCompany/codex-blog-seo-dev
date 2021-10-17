import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";

import { GlobalCard } from "../global/card/global.card";

export const ElementsList = ({ list }) => {
  return (
    <div>
      <Grid container spacing={4} align="center">
        {list.map((item, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box pt={2}>
                <GlobalCard props={item} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
