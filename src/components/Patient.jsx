const Patient = ({ patient }) => {
  const { email, fecha, name, propietario, sintomas, _id } = patient;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      newDate
    );
  };

  return (
    <div className="my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-600 mb-2">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>

      <p className="font-bold uppercase text-indigo-600 my-2">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>

      <p className="font-bold uppercase text-indigo-600 my-2">
        Contacto:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>

      <p className="font-bold uppercase text-indigo-600 my-2">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case text-black">
          {formatDate(fecha)}
        </span>
      </p>

      <p className="font-bold uppercase text-indigo-600 mt-2">
        Síntomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-700 hover:bg-indigo-500 text-white uppercase font-bold rounded-lg"
        >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-700 hover:bg-red-500 text-white uppercase font-bold rounded-lg" 
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Patient;
