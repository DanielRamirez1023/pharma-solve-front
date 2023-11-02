import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "4px",
  border: "1px solid gray",
  boxShadow: 24,
  p: 3,
};

interface PropsBtnModal {
  title: string;

  children: JSX.Element;
}

export default function BtnModal({ title, children }: PropsBtnModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          background: "#45A9AF",
          borderRadius: "5px",
          ":hover": {
            background: "#45A9AF",
          },
        }}
      >
        Crear nuevo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <header>
            <IconButton sx={{ position: "absolute", right: 30, top: 20 }} onClick={handleClose}>
              {" "}
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
          </header>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
