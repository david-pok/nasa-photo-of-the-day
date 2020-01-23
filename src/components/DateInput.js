import React from "react";
import styled from "styled-components";

import "./DateInput.css";

const FormContainer = styled.div`
  background-color: white;
  width: 45%;
  margin-top: 600px;
  opacity: 0.9;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  animation-duration: 6s;
  animation-name: slideright;
  padding-bottom: 10px;
`;

// .input-form form {
//   font-family: "Orbitron", sans-serif;
//   letter-spacing: 2px;
//   margin: 3px;
//   padding: 3px;
// }
const Ptag = styled.p`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
`;

const DateInput = props => {
  return (
    <FormContainer>
      <form onSubmit={props.changeDate}>
        <Ptag>
          Input a date for a different photo of the day
          <br />
          (YYYY-MM-DD):
        </Ptag>
        <input className="input-section" />
        <input type="submit" className="submit-btn" />
      </form>
    </FormContainer>
  );
};

export default DateInput;
