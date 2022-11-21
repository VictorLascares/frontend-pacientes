import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmAccount from "./pages/ConfirmAccount";

function App() {
  const [alert, setAlert] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route
            path="registrar"
            element={<Register alert={alert} setAlert={setAlert} />}
          />
          <Route path="olvide-password" element={<ForgotPassword />} />
          <Route
            path="confirmar/:id"
            element={<ConfirmAccount alert={alert} setAlert={setAlert} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
