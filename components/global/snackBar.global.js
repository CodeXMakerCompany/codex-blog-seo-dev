import React from "react";
import { useSelector } from "react-redux";
// import { openSnackBar } from "../../actions/snackbar.actions";
import { SimpleSnackbar } from "./snackbars/simple.snackbar";

export const SnackBarWrapper = () => {
  const { content } = useSelector((state) => state.snackbar);
  const renderSnackBar = () => {
    switch (content.type) {
      case "success":
        return <SimpleSnackbar content={content} />;
      case "error":
        return <SimpleSnackbar content={content} />;
      case "warn":
        return <SimpleSnackbar content={content} />;
      case "info":
        return <SimpleSnackbar content={content} />;
      default:
        return null;
    }
  };
  return <>{content?.status ? renderSnackBar() : null}</>;
};
