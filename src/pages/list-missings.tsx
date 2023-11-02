import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DataTable from "../components/data-table";
import { Link, useParams } from "react-router-dom";
import BtnModal from "../components/modal-new";
import { FormNewMissing } from "../components/form-new-missing";

export function ListMissings() {
  const { name } = useParams();
  return (
    <section>
      <header className="hidden md:flex flex-col gap-10  md:gap-0 md:flex-row justify-between px-8 py-3 items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowBackIosIcon fontSize="small" />
          <h3 className="text-xl font-semibold">Volver</h3>
        </Link>

        <p className="text-xl">
          <span className="font-semibold">Estas En:</span> {name}
        </p>
        <div className="flex gap-2 items-center">
          <p>Daniel Ramirez</p>
          <AccountCircle fontSize="large" />
        </div>
      </header>
      <header className="md:hidden flex flex-col  w-full gap-5">
        <div className="flex justify-between p-4">
          <Link to="/dashboard" className="flex items-center">
            <ArrowBackIosIcon fontSize="small" />
            <h3 className="text-xl font-semibold">Volver</h3>
          </Link>
          <div className="flex gap-2 items-center">
            <p>Daniel Ramirez</p>
            <AccountCircle fontSize="large" />
          </div>
        </div>
        <p className="text-xl text-center">
          <span className="font-semibold">Estas en:</span> {name}
        </p>
      </header>
      <article className=" px-4 md:p-0">
        <div className="flex  gap-5 justify-center  py-8 md:p-10">
          <h2 className="text-3xl font-bold">Faltantes</h2>

          <BtnModal title="Ingresar nuevo faltante">
            <FormNewMissing />
          </BtnModal>
        </div>
        <DataTable />
      </article>
    </section>
  );
}
