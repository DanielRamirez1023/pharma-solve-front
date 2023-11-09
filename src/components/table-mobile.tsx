import { InputAdornment, TextField } from "@mui/material";
import { Dropdown } from "./dropdown";
import { Medicine } from "./types";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const TableMobile = ({ ListMedicines }: { ListMedicines: Array<Medicine> }) => {
  const [valueSearch, setValueSearch] = useState("");

  const filterMedicines = ListMedicines.filter((item) => item.name.toLowerCase().includes(valueSearch.toLowerCase()));
  return (
    <section className=" md:hidden ">
      <div className="flex justify-center">
        <TextField
          sx={{ my: "10px", width: "70%" }}
          variant="outlined"
          id="outlined-basic"
          label="Buscar"
          placeholder="Busqueda por nombre"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div>
        {filterMedicines.map((med) => (
          <Dropdown key={med._id} medicine={med} />
        ))}
      </div>
    </section>
  );
};
