import { Button, Card, CardContent, TextField } from "@mui/material";
import Logo from "./../assets/images/pharmasolve.png";
// interface typeDashboard {
//   setAuth: React.Dispatch<React.SetStateAction<boolean>>;
// }

export function Login() {
  return (
    <section className="flex flex-col gap-3 justify-center items-center w-full h-[600px]">
      <img src={Logo} alt="logo-pharmaSolve" />
      <Card className={`p-10 w-[90%] lg:w-[30%] border-2   `}>
        <CardContent>
          <form className="flex flex-col gap-4 text-center">
            <h1 className="font-bold text-2xl mb-5">Iniciar Sesion</h1>
            <TextField id="outlined-basic" label="Usuario" variant="outlined" />
            <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" />
            <a href="/" className="text-blue-500">
              ¿Recuperar Contraseña?
            </a>
            <a href="/dashboard">
              <Button
                variant="contained"
                sx={{
                  background: "#45A9AF",
                  "&:hover": {
                    background: "#377074",
                  },
                }}
              >
                Iniciar Sesion
              </Button>
            </a>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
