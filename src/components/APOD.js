import React, { useState, useEffect } from "react";
import axios from "axios";
import "./APOD.css";
import NasaInfo from "./NasaInfo";
import DateInput from "./DateInput";

const NASA_URL = process.env.REACT_APP_NASA_API;
const NASA_KEY = process.env.REACT_APP_API_KEY;
// console.log("url", NASA_URL);
// console.log("key", NASA_KEY);

const APOD = () => {
  const [picURL, setPicURL] = useState();
  const [nasaInfo, setNasaInfo] = useState([]);
  const [dateInput, setDateInput] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then(response => {
        // console.log("nasa response", response.data);
        setPicURL(response.data.hdurl);
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log("custom error message goes here", error);
      });
  }, []);

  const getPhoto = date => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${NASA_KEY}`
      )
      .then(response => {
        setPicURL(response.data.hdurl);
        setNasaInfo(response.data);
      });
  };

  const changeDate = e => {
    e.preventDefault();
    // console.log(e.target);
    let dateFromInput = e.target[0].value;
    setDateInput(dateFromInput);
    getPhoto(dateFromInput);
  };

  if (nasaInfo.media_type !== "image")
    return (
      <h3>Sorry, no photo for today. Check back tomorrow for a new photo.</h3>
    );

  return (
    <div className="apod" style={{ backgroundImage: `url(${picURL})` }}>
      <NasaInfo data={nasaInfo} />
      <DateInput changeDate={changeDate} />
    </div>
  );
};

export default APOD;
