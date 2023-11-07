import { useMutation } from "@apollo/client";
import { DELETE_MEDICINE } from "../graphql/mutations";
import DeleteIcon from "@mui/icons-material/Delete";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Swal from "sweetalert2";
import { LIST_MEDICINES } from "../graphql/queries";
import { ListMedicineCache } from "./types";

export const BottomDelete = ({ id }: { id: string }) => {
  const [deleteMedicine] = useMutation(DELETE_MEDICINE);

  const handleDelete = async () => {
    try {
      const response = await deleteMedicine({
        variables: {
          id,
        },
        // refetchQueries: [{ query: LIST_MEDICINES }],
        update: (cache) => {
          const dataInCache = cache.readQuery<ListMedicineCache>({ query: LIST_MEDICINES });

          if (dataInCache) {
            cache.writeQuery({
              query: LIST_MEDICINES,
              data: {
                ...dataInCache,
                ListMedicines: dataInCache.ListMedicines.filter((item) => item._id != id),
              },
            });
          }
        },
      });
      Swal.fire("Borrado!", `El faltante con id: ${id}`, "success");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
              handleDelete();
            }
          });
        }}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Tooltip>
  );
};
