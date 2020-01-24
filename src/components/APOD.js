import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import "./APOD.css";
import NasaInfo from "./NasaInfo";
import DateInput from "./DateInput";
import Moment from "react-moment";

const NASA_KEY = process.env.REACT_APP_API_KEY;

const ApodContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;
  
`;

const NoBGmsg = styled.h3`
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
`;

const APOD = () => {

  const moment = require('moment');

  const [picURL, setPicURL] = useState();
  const [nasaInfo, setNasaInfo] = useState([]);
  const [dateInput, setDateInput] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${dateInput}&api_key=${NASA_KEY}`)
      .then(response => {
        // console.log("nasa response", response.data);
        setPicURL(response.data.hdurl);
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log("Error getting response from API", error);
      });
  }, [dateInput]);

  // const getPhoto = date => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${NASA_KEY}`
  //     )
  //     .then(response => {
  //       setPicURL(response.data.hdurl);
  //       setNasaInfo(response.data);
  //     });
  // };

  const changeDate = e => {
    e.preventDefault();
    // console.log(e.target);
    let dateFromInput = e.target[0].value;
    if (!moment(dateFromInput,'YYYY-MM-DD').isValid()) {
      alert('Please enter a correct date/format.');
    } else {
      setDateInput(dateFromInput);
    }
    // getPhoto(dateFromInput);
  };

  if (!nasaInfo.media_type) return <NoBGmsg>Loading...</NoBGmsg>;

  if (nasaInfo.media_type !== "image")
    return <NoBGmsg>Sorry, no photo for this day.</NoBGmsg>;

  return (
    <ApodContainer style={{ backgroundImage: `url(${picURL})` }}>
      <NasaInfo data={nasaInfo} />
      <DateInput changeDate={changeDate} />
    </ApodContainer>
  );
};

export default APOD;
