import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../config/axios";
import Alert from "../components/Alert";

const Register = () => {
  const [veterinary, setVeterinary] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 const [alert, setAlert] = useState({});


  function handleChange(e) {
    setVeterinary((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(veterinary).includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    if (veterinary.password !== veterinary.confirmPassword) {
      setAlert({ msg: "Las contraseñas no coinciden", error: true });
      return;
    }

    if (veterinary.password.length < 6) {
      setAlert({
        msg: "La contraseña es muy corta, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }

    // Crear el usuario en la API
    createUser();
  }

  async function createUser() {
    try {
      await axiosClient.post("/veterinarios", veterinary);
      setAlert({
        msg: "Usuario creado correctamente, revisa tu email",
        error: false,
      });
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
          Crea tu cuenta y Administra{" "}
          <span className="text-black">tus pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alert.msg ? <Alert alert={alert} /> : null}

        <form action="" onSubmit={handleSubmit}>
          <div className="my-5">
            <label
              htmlFor="name"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
              value={veterinary.name}
              onChange={handleChange}
            />
          </div>
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
              value={veterinary.email}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl focus:outline-none"
              value={veterinary.password}
              onChange={handleChange}
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
              value={veterinary.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="md:flex justify-end">
            <input
              type="submit"
              value="Crear cuenta"
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

export default Register;
