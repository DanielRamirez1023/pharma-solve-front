import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";

export function SideBar() {
  return (
    <aside className="hidden left-0 absolute w-[80%] md:static md:block h-full md:h-[705px] md:w-[20%] bg-secondary text-white p-4">
      <h1 className="font-bold text-xl border-b-2">PharmaSolve</h1>
      <nav className="flex flex-col gap-10 pt-8 text-lg">
        <a className="font-semibold flex items-center gap-2" href="">
          <FormatListBulletedIcon />
          <span>Lista de Drogerias</span>
        </a>
        <a className=" flex items-center gap-2" href="/manual">
          <LibraryBooksIcon />
          <span>Manual del sistema</span>
        </a>
        <a className=" flex items-center gap-2" href="">
          <SecurityIcon />
          <span>Politica de privacidad</span>
        </a>
        <a className=" flex items-center gap-2" href="">
          <PeopleAltIcon />
          <span>Usuarios</span>
        </a>
        <a className=" flex items-center gap-2" href="/">
          <LogoutIcon />
          <span>Cerrar sesion</span>
        </a>
      </nav>
    </aside>
  );
}
