import { DataGrid, GridColDef, GridToolbar, esES } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client/react";
import { LIST_MEDICINES } from "../graphql/queries";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ListMedicinesQuery } from "./types";
import { Box, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import { FormEditMissing } from "./form-edit-missing";
import BtnModal from "./modal";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Nombre del medicamento", width: 240 },
  { field: "laboratory", headerName: "Laboratorio", width: 160 },
  {
    field: "description",
    headerName: "Descripcion",
    width: 150,
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
    width: 200,
  },
  {
    field: "actions",
    headerName: "Acciones",

    type: "actions",
    renderCell: (item) => (
      <div className="flex gap-4">
        <Tooltip title="Borrar">
          <IconButton
            onClick={() => {
              Swal.fire({
                title: "Estas seguro?",
                text: "Que deseas borrar este faltante!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borrar!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire("Borrado!", `El faltante con id: ${item.id}`, "success");
                }
              });
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
        <BtnModal title="Editar" type="Icon">
          <FormEditMissing item={item.row} />
        </BtnModal>
      </div>
    ),
  },
];

export default function DataTable() {
  const { data, loading, error } = useQuery<ListMedicinesQuery>(LIST_MEDICINES);

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Alert severity="error">
          <AlertTitle>Error 500</AlertTitle>
          Hubo un error al obtener la informacion!
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

  console.log(data);
  if (data) {
    return (
      <div className="h-[440px] w-[100%] md:w-[85%] m-auto  rounded-sm">
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
              border: "1px solid gray",
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
          rows={data.ListMedicines}
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
}
