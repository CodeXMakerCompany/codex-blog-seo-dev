import { Box } from "@mui/system";
import React from "react";

export const AdsGlobal = ({ iframe }) => {
  return (
    <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: "1px 20px 20px" }}>
      <iframe
        title={iframe.title}
        data-aa={iframe.dataaa}
        src={iframe.src}
        style={{
          border: "0px",
          padding: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      ></iframe>
    </Box>
  );
};
