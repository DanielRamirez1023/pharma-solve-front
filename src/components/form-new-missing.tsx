import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_MEDICINE } from "../graphql/mutations";
import Swal from "sweetalert2";
import { LIST_MEDICINES } from "../graphql/queries";
import { CreateMedicineMutation, ListMedicineCache } from "./types";

const validationSchema = yup.object({
  name: yup.string().required("Debes ingresar el nombre"),
  laboratory: yup.string().required("Debes ingresar el laboratorio"),
  description: yup.string().required("Debes ingresar la descripcion"),
  amount: yup.number().required("Debes ingresar la cantidad"),
});

export const FormNewMissing = ({ handleClose }: { handleClose: () => void }) => {
  const [CreateMedicine, { loading }] = useMutation<CreateMedicineMutation>(CREATE_MEDICINE, {
    // refetchQueries: [{ query: LIST_MEDICINES }],
    update: (cache, { data }) => {
      // obtengo la informacion que esta en la cache
      // la estamos tipando para indicar que informacion devolvera esta lectura
      const dataInCache = cache.readQuery<ListMedicineCache>({ query: LIST_MEDICINES });

      // nos aseguramos que haya data en la cache y la respuesta devuelta la informacion a actualizar
      if (dataInCache && data) {
        // escribimos en la cache referenciando en que query quiere escribir y que informacion mandar
        cache.writeQuery({
          query: LIST_MEDICINES,
          // le decimos, mantenga todo lo que tiene en la cache pero en ListMedcines modifiqueme
          data: {
            ...dataInCache,
            ListMedicines: [...dataInCache.ListMedicines, data.createMedicine],
          },
        });
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      laboratory: "",
      description: "",
      amount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await CreateMedicine({
          variables: {
            name: values.name,
            laboratory: values.laboratory,
            description: values.description,
            amount: Number(values.amount),
            pharmacy: "Loceria",
          },
        });

        handleClose();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se ha agregado con exito el faltante",

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
        type="text"
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
        type="text"
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
        type="text"
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
          {loading ? <CircularProgress sx={{ color: "white" }} size={20} /> : "CREAR"}
        </Button>
      </div>
    </form>
  );
};
