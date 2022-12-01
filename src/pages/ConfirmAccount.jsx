import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosClient from "../config/axios";
import Alert from "../components/Alert";

const ConfirmAccount = () => {
  const [confirmedAccount, setConfirmedAccount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    confirmAccount();
  }, []);

  async function confirmAccount() {
    try {
      const url = `/veterinarios/confirmar/${id}`;
      const { data } = await axiosClient(url);
      setConfirmedAccount(true);
      setAlert({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu Cuenta y Empieza a Administrar{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!loading && <Alert alert={alert} setAlert={setAlert} />}

        {confirmedAccount && (
          <Link to="/" className="block text-center my-5 text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:underline">
              Iniciar Sesión
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmAccount;
