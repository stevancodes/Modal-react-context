import React, { useContext } from "react";
import { ModalContext } from "./ModalContext";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Component1({ title }) {
  const { handleModal } = useContext(ModalContext);
  return (
    <div className="component">
      <Typography variant="h5">This is {title}</Typography>
      <Button variant="contained" onClick={() => handleModal(title)}>
        Click for popup
      </Button>
    </div>
  );
}

export default Component1;
