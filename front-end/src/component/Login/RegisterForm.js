import React, { useState } from "react";
import { saveUser } from "../../api/RegisterApi";
import { DATE, GENDER, OTPMSG, USER_TYPES } from "../../utils/Constant";
import SelectField from "../atoms/SelectField";
import TextButton from "../atoms/TextButton";
import MultipSelect from "../atoms/MultipSelect";
import TextInput from "../atoms/TextInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { setLocalStorageVariable } from "../../utils/LocalStorage";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    setError(!error);
    let data = userData;
    data[e.target.name] = e.target.value;
    setUserData(data);
  };

  const submitUser = (e) => {
    e.preventDefault();
    let data = userData;

    if (formValidation()) {
      let reqBody = {
        UserName: data.UserName || "",
        MobileNo: data.MobileNo || "",
        EmailId: data.EmailId || "",
        Gender: data.Gender || "",
        Otp: data.Otp || "",
        UserType: data.UserType || "",
        VolunteerDate: data.VolunteerDate || [],
        Status: true,
      };
      saveUser(reqBody)
        .then((res) => {
          if (res && res.data) {
            toast.success("User Added Sucessfully");
            navigate("/dashboard");
            setLocalStorageVariable("UserId", res.data.data._id);
          } else {
            toast.error("Failed to Add User");
          }
        })
        .catch(console.log("error"));
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const signInHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const multipleVolunteerHandle = (e, values) => {
    e.preventDefault();
    setError(!error);
    let data = userData;
    data[e.target.name] = values;
    setUserData(data);
  };

  const formValidation = () => {
    let data = userData;
    if (
      data.UserName &&
      data.MobileNo &&
      data.EmailId &&
      data.Gender &&
      data.Otp &&
      data.UserType &&
      (userData.UserType === "volunteer" ? data.VolunteerDate : true)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div class="container form-data">
        <div className="form-input">
          <h5 className="form-header"> Registration</h5>
          <img
            className="header_logo"
            alt="Logo"
            src={require("../../logo.png")}
          />
        </div>
        <div class="row">
          <div class="col-sm-12 form-input">
            <TextInput
              title="User Name"
              name="UserName"
              onhandleChange={inputHandler}
              defaultValue={userData.UserName}
              required={true}
              error={userData.UserName ? false : showError}
            />
          </div>
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
          <div class="col-sm-12 form-input">
            <SelectField
              value={"value"}
              selectName="Gender"
              option={GENDER}
              title={"Gender"}
              name="Gender"
              selectHandleChange={inputHandler}
              error={userData.Gender ? false : showError}
            />
          </div>
          <div class="col-sm-12 form-input">
            <TextInput
              title="Email Id"
              name="EmailId"
              onhandleChange={inputHandler}
              defaultValue={userData.EmailId}
              required={true}
              error={userData.EmailId ? false : showError}
              errorMsg={OTPMSG}
            />
          </div>
          <div class="col-sm-12 form-input">
            <SelectField
              value={"value"}
              selectName="UserType"
              option={USER_TYPES}
              title={"User Type"}
              name="UserType"
              selectHandleChange={inputHandler}
              error={userData.UserType ? false : showError}
            />
          </div>
          {userData.UserType === "volunteer" ? (
            <div class="col-sm-12 form-input">
              <MultipSelect
                name="Choose Date"
                value={"value"}
                option={DATE}
                required={true}
                defaultValue={userData.VolunteerDate}
                error={userData.VolunteerDate ? false : userData}
                selectName="VolunteerDate"
                multipleHandleChange={multipleVolunteerHandle}
              />
            </div>
          ) : null}
          <br />
          <div class="col-sm-12 ">
            <TextButton onClick={submitUser} name="Register" />
          </div>
          <div class="col-sm-12">
            <Button
              variant="contained"
              component="span"
              onClick={signInHandler}
              className="sign-label"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
