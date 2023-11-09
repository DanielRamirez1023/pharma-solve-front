import { BottonNavigation } from "./../components/botton-navigation";
import { SideBar } from "../components/sidebar";
import { Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <section className="flex justify-center">
      <SideBar />

      <Outlet />

      <BottonNavigation />
    </section>
  );
}
