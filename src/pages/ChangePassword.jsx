import { useState } from "react";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const ChangePassword = () => {
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const { changePassword } = useAuth();

  const handleChange = (e) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(password).includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password.password.length < 6) {
      setAlert({
        msg: "La contraseña debe tener mínimo 6 carácteres",
        error: true,
      });
      return;
    }

    if (password.password !== password.confirmPassword) {
      setAlert({
        msg: "Las contraseñas no coinciden, confirma de nuevo",
        error: true,
      });
      return;
    }

    changePassword({
      currentPassword: password.currentPassword,
      password: password.password,
    });
  };

  return (
    <>
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Contraseña
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Contraseña Aquí</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/4 bg-white shadow rounded-lg p-5">
          <form onSubmit={handleSubmit} className="mb-5" noValidate>
            <div className="my-3">
              <label
                htmlFor="phone"
                className="uppercase font-bold text-gray-600"
              >
                Contraseña Actual
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                id="currentPassword"
                placeholder="Ingresa tu contraseña actual"
                value={password.currentPassword || ""}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="name"
                className="uppercase font-bold text-gray-600"
              >
                Nueva Contraseña
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                id="password"
                placeholder="Ingresa tu nueva contraseña"
                value={password.password || ""}
                onChange={handleChange}
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="phone"
                className="uppercase font-bold text-gray-600"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                id="confirmPassword"
                placeholder="Ingresa una vez más tu nueva contraseña"
                value={password.confirmPassword || ""}
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              value="Actualizar Contraseña"
              className="bg-indigo-700 hover:bg-indigo-500 px-10 py-3 font-bold w-full uppercase mt-5 text-white rounded-lg transition-all cursor-pointer"
            />
          </form>
          {alert.msg ? <Alert alert={alert} setAlert={setAlert} /> : null}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
