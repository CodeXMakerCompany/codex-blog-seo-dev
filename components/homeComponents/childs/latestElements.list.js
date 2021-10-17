import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const LatestElementslist = () => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title={
          <Typography noWrap gutterBottom variant="h6" component="h4">
            aaa
          </Typography>
        }
        style={{ display: "block", overflow: "hidden" }}
      />

      <div>
        <CardMedia component="img" height="100" />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          sdsdsds
        </Typography>
      </CardContent>
    </Card>
  );
};
