import { useState } from "react";

const Formulario = () => {
  const [patient, setPatient] = useState({
    name: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  });
  const [alert, setAlert] = useState();

  function handleChange(e) {
    setPatient((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <p className="text-lg text-center mb-10">
        Añade tus pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white py-10 px-5 shadow-md rounded-md">
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={patient.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del dueño de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={patient.propietario}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Correo Electronico
          </label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={patient.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
            Fecha de Alta
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={patient.fecha}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            rows="5"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none resize-none"
            value={patient.sintomas}
            onChange={handleChange}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-700 hover:bg-indigo-500 w-full p-3 text-white rounded-md transition-all cursor-pointer"
        />
      </form>
    </>
  );
};

export default Formulario;
