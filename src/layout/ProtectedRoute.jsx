import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) return "Cargando...";
  return (
    <>
      <h1>Esta es una ruta protegida</h1>
      {Object.keys(auth).length > 0 ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default ProtectedRoute;
