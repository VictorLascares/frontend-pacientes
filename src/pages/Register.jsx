import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [veterinary, setVeterinary] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setVeterinary((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(veterinary).includes("")) {
      console.log("Hay campos vacios");
      return;
    }

    if (veterinary.password !== veterinary.confirmPassword) {
      console.log("Los password no son iguales");
      return;
    }

    if (veterinary.password.length < 6) {
      console.log("El password es muy corto, agrega minimo 6 caracteres");
      return;
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
