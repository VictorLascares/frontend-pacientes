const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Iniciar Sesión y Administra tus{" "}
          <span className="text-black">pacientes</span>
        </h1>
      </div>
      <div>
        <form action="">
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
      </div>
    </>
  );
};

export default Login;
