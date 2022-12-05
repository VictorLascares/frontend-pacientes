import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <>
      <nav>
        <Link to="/admin/cambiar-password" className="font-bold uppercase text-gray-400 hover:underline">Cambiar Contraseña</Link>
      </nav>
      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2> 
      <p className="text-xl mt-5 mb-10 text-center">Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Información Aquí</span> 
      </p>
    </>
  );
};

export default EditProfile;
