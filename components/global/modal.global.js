import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../actions/modal.actions";
import { TestingModal } from "./modals/testing.modal";

export const ModalWrapper = () => {
  const { status, content } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal("close"));
  };

  const renderModal = () => {
    switch (content.type) {
      case "testing":
        return <TestingModal content={content} closeModal={closeModal} />;
      default:
        return null;
    }
  };
  return <>{status ? renderModal() : null}</>;
};
