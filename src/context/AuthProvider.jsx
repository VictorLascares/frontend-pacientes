import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosClient("/veterinarios/perfil", config);
        setAuth(data);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }
      setLoading(false);
    };
    authenticateUser();
  }, []);

  const signOff = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  const updateProfile = async (veterinary) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.put(
        `/veterinarios/perfil/${veterinary._id}`,
        veterinary,
        config
      );
      return {
        msg: "Perfil actualizado correctamente",
        error: false,
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const changePassword = async (password) => {
    
  }
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, loading, signOff, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
