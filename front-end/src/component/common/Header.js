import React from "react";
import TextButton from "../atoms/TextButton";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className="sports-header">
        <div>
          <img
            className="header_logo"
            alt="Logo"
            src={require("../../logo.png")}
          />
        </div>
        <span className="header-title">Welcome To Sports Registration</span>
      </div>
      <div className="logout-button">
        <TextButton name="Logout" onClick={logoutHandler} />
      </div>
    </div>
  );
}
