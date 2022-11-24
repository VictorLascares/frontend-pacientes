import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  return (
    <>
      <h1>Esta es una ruta protegida</h1>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
