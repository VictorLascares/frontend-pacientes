import { useState } from "react";
import Formulario from "../components/Formulario";
import PatientsList from "../components/PatientsList";

const ManagePatients = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <button
        type="button"
        className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 mb-10 rounded-md md:hidden"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Oculta Formulario" : "Mostrar Formulario"}
      </button>
      <div
        className={`${
          showForm ? "block" : "hidden"
        } md:block md:w-1/2 lg:w-2/5`}
      >
        <Formulario />
      </div>

      <div className="md:w-1/2 lg:w-3/5">
        <PatientsList />
      </div>
    </div>
  );
};

export default ManagePatients;
