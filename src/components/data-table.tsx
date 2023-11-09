import { DataGrid, GridColDef, GridToolbar, esES } from "@mui/x-data-grid";
import BtnModal from "./modal";
import { Medicine } from "./types";
import { BottomDelete } from "./bottom-delete";
import { formatDate } from "./format-date";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nombre del medicamento", width: 200 },
  { field: "laboratory", headerName: "Laboratorio", width: 160 },
  {
    field: "description",
    headerName: "Descripcion",
    width: 200,
  },
  {
    field: "amount",
    headerName: "Cantidad",
    width: 120,
    align: "center",
  },
  {
    field: "createdAt",
    headerName: "Fecha de ingreso",
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

export default function DataTable({ ListMedicines }: { ListMedicines: Array<Medicine> }) {
  return (
    <div className="hidden md:flex h-[440px] w-[100%] md:w-[75%] m-auto  rounded-sm ">
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
        rows={ListMedicines}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableDensitySelector
        disableColumnFilter
        disableColumnSelector
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
  );
}
