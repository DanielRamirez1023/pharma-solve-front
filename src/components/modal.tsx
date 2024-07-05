import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputDateTime from "./input-date-time";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { SelectCustom } from "./select";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 6,
};

export default function BasicModal({ status, id }: { status: string; id: string }) {
  const [open, setOpen] = useState(false);
  const [statusMedicine, setStatusMedicine] = useState(status);

  const handleChangeModal = () => setOpen(!open);

  const saveStatusCompleted = () => {
    setStatusMedicine("COMPLETADO");
    console.log(id);
    handleChangeModal();
  };

  return (
    <div>
      <SelectCustom
        handleChangeModal={handleChangeModal}
        statusMedicine={statusMedicine}
        setStatusMedicine={setStatusMedicine}
      />
      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={styleModal}>
          <IconButton sx={{ position: "absolute", right: 30, top: 20 }} onClick={handleChangeModal}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ mt: 3 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Fecha de llegada del pedido
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <InputDateTime />
              <TextField
                id="outlined-basic"
                label="Observaciones"
                variant="outlined"
                style={{ marginTop: 20, width: 300 }}
                multiline
                maxRows={4}
              />
              <Button
                onClick={saveStatusCompleted}
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  background: "#45A9AF",
                  display: "block",
                  borderRadius: "5px",
                  ":hover": { background: "#45A9AF", mx: "auto" },
                  marginTop: 2,
                }}
              >
                Guardar
              </Button>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
