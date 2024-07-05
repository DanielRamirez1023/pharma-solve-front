import { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AppContext } from "../context/global-context";

interface PropsSelect {
  handleChangeModal: () => void;
  statusMedicine: string;
  setStatusMedicine: (status: string) => void;
}

export const SelectCustom = ({ handleChangeModal, statusMedicine, setStatusMedicine }: PropsSelect) => {
  // const [statusMedicine, setStatusMedicine] = useState(status);
  const { user } = useContext(AppContext);
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === "COMPLETADO") {
      handleChangeModal();

      // Mostrar un modal en el que seleccione la fecha en la que llego el pedido y si hubo alguna novedad
    } else {
      setStatusMedicine(event.target.value);
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
