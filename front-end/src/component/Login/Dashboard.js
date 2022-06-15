import React, { useState } from "react";
import { saveParticipants } from "../../api/RegisterApi";
import {
  getLocalStorageVariable,
  setLocalStorageVariable,
} from "../../utils/LocalStorage";
import TextButton from "../atoms/TextButton";
import TextInput from "../atoms/TextInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../common/Footer";
import Header from "../common/Header";

export default function Dashboard() {
  const navigate = useNavigate();
  const [participantData, setParticipantData] = useState([{}]);
  const [participantEror, setParticipantEror] = useState(false);
  const [error, serError] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    serError(!error);
    let data = participantData;
    data[e.target.name] = e.target.value;
    setParticipantData(data);
  };

  const formValidation = () => {
    let data = participantData;
    if (data.WhatsappNo && data.participantName) {
      return true;
    } else {
      return false;
    }
  };

  const SubmitParticipant = (e) => {
    e.preventDefault();
    let data = participantData;

    if (formValidation()) {
      let reqBody = {
        UserId: getLocalStorageVariable("UserId") || "",
        WhatsappNo: data.WhatsappNo || "",
        participantName: data.participantName || "",
        EmailId: data.EmailId || "",
        Status: true,
      };
      saveParticipants(reqBody)
        .then((res) => {
          if (res && res.data) {
            let ParticipantsId = res.data.data._id;
            toast.success("Participants Added Sucessfully");
            setLocalStorageVariable("ParticipantsId", ParticipantsId);
            navigate("/sports");
          } else {
            toast.error("Failed to add");
          }
        })
        .catch(console.log("error"));
      setParticipantEror(false);
    } else {
      setParticipantEror(true);
    }
  };

  return (
    <div>
      <Header />
      <div class="row form-data">
        <h5 className="form-header">Add New Participants</h5>
        <div class="col-sm-12 form-input">
          <TextInput
            title="Enter Name"
            name="participantName"
            onhandleChange={inputHandler}
            defaultValue={participantData.participantName}
            required={true}
            error={participantData.participantName ? false : participantEror}
          />
        </div>
        <div class="col-sm-12 form-input">
          <TextInput
            title="Whatsapp Number"
            name="WhatsappNo"
            onhandleChange={inputHandler}
            defaultValue={participantData.WhatsappNo}
            required={true}
            error={participantData.WhatsappNo ? false : participantEror}
          />
        </div>

        <div class="col-sm-12 form-input">
          <TextInput
            title="Enter Email"
            name="EmailId"
            onhandleChange={inputHandler}
            defaultValue={participantData.EmailId}
            required={false}
            error={false}
          />
        </div>
        <br />
        <div className="col-sm-12">
          <TextButton name="Next" onClick={SubmitParticipant} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
