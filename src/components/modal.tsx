import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PropsBtnModal {
  title: string;
  type: "buttom" | "Icon";
  children: JSX.Element;
}

export default function BtnModal({ title, type, children }: PropsBtnModal) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section>
      {type === "buttom" ? (
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
      ) : (
        <Tooltip title="Editar">
          <IconButton onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[10%] md:top-[30%] left-[50%] transform -translate-x-2/4 -transalte-y-2/4 bg-white w-[90%] md:w-[60%] lg:w-[40%] p-4 border-2 border-gray-400 rounded-md">
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
        </div>
      </Modal>
    </section>
  );
}
