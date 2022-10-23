import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid transparent",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function ModalComp() {
  const { modalContent, handleModal, modal } = useContext(ModalContext);
  return (
    <>
      {modal && (
        <div className="modal">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={() => handleModal()}
            onClose={() => handleModal()}
          >
            <Fade in={() => handleModal}>
              <Box sx={style}>
                {modalContent}

                <Button variant="contained" color="warning" onClick={() => handleModal()}>
                  Close Modal
                </Button>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}

export default ModalComp;
