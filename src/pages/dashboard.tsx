import { BottonNavigation } from "./../components/botton-navigation";
import { SideBar } from "../components/sidebar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export function Dashboard() {
  return (
    <section>
      <Grid container>
        <Grid item sm={4} lg={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={7} lg={10}>
          <Outlet />
        </Grid>
      </Grid>

      <BottonNavigation />
    </section>
  );
}
