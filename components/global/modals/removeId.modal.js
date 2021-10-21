import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@mui/material";
7;

import { useDispatch } from "react-redux";
import { toggleModal } from "../../../redux/actions/modal.actions";
import {
  deletePost,
  fetchPostsByPagination,
} from "../../../redux/actions/posts.action";

export const RemovingModal = ({ content }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal("close"));
  };
  const deleteItem = (id) => {
    dispatch(toggleModal("close"));
    dispatch(deletePost(id));
    dispatch(fetchPostsByPagination(0, 10));
  };
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={true}
      >
        <DialogTitle id="simple-dialog-title">
          Seguro de eliminar {content.id}
        </DialogTitle>
        <Button variant="contained" onClick={() => deleteItem(content.id)}>
          Borrar
        </Button>
      </Dialog>
    </>
  );
};
