import React from "react";
import { ALL_SPORTS } from "../../utils/Constant";
import MultipSelect from "../atoms/MultipSelect";
import TextButton from "../atoms/TextButton";
import Category from "./Category";

export default function SpotsSelection({
  multipleHandleChange,
  participantList,
  showSportsError,
  selectedSports,
  selectHandleChange,
  handleTeamName,
  handleCoachName,
  SubmitSports,
}) {
  return (
    <>
      <div class="row">
        <h5 className="form-header">Select Sports</h5>
        <div class="col-sm-12 form-input">
          <MultipSelect
            name="Choose Sports"
            value={"value"}
            option={ALL_SPORTS}
            multipleHandleChange={multipleHandleChange}
            required={true}
            error={
              participantList && participantList.length > 0
                ? false
                : showSportsError
            }
          />
        </div>

        {selectedSports &&
          selectedSports.map((item, idx) => (
            <>
              <h5 className="form-header">Select {item} Data</h5>
              <Category
                selectedSports={item}
                selectHandleChange={selectHandleChange}
                handleTeamName={handleTeamName}
                handleCoachName={handleCoachName}
                idx={idx}
              />
            </>
          ))}
      </div>
      <br />
      <div className="col-sm-12">
        <TextButton name="Next" onClick={SubmitSports} />
      </div>
    </>
  );
}
