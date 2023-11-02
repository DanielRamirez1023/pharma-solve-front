import { Button, TextField } from "@mui/material";

export const FormNewMissing = () => {
  return (
    <form className="py-4 grid grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-5 ">
      <TextField size="small" variant="outlined" label="Nombre" />
      <TextField size="small" variant="outlined" label="Laboratorio" />
      <TextField size="small" variant="outlined" label="Descripcion" />
      <TextField size="small" variant="outlined" label="Cantidad" />
      <div className="col-span-2 flex justify-center">
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
          Crear
        </Button>
      </div>
    </form>
  );
};
