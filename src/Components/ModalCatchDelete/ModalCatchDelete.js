import React from "react";
import catched from "../../assets/alert-catch.png";
import deleted from "../../assets/alert-delete.png";
import { ModalCatchDeleteStyle, AlertAction } from "./ModalCatchDeleteStyle";

const ModalCatchDelete = ({ check, setChangeModal }) => {
  document.onkeyup = function (e) {
    e.key === "Escape" && setChangeModal(false);
  };

  const closeModal = (e) => {
    e.target.id === "modal" && setChangeModal(false);
  };

  return (
    <ModalCatchDeleteStyle id="modal" onClick={closeModal}>
      <AlertAction src={check ? catched : deleted} alt="image not found" />
    </ModalCatchDeleteStyle>
  );
};

export default ModalCatchDelete;