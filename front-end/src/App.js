import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import "../src/App.css";
import "../src/css/GlobalCss.css";
import "../src/css/Login.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoginForm from "./component/Login/LoginForm";
import Dashboard from "./component/Login/Dashboard";
import Sports from "./component/Login/Sports";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="sports"
            element={
              <PrivateRoute>
                <Sports />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        color="red"
      />
    </div>
  );
};
export default App;
