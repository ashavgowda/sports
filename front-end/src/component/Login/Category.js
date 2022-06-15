import React from "react";
import { CATEGORY1, CATEGORY2, CATEGORY3 } from "../../utils/Constant";
import SelectField from "../atoms/SelectField";
import TextInput from "../atoms/TextInput";

export default function Category({
  selectedSports,
  selectHandleChange,
  idx,

  handleCoachName,
  handleTeamName,
}) {
  let categoryOption = [];
  if (selectedSports === "Football" || selectedSports === "Basketball") {
    categoryOption = CATEGORY1;
  } else if (selectedSports === "Badminton") {
    categoryOption = CATEGORY2;
  } else if (selectedSports === "Table Tennis") {
    categoryOption = CATEGORY3;
  }
  return (
    <div>
      {categoryOption && categoryOption.length > 0 ? (
        <div className="col-sm-12 form-input">
          <SelectField
            value={"value"}
            selectName="category"
            option={categoryOption}
            title={selectedSports + " Category"}
            selectHandleChange={(e) => {
              selectHandleChange(e, idx);
            }}
          />
        </div>
      ) : null}
      <div className="row">
        <div className="col-sm-6 form-input ">
          <TextInput
            title="Enter Team Name"
            name="teamName"
            onhandleChange={(e) => {
              handleTeamName(e, idx);
            }}
          />
        </div>
        <div className="col-sm-6 form-input">
          <TextInput
            title="Enter Coach Name"
            name="coachName"
            onhandleChange={(e) => {
              handleCoachName(e, idx);
            }}
          />
        </div>
      </div>
    </div>
  );
}
