
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DataTable from "../components/data-table";

export function ListMissings() {
  return (
    <section className="">
        <header className="border-2 flex justify-between px-8 py-3 items-center">
            <h1>Sede tricentenario</h1>
            <div className="flex gap-2 items-center">
            <TextField
            size="small"
            variant="outlined"
        placeholder="Buscar medicamento"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}    
      />
            <AccountCircle fontSize="large" /> 
            </div>
        </header>
        <article className="p-10">
         <DataTable/> 
        </article>
    </section>
  )
}

