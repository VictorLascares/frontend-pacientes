import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-10 px-2 bg-indigo-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-bold text-2xl text-indigo-200 text-center">
          Administrador de Pacientes de{" "}
          <span className="text-white font-black">Veterinaria</span>
        </h1>

        <nav className="flex flex-col md:flex-row items-center gap-4 mt-5 md:mt-0">
          <Link
            to="#"
            className="text-white hover:underline text-sm uppercase font-bold"
          >
            Pacientes
          </Link>
          <Link
            to="#"
            className="text-white hover:underline text-sm uppercase font-bold"
          >
            Perfil
          </Link>
          <button
            type="button"
            className="text-white hover:underline text-sm uppercase font-bold"
          >Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
