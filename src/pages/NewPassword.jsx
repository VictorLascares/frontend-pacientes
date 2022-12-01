import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [changedPassword, setChangedPassword] = useState(false);
  const [alert, setAlert] = useState({});

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    checkToken();
  }, []);

  async function checkToken() {
    try {
      await axiosClient(`/veterinarios/forgot-password/${token}`);
      setAlert({
        msg: "Ingresa tu nueva contraseña",
        error: false,
      });
      setValidToken(true);
    } catch (error) {
      setAlert({
        msg: "Hubo un error con el enlace",
        error: true,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ msg: "Las contraseñas no coinciden", error: true });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "La contraseña es muy corta, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }

    // Actualizar contraseña
    updatePassword();
  }

  async function updatePassword() {
    try {
      const { data } = await axiosClient.post(
        `/veterinarios/forgot-password/${token}`,
        {
          password,
        }
      );
      setAlert({
        msg: data.msg,
        error: false,
      });
      setChangedPassword(true);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Reestablece tu password y no pierdas acceso a{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alert.msg ? <Alert alert={alert} setAlert={setAlert} /> : null}

        {validToken && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label
                  htmlFor="password"
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="my-5">
                <label
                  htmlFor="confirmPassword"
                  className="uppercase text-gray-600 block text-xl font-bold"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="md:flex justify-end">
                <input
                  type="submit"
                  value="Guardar"
                  className="bg-indigo-700 w-full md:w-auto py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-500 transition-all"
                />
              </div>
            </form>
            {changedPassword && (
              <Link to="/" className="block text-center my-5 text-gray-500">
                ¿Ya tienes una cuenta?{" "}
                <span className="text-indigo-600 hover:underline">
                  Iniciar Sesión
                </span>
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NewPassword;
