import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState({});

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

    if (patient._id) {
      try {
        const { data } = await axiosClient.put(`/pacientes/${patient._id}`, patient, config);
        const updatedPatients = patients.map( statePatients => statePatients._id === data._id ? data : statePatients);
        setPatients(updatedPatients);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await axiosClient.post("/pacientes", patient, config);
        const { createdAt, updatedAt, __v, ...savedPatient } = data;
        setPatients([savedPatient, ...patients]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  const setEdition = (patient) => {
    setEditPatient(patient);
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        savePatient,
        setEdition,
        editPatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContext;
