import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";


const PatientsContext = createContext();

export const PatientsProvider = ({children}) => {
  const [patients, setPatients] = useState([]);

  return (
    <PatientsContext.Provider
      value={{
        patients
      }} 
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContext;