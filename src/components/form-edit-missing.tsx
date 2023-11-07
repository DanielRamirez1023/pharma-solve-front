import { Button, TextField, CircularProgress } from "@mui/material";
import { ListMedicineCache, Medicine } from "./types";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { UPDATE_MEDICINE } from "../graphql/mutations";
import { LIST_MEDICINES } from "../graphql/queries";

const validationSchema = yup.object({
  name: yup.string().required("Debes ingresar el nombre"),
  laboratory: yup.string().required("Debes ingresar el laboratorio"),
  description: yup.string().required("Debes ingresar la descripcion"),
  amount: yup.number().required("Debes ingresar la cantidad"),
});

interface UpdateMedicineMutation {
  updateMedicine: Medicine;
}

export const FormEditMissing = ({
  item,
  handleClose,
}: {
  item: Medicine | null | undefined;
  handleClose: () => void;
}) => {
  const [updateMedicine, { loading }] = useMutation<UpdateMedicineMutation>(UPDATE_MEDICINE, {
    // refetchQueries: [{ query: LIST_MEDICINES }],
    update: (cache, { data }) => {
      const dataInCache = cache.readQuery<ListMedicineCache>({ query: LIST_MEDICINES });

      if (dataInCache && data) {
        cache.writeQuery({
          query: LIST_MEDICINES,
          data: {
            ...dataInCache,
            ListMedicines: dataInCache.ListMedicines.map((row) => {
              if (row._id === item?._id) {
                return {
                  ...data.updateMedicine,
                };
              }
              return row;
            }),
          },
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      id: item?._id,
      name: item?.name,
      laboratory: item?.laboratory,
      description: item?.description,
      amount: item?.amount,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await updateMedicine({
          variables: {
            id: values.id,
            name: values.name,
            laboratory: values.laboratory,
            description: values.description,
            amount: Number(values.amount),
          },
        });

        handleClose();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha editado con exito",

          showConfirmButton: false,
          timer: 1000,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form className="py-4 grid grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 gap-5" onSubmit={formik.handleSubmit}>
      <TextField
        size="small"
        variant="outlined"
        label="Nombre"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        size="small"
        variant="outlined"
        label="Laboratorio"
        id="laboratory"
        name="laboratory"
        value={formik.values.laboratory}
        onChange={formik.handleChange}
        error={formik.touched.laboratory && Boolean(formik.errors.laboratory)}
        helperText={formik.touched.laboratory && formik.errors.laboratory}
      />
      <TextField
        size="small"
        variant="outlined"
        label="Descripcion"
        id="description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        size="small"
        variant="outlined"
        label="Cantidad"
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
      />

      <div className="sm:col-span-2 flex justify-center">
        <Button
          type="submit"
          className="w-44"
          sx={{
            background: "#45A9AF",
            "&:hover": {
              background: "#377074",
            },
          }}
          variant="contained"
        >
          {loading ? <CircularProgress sx={{ color: "white" }} size={20} /> : "Editar"}
        </Button>
      </div>
    </form>
  );
};
