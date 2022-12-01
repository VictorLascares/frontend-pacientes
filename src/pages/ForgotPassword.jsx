import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setAlert({ msg: "El email es obligatorio", error: true });
      return;
    }

    try {
      const { data } = await axiosClient.post("/veterinarios/forgot-password", {
        email,
      });
      setAlert({
        msg: data.msg,
        error: false
      })
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Recupera tu Acceso y no Pierdas{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alert.msg && <Alert alert={alert} setAlert={setAlert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ejemplo@correo.com"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:flex justify-end">
            <input
              type="submit"
              value="Enviar instrucciones"
              className="bg-indigo-700 w-full md:w-auto py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-500 transition-all"
            />
          </div>
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:underline">
              Iniciar Sesión
            </span>
          </Link>
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:underline">Registrate</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ForgotPassword;
