import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";

const Login = () => {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({});

  const { setAuth } =  useAuth();

  const navigate = useNavigate();

  function handleChange(e) {
    setAuthInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(authInfo).includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await axiosClient.post("/veterinarios/login", authInfo);
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/admin");
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
          Iniciar Sesión y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alert.msg ? <Alert alert={alert} /> : null}
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
              value={authInfo.email}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
              value={authInfo.password}
              onChange={handleChange}
            />
          </div>

          <div className="md:flex justify-end">
            <input
              type="submit"
              value="Iniciar Sesión"
              className="bg-indigo-700 w-full md:w-auto py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-500 transition-all"
            />
          </div>
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/registrar"
            className="block text-center my-5 text-gray-500"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:underline">Registrate</span>
          </Link>
          <Link
            to="/olvide-password"
            className="block text-center my-5 text-indigo-600 hover:underline"
          >
            Olvide mi Contraseña
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
