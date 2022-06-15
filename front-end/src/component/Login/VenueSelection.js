import React from "react";
import { VENUE } from "../../utils/Constant";
import MultipSelect from "../atoms/MultipSelect";
import TextButton from "../atoms/TextButton";

export default function VenueSelection({
  selectedSports,
  venueHandler,
  submitVenue,
}) {
  return (
    <>
      {selectedSports && selectedSports.length > 0 ? (
        <h5 className="form-header">Select Venue</h5>
      ) : null}
      {selectedSports &&
        selectedSports.map((sports, idx) => (
          <>
            <div class="col-sm-12 form-input" key={idx}>
              <MultipSelect
                value={"value"}
                option={VENUE}
                required={true}
                // defaultValue={volunteerData.volunteerDate}
                // error={volunteerData.volunteerDate ? false : volunteerEror}
                name={sports + " Venue"}
                multipleHandleChange={(e) => {
                  venueHandler(e, idx);
                }}
              />
            </div>
          </>
        ))}
      {selectedSports && selectedSports.length > 0 ? (
        <div className="col-sm-12">
          <TextButton name="Submit" onClick={submitVenue} />
        </div>
      ) : null}
    </>
  );
}
