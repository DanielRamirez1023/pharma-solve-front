import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DataTable from "../../components/data-table";
import { Link, useParams } from "react-router-dom";
import BtnModal from "../../components/btn-modal";
import { ListMedicinesQuery, Medicine } from "../../components/types";
import { LIST_MEDICINES } from "../../graphql/queries";
import { ApolloError, useQuery } from "@apollo/client";
import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import { TableMobile } from "../../components/table-mobile";
import { MenuUser } from "../../components/menu-user";

export interface MedicinesContentProps {
  data: Medicine[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

function MedicinesContent({ data, loading, error }: MedicinesContentProps) {
  if (error) {
    console.log(error);
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Alert severity="error">
          <AlertTitle>Error 500</AlertTitle>
          Hubo un error al obtener la información.
        </Alert>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress sx={{ color: "#45A9AF", mt: "8%" }} />
      </Box>
    );
  }

  if (data && data.length > 0) {
    return (
      <>
        <DataTable ListMedicines={data} />
        <TableMobile ListMedicines={data} />
      </>
    );
  }

  return <p className="flex justify-center items-center text-lg text-gray-400">Aún no hay faltantes registrados</p>;
}

export function ListMissings() {
  const { data, loading, error } = useQuery<ListMedicinesQuery>(LIST_MEDICINES);

  const { name } = useParams();

  const dataFilter = data?.ListMedicines.filter((item) => item.pharmacy.toLowerCase() === name?.toLowerCase());

  return (
    <section>
      <header className="hidden md:flex flex-col gap-10  md:gap-0 md:flex-row justify-between px-8 pt-3 items-center">
        <Link to="/dashboard" className="flex items-center">
          <ArrowBackIosIcon fontSize="small" />
          <h3 className="text-xl font-semibold">Volver</h3>
        </Link>

        <p className="text-xl">
          <span className="font-semibold">Estas en:</span> {name}
        </p>
        <div className="flex  items-center">
          <MenuUser />
        </div>
      </header>
      <header className="md:hidden flex flex-col  w-full gap-5">
        <div className="flex justify-between items-center p-4">
          <Link to="/dashboard" className="flex items-center">
            <ArrowBackIosIcon fontSize="small" />
          </Link>
          <p className="text-xl text-center">
            <span className="font-semibold">Estas en:</span> {name}
          </p>
          <div className="flex gap-2 items-center">
            <MenuUser />
          </div>
        </div>
      </header>
      <article className=" px-4 md:p-0">
        <div className="flex gap-5 justify-center  py-8 md:p-10">
          <h2 className="text-3xl font-bold">Faltantes</h2>
          <BtnModal title="Ingresar nuevo faltante" type="buttom" />
        </div>
        <MedicinesContent data={dataFilter} loading={loading} error={error} />
      </article>
    </section>
  );
}
