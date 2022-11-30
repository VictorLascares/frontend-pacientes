import Formulario from "../components/Formulario";
import PatientsList from "../components/PatientsList";

const ManagePatients = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2 lg:w-2/5">
        <Formulario />
      </div>

      <div className="md:w-1/2 lg:w-3/5">
        <PatientsList />
      </div>
    </div>
  );
};

export default ManagePatients;