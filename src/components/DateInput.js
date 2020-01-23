import React from "react";
import "./DateInput.css";

const DateInput = props => {
  return (
    <div className="input-form">
      <form onSubmit={props.changeDate}>
        Input a date for a different photo of the day
        <br />
        (YYYY-MM-DD):
        <br />
        <input className="input-section" />
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default DateInput;
