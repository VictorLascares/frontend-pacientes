import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";
import useAuth from "../hooks/useAuth";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState({});
  const { auth } = useAuth();

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
  }, [auth]);

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
        const { data } = await axiosClient.put(
          `/pacientes/${patient._id}`,
          patient,
          config
        );
        const updatedPatients = patients.map((statePatients) =>
          statePatients._id === data._id ? data : statePatients
        );
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

  const deletePatient = async (id) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const remove = confirm("¿Desea eliminar el registro?");

    if (remove) {
      try {
        await axiosClient.delete(`/pacientes/${id}`, config);
        const updatedPatients = patients.filter(
          (statePatients) => statePatients._id !== id
        );
        setPatients(updatedPatients);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        savePatient,
        setEdition,
        editPatient,
        deletePatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export default PatientsContext;
