import { Button, CircularProgress, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Medicine } from "./types";
import { useMutation } from "@apollo/client";
import { CREATE_MEDICINE } from "../graphql/mutations";

const validationSchema = yup.object({
  name: yup.string().required("Debe ingresar el nombre"),
  laboratory: yup.string().required("Debe ingresar el nombre"),
  description: yup.string().required("Debe ingresar el nombre"),
  amount: yup.number().required("Debe ingresar el nombre"),
});

export const FormNewMissing = () => {
  const [CreateMedicine, { loading }] = useMutation(CREATE_MEDICINE);

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
      />
      <TextField
        size="small"
        variant="outlined"
        label="Cantidad"
        id="amount"
        name="amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
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
          {loading ? <CircularProgress /> : "Crear"}
        </Button>
      </div>
    </form>
  );
};
