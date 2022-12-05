import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <>
      <nav>
        <Link
          to="/admin/cambiar-password"
          className="font-bold uppercase text-gray-400 hover:underline"
        >
          Cambiar Contraseña
        </Link>
      </nav>
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Información Aquí</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form>
            <div className="my-3 lg:flex lg:justify-between lg:gap-3">
              <div className="lg:w-1/2">
                <label
                  htmlFor="name"
                  className="uppercase font-bold text-gray-600"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                  id="name"
                />
              </div>
              <div className="lg:w-1/2 my-3 lg:my-0">
                <label
                  htmlFor="phone"
                  className="uppercase font-bold text-gray-600"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                  id="phone"
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="web"
                className="uppercase font-bold text-gray-600"
              >
                Sitio Web
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                id="web"
              />
            </div>

            <div className="my-2">
              <label
                htmlFor="email"
                className="uppercase font-bold text-gray-600"
              >
                Correo Eléctronico
              </label>
              <input
                type="email"
                className="border bg-gray-50 w-full p-2 mt-2 rounded-lg focus:outline-none"
                id="email"
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 hover:bg-indigo-500 px-10 py-3 font-bold w-full uppercase mt-5 text-white rounded-lg transition-all cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
