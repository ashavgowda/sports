import React, { useState } from "react";
import {
  saveParticipantsList,
  saveSports,
  saveVenue,
} from "../../api/RegisterApi";
import { getLocalStorageVariable } from "../../utils/LocalStorage";
import AddParticipate from "./AddParticipate";
import VenueSelection from "./VenueSelection";
import { toast } from "react-toastify";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { checkParticipateLimit } from "../common/Helper";
import SpotsSelection from "./SpotsSelection";
import { useNavigate } from "react-router-dom";

export default function ParticipantList() {
  const navigate = useNavigate();
  const [participantData, setParticipantData] = useState([{}]);
  const [selectedSports, setSelectedSports] = useState([]);
  const [participantList, setParticipantList] = useState([]);
  const [mandatoryError, setMandatoryError] = useState([]);
  const [sportsCategory, setSportsCategory] = useState([]);
  const [teamNames, setTeamNames] = useState([]);
  const [coachNames, setCoachNames] = useState([]);
  const [allVenue, setAllVenue] = useState([]);
  const [showVenueFlag, setShowVenueFlag] = useState(false);
  const [showVenueError, setShowVenueError] = useState(false);
  const [showSportsFlag, setShowSportsFlag] = useState(true);
  const [showSportsError, setShowSportsError] = useState(false);
  const [showParticipantFlag, setShowParticipantFlag] = useState(false);

  const addParticipate = () => {
    setParticipantData([...participantData, {}]);
  };

  const multipleHandleChange = (e, data) => {
    e.preventDefault();
    setSelectedSports(data);
    let resData =
      data &&
      data.map((item) => {
        let res = {
          sportsName: item,
          participant: [],
        };
        return res;
      });
    setParticipantList(resData);
    setShowSportsError(false);
  };

  const participantHandler = (e, sports, idx) => {
    e.preventDefault();
    let data = participantList.find((res) => res.sportsName === sports);
    if (data) {
      let playerOld = data.participant[idx];
      if (playerOld) {
        playerOld[e.target.name] = e.target.value;
        data.participant[idx] = playerOld;
        let index = participantList.indexOf(data);
        if (index !== -1) {
          participantList[index] = data;
          setParticipantList(participantList);
        }
      } else {
        let playerNew1 = {
          id: idx,
          [e.target.name]: e.target.value,
        };
        data.participant[idx] = playerNew1;
        let index = participantList.indexOf(data);
        if (index !== -1) {
          participantList[index] = data;
          setParticipantList(participantList);
        }
      }
    } else {
      let playerNew = {
        id: idx,
        [e.target.name]: e.target.value,
      };

      let res = {
        sportsName: sports,
        participant: [playerNew],
      };

      setParticipantList([...participantList, res]);
    }
  };

  const mainDataHandler = (e, sports, idx) => {
    e.preventDefault();
    let data = participantList[idx];
    data[e.target.name] = e.target.value;
    participantList[idx] = data;
    setParticipantList(participantList);
  };

  const selectHandleChange = (e, idx) => {
    e.preventDefault();
    sportsCategory[idx] = e.target.value;
    setSportsCategory(sportsCategory);
  };

  const handleTeamName = (e, idx) => {
    e.preventDefault();
    teamNames[idx] = e.target.value;
    setTeamNames(teamNames);
  };

  const handleCoachName = (e, idx) => {
    e.preventDefault();
    coachNames[idx] = e.target.value;
    setCoachNames(coachNames);
  };

  const participantListSubmit = () => {
    let errorSports = [];

    participantList &&
      participantList.map((item, idx) => {
        let noOfParticipate = item.participant;

        if (
          !checkParticipateLimit(
            item.sportsName,
            noOfParticipate && noOfParticipate.length
          )
        ) {
          errorSports.push(item.sportsName);
          setMandatoryError(errorSports);
        }
      });

    if (!(errorSports && errorSports.length > 0)) {
      let participantArray = [];

      participantList &&
        participantList.map((item, idx) => {
          let resData = item.participant;

          resData &&
            resData.map((item1, idx1) => {
              let reqBody = {
                ParticipantsId: getLocalStorageVariable("ParticipantsId"),
                SportsId: item.sportsName,
                ParticipantsName: item1.name,
                ParticipantsNumber: item1.number,
                Status: true,
              };

              participantArray.push(reqBody);
            });
        });

      saveParticipantsList(participantArray)
        .then((res) => {
          if (res && res.data) {
            toast.success("Participant List Added Sucessfully");
          } else {
            toast.error("Failed to add");
          }
        })
        .catch(console.log("error"));

      setShowVenueFlag(true);
      setShowSportsFlag(false);
      setShowParticipantFlag(false);
    }
  };

  const venueHandler = (e, idx) => {
    e.preventDefault();
    allVenue[idx] = e.target.value;
    setAllVenue(allVenue);
  };

  const SubmitSports = (e) => {
    e.preventDefault();

    if (selectedSports && selectedSports.length > 0) {
      let reqBody =
        selectedSports &&
        selectedSports.map((item, idx) => {
          let res = {
            SportsName: item || "",
            SportsCategory: (sportsCategory && sportsCategory[idx]) || "",
            TeamName: (teamNames && teamNames[idx]) || "",
            CoachName: (coachNames && coachNames[idx]) || "",
            Status: true,
          };
          return res;
        });

      saveSports(reqBody)
        .then((res) => {
          if (res && res.data) {
            toast.success("Sports Added Sucessfully");
          } else {
            toast.error("Failed to add");
          }
        })
        .catch(console.log("error"));

      setShowVenueFlag(false);
      setShowSportsFlag(false);
      setShowParticipantFlag(true);
      setShowSportsError(false);
    } else {
      setShowSportsError(true);
    }
  };

  const submitVenue = (e) => {
    e.preventDefault();
    if (
      selectedSports &&
      selectedSports.length > 0 &&
      allVenue &&
      allVenue.length > 0
    ) {
      let reqBody =
        selectedSports &&
        selectedSports.map((item, idx) => {
          let resData = {
            VenueName: allVenue[idx],
            SportsId: item,
            UserId: getLocalStorageVariable("UserId"),
            ParticipantsId: getLocalStorageVariable("ParticipantsId"),
            Status: true,
          };
          return resData;
        });
      saveVenue(reqBody)
        .then((res) => {
          if (res && res.data) {
            toast.success("Venue Added Sucessfully");
            toast.success("Participnat Created Sucessfully");
            navigate("/dashboard");
          } else {
            toast.error("Failed to add");
          }
        })
        .catch(console.log("error"));
      setShowVenueError(false);
    } else {
      toast.error("Please Select Venue");
    }
  };

  return (
    <>
      <Header />
      <div className="form-data">
        {showSportsFlag ? (
          <SpotsSelection
            multipleHandleChange={multipleHandleChange}
            participantList={participantList}
            showSportsError={showSportsError}
            selectedSports={selectedSports}
            selectHandleChange={selectHandleChange}
            handleTeamName={handleTeamName}
            handleCoachName={handleCoachName}
            SubmitSports={SubmitSports}
          />
        ) : null}
        {showParticipantFlag ? (
          <AddParticipate
            selectedSports={selectedSports}
            addParticipate={addParticipate}
            participantData={participantData}
            participantHandler={participantHandler}
            mainDataHandler={mainDataHandler}
            mandatoryError={mandatoryError}
            participantListSubmit={participantListSubmit}
          />
        ) : null}
        {showVenueFlag ? (
          <VenueSelection
            selectedSports={selectedSports}
            venueHandler={venueHandler}
            submitVenue={submitVenue}
          />
        ) : null}
      </div>
      <Footer />
    </>
  );
}
