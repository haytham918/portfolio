import "./Time.css";
import clock from "./clock.svg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import arrow from "./arrow.svg";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
const Time = () => {
  let accessKey = "f83fbd2c6cae458e98932caf70f5b5c5";

  const [place, setPlace] = useState("");
  const [requestTime, setRequestTime] = useState("");

  const [firstLocation, setFirstLocation] = useState("");
  const [secondLocation, setSecondLocation] = useState("");
  const [firstTime, setFirstTime] = useState("");
  const [secondTime, setSecondTime] = useState("");

  const getTime = async () => {
    const result = await axios.get(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=${accessKey}&location=${place}`
    );
    console.log(result.data);
    if (result.data.datetime) {
      setRequestTime(
        result.data.datetime + " (" + result.data.timezone_name + ") "
      );
    } else {
      setRequestTime(
        "Oops... The location you request is invalid. Be More Specific"
      );
    }
  };

  const convertTime = async () => {
    try {
      const result = await axios.get(
        `https://timezone.abstractapi.com/v1/convert_time`,
        {
          params: {
            api_key: accessKey,
            base_location: firstLocation,
            base_datetime: firstTime,
            target_location: secondLocation,
          },
        }
      );
      if (result.data.target_location) {
        setSecondTime(
          result.data.target_location.datetime +
            " (" +
            result.data.target_location.timezone_abbreviation +
            ") "
        );
      } else {
        setSecondTime(
          "Oops... The location you request is invalid. Be More Specific"
        );
      }
    } catch (error) {
      setSecondTime("Oops... Something wrong with conversion. Check Carefully");
    }
  };

  const requestInputHandler = (e) => {
    setRequestTime("");
    setPlace(e.target.value);
  };

  const convertLocationHandler = (e) => {
    setSecondTime("");
    setFirstLocation(e.target.value);
  };

  const convertTimeHandler = (e) => {
    setSecondTime("");
    setFirstTime(e.target.value);
  };

  const convertDestinationHandler = (e) => {
    setSecondTime("");
    setSecondLocation(e.target.value);
  };

  const globeClickHandler = (e) => {
    if (firstLocation !== "" && firstTime !== "" && secondLocation !== "") {
      convertTime();
    }
  };

  const searchHandler = () => {
    if (place !== "") {
      getTime();
    }
  };

  return (
    <>
      <h1 className="header-converter">Time Conversion</h1>
      <img src={clock} alt="Clock" className="clock" />
      <div className="time-container">
        <div className="request-time-container">
          <h3 className="request-time-text">
            Get the crurent time of a location:
          </h3>
          <div className="enter-bar">
            <input
              placeholder="Type the location(e.g: Colts Neck, NJ)"
              className="location-input"
              onChange={requestInputHandler}
            />
            <button className="btn-grad" onClick={searchHandler}>
              <FaSearch size="2.5em" />
            </button>
          </div>
          <div className="arrow-container">
            <img src={arrow} alt="Arrow" className="arrow-convert" />
          </div>
          {requestTime !== "" ? (
            <div className="request-result-container">{requestTime}</div>
          ) : null}
        </div>

        <h3 className="request-time-text">Convert time between timezones: </h3>
        <div className="convert-time-container">
          <h3 className="from-location-text">From location: </h3>
          <input
            placeholder="Type the location(e.g: Colts Neck, NJ)"
            className="from-location-input"
            onChange={convertLocationHandler}
          />
        </div>

        <div className="convert-time-container">
          <h3 className="from-location-text">From Time: </h3>
          <input
            placeholder="2023-07-26 15:39:49"
            className="from-location-input"
            onChange={convertTimeHandler}
          />
        </div>

        <div className="convert-time-container">
          <h3 className="from-location-text">Destination: </h3>
          <input
            placeholder="Type the location(e.g: Colts Neck, NJ)"
            className="from-location-input"
            onChange={convertDestinationHandler}
          />
        </div>

        <button className="globe-button" onClick={globeClickHandler}>
          <BsGlobeAsiaAustralia size="3em" />
        </button>

        <div className="convert-result-container">
          <h3 className="from-location-text">Result: </h3>
          {secondTime !== "" ? (
            <div className="convert-container">{secondTime}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Time;
