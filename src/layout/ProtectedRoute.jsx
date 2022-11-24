import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) return "Cargando...";
  return (
    <>
      <Header />
      {Object.keys(auth).length > 0 ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default ProtectedRoute;
