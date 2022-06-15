import React, { useState } from "react";
import { getUser } from "../../api/RegisterApi";
import TextButton from "../atoms/TextButton";
import TextInput from "../atoms/TextInput";
import { toast } from "react-toastify";
import { setLocalStorageVariable } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { OTPMSG } from "../../utils/Constant";

export default function LoginForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [showError, setShowError] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    let data = userData;
    data[e.target.name] = e.target.value;
    setUserData(data);
  };

  const submitUser = (e) => {
    e.preventDefault();
    if (userData.MobileNo && userData.Otp) {
      getUser(userData.MobileNo)
        .then((res) => {
          if (res && res.data && res.data[0]) {
            toast.success("Login Sucessfully");
            navigate("/dashboard");
            setLocalStorageVariable("UserId", res.data[0]._id);
          } else {
            toast.error("Fail to login");
          }
        })
        .catch(console.log("error"));
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="form-data">
      <div className="form-input">
        <h5 className="form-header"> Login Here</h5>
        <img
          className="header_logo"
          alt="Logo"
          src={require("../../logo.png")}
        />
      </div>
      <br />
      <div class="row">
        <div class="col-sm-12 form-input">
          <TextInput
            title="Mobile Number"
            name="MobileNo"
            onhandleChange={inputHandler}
            defaultValue={userData.MobileNo}
            required={true}
            error={userData.MobileNo ? false : showError}
          />
        </div>
        <div class="col-sm-12 form-input">
          <TextInput
            title="Mobile OTP(Random Number)"
            name="Otp"
            onhandleChange={inputHandler}
            defaultValue={userData.Otp}
            required={true}
            error={userData.Otp ? false : showError}
            errorMsg={OTPMSG}
          />
        </div>
        <br />
        <div class="col-sm-12">
          <TextButton onClick={submitUser} name="Login" />
        </div>
      </div>
    </div>
  );
}
