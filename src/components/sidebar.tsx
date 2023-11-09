import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="hidden left-0 absolute w-[80%] md:fixed md:block h-full md:h-[705px] md:w-[20%] bg-secondary text-white p-4">
      <h1 className="font-bold text-xl border-b-2">PharmaSolve</h1>
      <nav className="flex flex-col gap-10 pt-8 text-lg">
        <Link className="font-semibold flex items-center gap-2" to={""}>
          <FormatListBulletedIcon />
          <span>Lista de Drogerias</span>
        </Link>
        <Link className=" flex items-center gap-2" to={"manual"}>
          <LibraryBooksIcon />
          <span>Manual del sistema</span>
        </Link>
        <Link className=" flex items-center gap-2" to={"politicas"}>
          <SecurityIcon />
          <span>Politica de privacidad</span>
        </Link>
        <Link className=" flex items-center gap-2" to={"usuarios"}>
          <PeopleAltIcon />
          <span>Usuarios</span>
        </Link>
        <a className=" flex items-center gap-2" href="/">
          <LogoutIcon />
          <span>Cerrar sesion</span>
        </a>
      </nav>
    </aside>
  );
}
