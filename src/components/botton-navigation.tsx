import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useState } from "react";

export function BottonNavigation() {
  const [value, setValue] = useState("Droguerias");
  return (
    <Paper className="md:hidden" sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Droguerias"
          value="Droguerias"
          style={{ color: value === "Droguerias" ? "#45A9AF" : "black" }}
          icon={<FormatListBulletedIcon />}
        />
        <BottomNavigationAction
          label="Manual"
          value="Manual"
          style={{ color: value === "Manual" ? "#45A9AF" : "black" }}
          icon={<LibraryBooksIcon />}
        />
        <BottomNavigationAction
          label="Politicas"
          value="Politicas"
          style={{ color: value === "Politicas" ? "#45A9AF" : "black" }}
          icon={<SecurityIcon />}
        />
        <BottomNavigationAction
          label="Usuarios"
          value="Usuarios"
          style={{ color: value === "Usuarios" ? "#45A9AF" : "black" }}
          icon={<PeopleAltIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
