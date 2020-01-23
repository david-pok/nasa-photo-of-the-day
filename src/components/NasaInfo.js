import React from "react";
import "./NasaInfo.css";
import Moment from "react-moment";

const NasaInfo = props => {
  // console.log("nasaINFO props", props);
  const info = props.data;

  return (
    <div className="pic-title">
      <p>
        Current date: <br />
        <Moment format="YYYY-MM-DD" />
      </p>
      <p>{info.title}</p>
    </div>
  );
};

export default NasaInfo;
