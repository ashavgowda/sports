import { Button } from "@mui/material";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import TextButton from "../atoms/TextButton";
import TextInput from "../atoms/TextInput";
import {
  getParticipateLimit,
  validateNoOfParticipate,
  getMandatoryPlayersLimit,
} from "../common/Helper";

export default function AddParticipate({
  selectedSports,
  addParticipate,
  participantData,
  participantHandler,
  mandatoryError,
  participantListSubmit,
}) {
  let multipleMemSports = ["Football", "Volleyball", "Basketball", "Kabaddi"];
  return (
    <div>
      {selectedSports && selectedSports.length > 0 ? (
        <h5 className="form-header">Add Participant List</h5>
      ) : null}
      <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={[0]}>
        {selectedSports &&
          selectedSports.map((sports, index) => (
            <AccordionItem uuid={index}>
              <AccordionItemHeading className="first_child">
                <AccordionItemButton>
                  {"Add participate for " + sports}
                  <span className="mandatory-error">
                    {mandatoryError.includes(sports)
                      ? "( Please add mininum " +
                        getMandatoryPlayersLimit(sports) +
                        " Participant )"
                      : ""}
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="row" key={index}>
                  <div className="col-sm-12">
                    {multipleMemSports.includes(sports) &&
                    validateNoOfParticipate(sports, participantData.length) ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={addParticipate}
                      >
                        +
                      </Button>
                    ) : null}
                  </div>

                  {participantData &&
                    participantData
                      .slice(0, getParticipateLimit(sports))
                      .map((item, idx) => (
                        <div className="col-sm-12 clone-data form-input">
                          <TextInput
                            title={"Enter Participant " + (idx + 1) + " Name"}
                            name="name"
                            onhandleChange={(e) => {
                              participantHandler(e, sports, idx);
                            }}
                            width={"23ch"}
                          />
                          <TextInput
                            title="Phone Number"
                            name="number"
                            onhandleChange={(e) => {
                              participantHandler(e, sports, idx);
                            }}
                            width={"25ch"}
                          />
                        </div>
                      ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
      <div className="col-sm-12">
        <TextButton name="Next" onClick={participantListSubmit} />
      </div>
    </div>
  );
}
