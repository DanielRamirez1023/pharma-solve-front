import { MenuUser } from "../components/menu-user";
import { Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";

export const PharmacyList = () => {
  return (
    <div className="flex flex-col w-[80%] items-center justify-center ">
      <MenuUser />

      <header className="text-center mt-24 mb-10 sm:my-10">
        <h2 className="font-bold text-xl">Lista de droguerías</h2>
        <p>Seleccione la drogeria a la que desea ingresar</p>
      </header>

      <article className="grid grid-cols-2 gap-4 md:gap-10 ">
        <Link
          to={`/listMissings/${"variante"}`}
          className="w-36 h-36  md:w-48 md:h-48 flex flex-col justify-center items-center border-2 rounded-md  shadow-xl"
        >
          <StoreIcon fontSize="large" />
          <h3>Variante</h3>
        </Link>

        <Link
          to={`/listMissings/${"loceria"}`}
          className="w-36 h-36  md:w-48 md:h-48 flex  flex-col justify-center items-center border-2 rounded-md shadow-xl"
        >
          <StoreIcon fontSize="large" />
          <h3>Loceria</h3>
        </Link>
        <Link
          to={`/listMissings/${"tricentenario"}`}
          className="w-36 h-36  md:w-48 md:h-48 flex flex-col justify-center items-center border-2 rounded-md shadow-xl"
        >
          <StoreIcon fontSize="large" />
          <h3>Tricentenario</h3>
        </Link>
        <Link
          to={`/listMissings/${"popular"}`}
          className="w-36 h-36  md:w-48 md:h-48 flex flex-col justify-center items-center border-2 rounded-md  shadow-xl"
        >
          <StoreIcon fontSize="large" />
          <h3>Popular</h3>
        </Link>
      </article>
    </div>
  );
};
