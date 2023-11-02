import { Button, TextField } from "@mui/material";
import { Medicine } from "./types";

export const FormEditMissing = ({ item }: { item: Medicine }) => {
  return (
    <form className="py-4 grid grid-cols-1 grid-rows-none md:grid-rows-3 md:grid-cols-2 gap-5 ">
      <TextField size="small" variant="outlined" label="Nombre" value={item.name} />
      <TextField size="small" variant="outlined" label="Laboratorio" value={item.laboratory} />
      <TextField size="small" variant="outlined" label="Descripcion" value={item.description} />
      <TextField size="small" variant="outlined" label="Cantidad" value={item.amount} />
      <div className="md:col-span-2 flex justify-center">
        <Button
          className="w-44"
          sx={{
            background: "#45A9AF",
            "&:hover": {
              background: "#377074",
            },
          }}
          variant="contained"
        >
          Editar
        </Button>
      </div>
    </form>
  );
};
