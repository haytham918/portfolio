import clock from "./clock.svg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import arrow from "./arrow.svg";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

const Time = () => {
  const accessKey = "f83fbd2c6cae458e98932caf70f5b5c5";
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

    if (result.data.datetime) {
      setRequestTime(
        `${result.data.datetime} (${result.data.timezone_name}) `
      );
    } else {
      setRequestTime("Oops... The location you request is invalid. Be More Specific");
    }
  };

  const convertTime = async () => {
    try {
      const result = await axios.get(`https://timezone.abstractapi.com/v1/convert_time`, {
        params: {
          api_key: accessKey,
          base_location: firstLocation,
          base_datetime: firstTime,
          target_location: secondLocation,
        },
      });

      if (result.data.target_location) {
        setSecondTime(
          `${result.data.target_location.datetime} (${result.data.target_location.timezone_abbreviation}) `
        );
      } else {
        setSecondTime("Oops... The location you request is invalid. Be More Specific");
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

  const globeClickHandler = () => {
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
    <section className="converter-panel">
      <h1 className="converter-heading">Time Conversion</h1>
      <img src={clock} alt="Clock" className="converter-art" />

      <div className="mt-6 flex flex-col gap-6">
        <div className="rounded-[1.25rem] border border-[rgba(15,23,42,0.08)] bg-[rgba(236,253,245,0.7)] p-4 shadow-sm">
          <h3 className="mb-4 text-[1rem] font-semibold text-title md:text-[1.1rem]">
            Get the current time of a location
          </h3>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <input
              placeholder="Type the location (e.g. Colts Neck, NJ)"
              className="converter-input md:max-w-none md:flex-1"
              onChange={requestInputHandler}
            />
            <button className="converter-button md:px-4" onClick={searchHandler} type="button">
              <FaSearch size="1.25em" />
            </button>
          </div>
          <div className="my-4 flex justify-center">
            <img src={arrow} alt="Arrow" className="h-10 w-auto opacity-70" />
          </div>
          {requestTime !== "" ? (
            <div className="converter-note min-h-14 w-full justify-center text-[0.95rem] font-semibold">
              {requestTime}
            </div>
          ) : null}
        </div>

        <div className="rounded-[1.25rem] border border-[rgba(15,23,42,0.08)] bg-[rgba(239,246,255,0.75)] p-4 shadow-sm">
          <h3 className="mb-4 text-[1rem] font-semibold text-title md:text-[1.1rem]">
            Convert time between timezones
          </h3>
          <div className="grid gap-4">
            <div className="grid gap-2 md:grid-cols-[160px_minmax(0,1fr)] md:items-center">
              <h4 className="converter-label">From location</h4>
              <input
                placeholder="Type the location (e.g. Colts Neck, NJ)"
                className="converter-input md:max-w-none"
                onChange={convertLocationHandler}
              />
            </div>
            <div className="grid gap-2 md:grid-cols-[160px_minmax(0,1fr)] md:items-center">
              <h4 className="converter-label">From time</h4>
              <input
                placeholder="2023-07-26 15:39:49"
                className="converter-input md:max-w-none"
                onChange={convertTimeHandler}
              />
            </div>
            <div className="grid gap-2 md:grid-cols-[160px_minmax(0,1fr)] md:items-center">
              <h4 className="converter-label">Destination</h4>
              <input
                placeholder="Type the location (e.g. Colts Neck, NJ)"
                className="converter-input md:max-w-none"
                onChange={convertDestinationHandler}
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <button className="converter-button px-6" onClick={globeClickHandler} type="button">
              <BsGlobeAsiaAustralia size="1.5em" />
            </button>
          </div>

          <div className="mt-5 grid gap-2 md:grid-cols-[160px_minmax(0,1fr)] md:items-center">
            <h4 className="converter-label">Result</h4>
            {secondTime !== "" ? (
              <div className="converter-note min-h-14 w-full justify-center text-[0.95rem] font-semibold">
                {secondTime}
              </div>
            ) : (
              <div className="converter-note min-h-14 w-full justify-center text-[0.95rem]">
                Fill all three fields to convert
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
