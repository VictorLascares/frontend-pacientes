import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ConfirmAccount from "./pages/ConfirmAccount";

import { AuthProvider } from "./context/AuthProvider";

function App() {
  const [alert, setAlert] = useState({});

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route
              index
              element={<Login alert={alert} setAlert={setAlert} />}
            />
            <Route
              path="registrar"
              element={<Register alert={alert} setAlert={setAlert} />}
            />
            <Route
              path="olvide-password"
              element={<ForgotPassword alert={alert} setAlert={setAlert} />}
            />
            <Route
              path="olvide-password/:token"
              element={<NewPassword alert={alert} setAlert={setAlert} />}
            />
            <Route
              path="confirmar/:id"
              element={<ConfirmAccount alert={alert} setAlert={setAlert} />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
