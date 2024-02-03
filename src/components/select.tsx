import { useState, useContext } from "react";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AppContext } from "../context/global-context";
import Swal from "sweetalert2";

interface PropsSelect {
  status: string;
}

export const SelectCustom = ({ status }: PropsSelect) => {
  // console.log(status);
  const [statusMedicine, setStatusMedicine] = useState(status);
  const { user } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    setStatusMedicine(event.target.value);
    console.log(event.target.value);
    if (event.target.value === "COMPLETADO") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `No puedes cambiar el estado de un faltante completado`,
      });
    }
  };
  return (
    <FormControl
      sx={{
        minWidth: 130,
        minHeight: 5,
        ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
          padding: "0.5rem 0.5rem",
          color: "white",
        },
        ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
          color: "white",
        },
        backgroundColor: `${
          statusMedicine === "PENDIENTE" ? "#6366F1" : statusMedicine === "COMPLETADO" ? "#34D399" : "#F87171"
        }`,
        border: "1px solid white",
        borderRadius: "5px",
      }}
    >
      <Select
        value={statusMedicine}
        onChange={handleChange}
        displayEmpty
        disabled={user.role === "Regente"}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="SIN_REVISAR">sin revisar</MenuItem>
        <MenuItem disabled={user.role === "Regente"} value="PENDIENTE">
          pendiente
        </MenuItem>
        <MenuItem value="COMPLETADO">completado</MenuItem>
      </Select>
    </FormControl>
  );
};
