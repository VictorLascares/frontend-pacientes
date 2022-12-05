import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient("/pacientes", config);
        setPatients(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

    getPatients();
  }, []);

  const savePatient = async (patient) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.post("/pacientes", patient, config);
      const { createdAt, updatedAt, __v, ...savedPatient } = data;
      setPatients([savedPatient, ...patients]);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        savePatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContext;