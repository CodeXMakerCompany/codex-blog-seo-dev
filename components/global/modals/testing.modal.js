import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../actions/modal.actions";

export const TestingModal = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal('close'));
  }
  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={true}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      </Dialog>
    </>
  );
};
