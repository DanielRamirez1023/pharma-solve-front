import { Button, Card, CardContent, TextField, CircularProgress } from "@mui/material";
import Logo from "./../assets/images/pharmasolve.png";
import { LOGIN } from "../graphql/mutations";
import { LoginQuery } from "../components/types";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/global-context";

const validationSchema = yup.object({
  email: yup.string().required("Debes ingresar el correo"),
  password: yup.string().required("Debes ingresar la contraseña"),
});

export function Login() {
  const { setUser } = useContext(AppContext);
  const [login, { loading }] = useMutation<LoginQuery>(LOGIN, {
    onCompleted: (data) => {
      setUser(data.login.user);
    },
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login({
          variables: {
            email: values.email,
            password: values.password,
          },
        });

        const responseToken = response.data?.login.token;
        const userLogin = response.data?.login.user;
        // guardar el token en el localstorage
        localStorage.setItem("user", JSON.stringify(userLogin));
        localStorage.setItem("token", responseToken!);
        navigate("/dashboard");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      }
    },
  });

  return (
    <section className="flex flex-col gap-3 justify-center items-center w-full h-[600px]">
      <img src={Logo} alt="logo-pharmaSolve" />
      <Card className={`p-10 w-[90%] lg:w-[30%] border-2`}>
        <CardContent>
          <form className="flex flex-col gap-4 text-center" onSubmit={formik.handleSubmit}>
            <h1 className="font-bold text-2xl mb-5">Iniciar Sesion</h1>
            <TextField
              id="email"
              name="email"
              label="Correo"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <a href="/" className="text-blue-500">
              ¿Recuperar Contraseña?
            </a>

            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "#45A9AF",
                "&:hover": {
                  background: "#377074",
                },
              }}
            >
              {loading ? <CircularProgress sx={{ color: "white" }} size={20} /> : "Iniciar Sesion"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
