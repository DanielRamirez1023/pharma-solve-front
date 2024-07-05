import { DataGrid, GridColDef, GridToolbar, esES } from "@mui/x-data-grid";
import BtnModal from "../components/btn-modal";
import { BottomDelete } from "../components/bottom-delete.tsx";
import { formatDate } from "../helpers/format-data.ts";
// import { SelectCustom } from "./select.tsx";
// import BasicModal from "../components/modal.tsx";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nombre", width: 200 },
  { field: "email", headerName: "Correo", width: 160 },
  {
    field: "password",
    headerName: "Contraseña",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Fecha de creacion",
    width: 210,
    renderCell: (item) => formatDate(Number(item.row.createdAt)),
  },
  {
    field: "actions",
    headerName: "Acciones",

    type: "actions",
    renderCell: (item) => (
      <div className="flex gap-2">
        <BottomDelete id={item.id.toString()} />
        <BtnModal title="Editar" type="Icon" item={item.row} />
      </div>
    ),
  },
];

export default function Users() {
  return (
    <section className="flex flex-col border border-cyan-300 text-center m-20 ">
      <p>Usuarios</p>
      <div className="hidden h-[440px] w-[100%]  md:flex md:w-[100%] rounded-sm ">
        <DataGrid
          sx={{
            ".MuiDataGrid-columnHeaders": {
              background: "#45A9AF",
              color: "white",
            },
            ".MuiDataGrid-menuIconButton": {
              color: "white",
            },
            ".MuiDataGrid-sortIcon": {
              color: "white",
            },
            ".MuiDataGrid-toolbarContainer button": {
              color: "black",
            },
            ".css-v4u5dn-MuiInputBase-root-MuiInput-root": {
              border: "1px solid #80808075",
              borderRadius: "5px",

              px: "5px",
              my: "10px",
              mr: "20px",
            },
            ".MuiDataGrid-root": {
              background: "red",
            },
          }}
          getRowId={(row) => row._id}
          rows={[]}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableDensitySelector
          disableColumnFilter
          disableColumnSelector
          disableRowSelectionOnClick
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </section>
  );
}
