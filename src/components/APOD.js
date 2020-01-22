import React, { useState, useEffect } from "react";
import axios from "axios";
import "./APOD.css";
import NasaInfo from "./NasaInfo";

const NASA_URL = process.env.REACT_APP_NASA_API;

const APOD = () => {
  const [picURL, setPicURL] = useState();
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(NASA_URL)
      .then(response => {
        console.log("nasa response", response.data);
        setPicURL(response.data.hdurl);
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log("custom error message goes here", error);
      });
  }, []);

  return (
    <div className="apod" style={{ backgroundImage: `url(${picURL})` }}>
      <NasaInfo data={nasaInfo} />
      <div className="input-container">
          {/* <form>
              <label>
                  To see a different photo
              </label>
          </form> */}
      </div>
    </div>
  );
};

export default APOD;
