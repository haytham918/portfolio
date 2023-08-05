import { useState } from "react";
import Select from "react-select";
import arrow from "./arrow.svg";
import "./Units.css";
const Length = [
  { label: "Nanometer", value: 1 },
  { label: "Micrometer", value: 1000 },
  { label: "Millimeter", value: 1000000 },
  { label: "Centimeter", value: 10e7 },
  { label: "Meter", value: 10e9 },
  { label: "Kilometer", value: 10e12 },
  { label: "Inch", value: 2.54 * 10e7 },
  { label: "Foot", value: 3.048 * 10e8 },
  { label: "Yard", value: 9.144 * 10e8 },
  { label: "Mile", value: 1.609 * 10e12 },
  { label: "Nautical Mile", value: 1.852 * 10e12 },
];
const Mass = [
  { label: "Microgram", value: 1 },
  { label: "Milligram", value: 1000 },
  { label: "Gram", value: 10e6 },
  { label: "Kilogram", value: 10e9 },
  { label: "Metric Ton", value: 10e12 },
  { label: "Ounce", value: 2.835 * 10e7 },
  { label: "Pound", value: 4.536 * 10e8 },
  { label: "Stone", value: 6.35 * 10e9 },
  { label: "US Ton", value: 9.072 * 10e11 },
  { label: "Imperial Ton", value: 1.016 * 10e12 },
];

const Speed = [
  { label: "Kilometer per hour", value: 1 },
  { label: "Meter per second", value: 3.6 },
  { label: "Foot per second", value: 1.09728 },
  { label: "Miles per hour", value: 1.60934 },
  { label: "Knot", value: 1.852 },
];

const Time = [
  { label: "Nanosecond", value: 1 },
  { label: "Microsecond", value: 1000 },
  { label: "Millisecond", value: 10e6 },
  { label: "Second", value: 10e9 },
  { label: "Minute", value: 6 * 10e10 },
  { label: "Hour", value: 3.6 * 10e12 },
  { label: "Day", value: 8.64 * 10e13 },
  { label: "Week", value: 6.048 * 10e14 },
  { label: "Month", value: 2.628 * 10e15 },
  { label: "Year", value: 3.154 * 10e16 },
  { label: "Decade", value: 3.154 * 10e17 },
  { label: "Century", value: 3.154 * 10e18 },
];
const Temperature = [
  { label: "Kelvin", value: 0 },
  { label: "Celsius", value: 0 },
  { label: "Fahrenheit", value: 0 },
];

const Frequency = [
  { label: "Hertz", value: 1 },
  { label: "KiloHertz", value: 1000 },
  { label: "MegaHertz", value: 10e6 },
  { label: "Gigahertz", value: 10e9 },
];

const Fuel_Economy = [
  { label: "Miles per gallon(Imperial)", value: 1 },
  { label: "Miles per gallon", value: 1.20095 },
  { label: "Kilometer per liter", value: 2.82481 },
  { label: "Liter per 100 kilometers", value: 282.481 },
];
const Plane_Angle = [
  { label: "Second of arc", value: 1 },
  { label: "Degree", value: 3600 },
  { label: "Gradian", value: 3240 },
  { label: "Milliradian", value: 206.265 },
  { label: "Minute of arc", value: 60 },
  { label: "Radian", value: 206265 },
];
const Pressure = [
  { label: "Pascal", value: 1 },
  { label: "Atmosphere", value: 101325 },
  { label: "Bar", value: 100000 },
  { label: "Pound-force per square inch", value: 6894.76 },
  { label: "Torr", value: 133.322 },
];
const Energy = [
  { label: "Electronvolt", value: 1 },
  { label: "Joule", value: 6.242 * 10e18 },
  { label: "Kilojoule", value: 6.242 * 10e21 },
  { label: "Gram calorie", value: 2.611 * 10e19 },
  { label: "Kilocalorie", value: 2.611 * 10e22 },
  { label: "Watt hour", value: 2.247 * 10e22 },
  { label: "Kilowatt hour", value: 2.247 * 10e25 },
  { label: "British thermal unit", value: 6.585 * 10e21 },
  { label: "US therm", value: 6.584 * 10e26 },
  { label: "Foot-pound", value: 8.462 * 10e18 },
];
const Area = [
  { label: "Square inch", value: 1 },
  { label: "Acre", value: 6.273 * 10e6 },
  { label: "Hectare", value: 1.55 * 10e7 },
  { label: "Square foot", value: 144 },
  { label: "Square yard", value: 1296 },
  { label: "Square mile", value: 4.014 * 10e9 },
  { label: "Square meter", value: 1550 },
  { label: "Square kilometer", value: 1.55 * 10e9 },
];
const Data_Transfer_Rate = [
  { label: "Bit per second", value: 1 },
  { label: "Kilobit per second", value: 1000 },
  { label: "Kilobyte per second", value: 8000 },
  { label: "Kibibit per second", value: 1024 },
  { label: "Megabit per second", value: 10e6 },
  { label: "Megabyte per second", value: 8 * 10e6 },
  { label: "Mebibit per second", value: 1.049 * 10e6 },
  { label: "Gigabit per second", value: 10e9 },
  { label: "Gigabyte per second", value: 8 * 10e9 },
  { label: "Gibibit per second", value: 1.074 * 10e9 },
  { label: "Terabit per second", value: 10e12 },
  { label: "Terabyte per second", value: 8 * 10e12 },
  { label: "Tebibit per second", value: 1.1 * 10e12 },
];

const Volume = [
  { label: "Milliliter", value: 1 },
  { label: "Liter", value: 1000 },
  { label: "Cubic meter", value: 10e6 },
  { label: "Cubic Inch", value: 16.3871 },
  { label: "Cubic foot", value: 28316.8 },
  { label: "Imperial teaspoon", value: 5.91939 },
  { label: "Imperial tablespoon", value: 17.7582 },
  { label: "Imperial fluid ounce", value: 28.4131 },
  { label: "Imperial cup", value: 284.131 },
  { label: "Imperial pint", value: 568.261 },
  { label: "Imperial quart", value: 1136.52 },
  { label: "Imperial gallon", value: 4546.09 },
  { label: "US teaspoon", value: 4.92892 },
  { label: "US tablespoon", value: 14.7868 },
  { label: "US fluid ounce", value: 29.5735 },
  { label: "US legal cup", value: 240 },
  { label: "US liquid pint", value: 473.176 },
  { label: "US liquid quart", value: 946.353 },
  { label: "US liquid gallon", value: 3785.41 },
];
const Digital_Storage = [
  { label: "Bit", value: 1 },
  { label: "Kilobit", value: 1000 },
  { label: "Kibibit", value: 1024 },
  { label: "Megabit", value: 10e6 },
  { label: "Mebibit", value: 1.049 * 10e6 },
  { label: "Gigabit", value: 10e9 },
  { label: "Gibibit", value: 1.074 * 10e9 },
  { label: "Terabit", value: 10 * 12 },
  { label: "Tebibit", value: 1.1 * (10 * 12) },
  { label: "Petabit", value: 10e15 },
  { label: "Pebibit", value: 1.126 * 10e15 },
  { label: "Byte", value: 8 },
  { label: "Kilobyte", value: 8000 },
  { label: "Kibibyte", value: 8192 },
  { label: "Megabyte", value: 8 * 10e6 },
  { label: "Mebibyte", value: 8.389 * 10e6 },
  { label: "Gigabyte", value: 8 * 10e9 },
  { label: "Gigibyte", value: 8.59 * 10e9 },
  { label: "Terabyte", value: 8 * 10e12 },
  { label: "Tebibyte", value: 8.796 * 10e12 },
  { label: "Petabyte", value: 8 * 10e15 },
  { label: "Pebibyte", value: 9.007 * 10e15 },
];

const units_kind = [
  { label: "Area", value: Area },
  { label: "Digital_Storage", value: Digital_Storage },
  { label: "Fuel_Economy", value: Fuel_Economy },
  { label: "Length", value: Length },
  { label: "Mass", value: Mass },
  { label: "Time", value: Time },
  { label: "Speed", value: Speed },
  { label: "Volume", value: Volume },
  { label: "Data_Transfer_Rate", value: Data_Transfer_Rate },
  { label: "Energy", value: Energy },
  { label: "Pressure", value: Pressure },
  { label: "Plane_Angle", value: Plane_Angle },
  { label: "Temperature", value: Temperature },
  { label: "Frequency", value: Frequency },
];

const Units = () => {
  const converter = (before_label, before_value, after_label, after_value) => {
    let formula, value_after, conversion;
    if (before_label === "Liter per 100 kilometers") {
      formula = `${282.481 / after_value}/x`;
      value_after = before_value / after_value / value_before;
      conversion = { formula: formula, value_after: value_after };
    } else if (after_label === "Liter per 100 kilometers") {
      formula = `${282.481 / before_value}/x`;
      value_after = after_value / before_value / value_before;
      conversion = { formula: formula, value_after: value_after };
    } else {
      formula = before_value / after_value;
      value_after = formula * value_before;
      conversion = { formula: formula, value_after: value_after };
    }
    return conversion;
  };

  const temperature = (before_label, after_label) => {
    let formula, value_after, conversion;
    if (before_label === "Celsius") {
      if (after_label === "Kelvin") {
        formula = "x + 273.15";
        value_after = value_before + 273.15;
      } else {
        formula = "x*(1.8) + 32";
        value_after = value_before * 1.8 + 32;
      }
    } else if (before_label === "Kelvin") {
      if (after_label === "Celsius") {
        formula = "x - 273.15";
        value_after = value_before - 273.15;
      } else {
        formula = "(x-273.15) * (1.8) + 32";
        value_after = (value_before - 273.15) * 1.8 + 32;
      }
    } else if (before_label === "Fahrenheit") {
      if (after_label === "Celsius") {
        formula = "(x-32) * 5/9 ";
        value_after = ((value_before - 32) * 5) / 9;
      } else {
        formula = "(x-32) * 5/9 + 273.15";
        value_after = ((value_before - 32) * 5) / 9 + 273.15;
      }
    }
    conversion = { formula: formula, value_after: value_after };
    return conversion;
  };

  const [kind, setKind] = useState("");

  const [before, setBefore] = useState("");

  const [after, setAfter] = useState("");

  const [value_before, setEnterValue] = useState("");

  const [value_after, setAfterValue] = useState("");

  const [ratio, setRatio] = useState("");

  const kindHandler = (e) => {
    setEnterValue("");
    setAfterValue("");
    setBefore("");
    setAfter("");
    setKind(e.value);
  };

  const orinHandler = (e) => {
    setAfterValue("");
    setBefore(e);
  };

  const aftHandler = (e) => {
    setAfterValue("");
    setAfter(e);
  };

  const message = () => {
    alert("Negative Number Makes No Sense Here!!!");
  };

  const pickBoth = () => {
    alert("Make Sure You Picked Both Units!!!");
  };

  const inputHandler = (e) => {
    setEnterValue(e.target.value);
  };

  const clickHandler = (e) => {
    if (value_before < 0 && kind !== Temperature) {
      message();
    } else {
      if (before && after) {
        let conversion;
        if (kind !== Temperature) {
          conversion = converter(
            before.label,
            before.value,
            after.label,
            after.value
          );
        } else {
          conversion = temperature(before.label, after.label);
        }
        setRatio(conversion.formula);
        setAfterValue(conversion.value_after);
      } else {
        pickBoth();
      }
    }
  };

  return (
    <>
      <h1 className="header-converter">Unit Conversion</h1>
      <img
        src="https://www.seekpng.com/png/detail/61-610271_png-file-pencil-ruler-svg.png"
        alt="Png File - Pencil Ruler Svg@seekpng.com"
        className="ruler-img"
      ></img>

      <div className="unit-container">
        <div className="kind-container">
          <h4 className="kind-text">Select Measurement</h4>
          <div className="kind-dropdown">
            <Select
              options={units_kind}
              onChange={kindHandler}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "green",
                  borderRadius: "0.5rem",
                  fontSize: "120%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }),
              }}
            />
          </div>
        </div>
        <div className="original-container">
          <h4>From: </h4>

          <input
            className="value-enter"
            placeholder="Value"
            type="number"
            value={value_before}
            onChange={inputHandler}
          />
          <div className="kind-dropdown">
            <Select
              options={kind}
              isDisabled={kind === ""}
              value={before}
              onChange={orinHandler}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "green",
                  borderRadius: "0.5rem",
                  fontSize: "120%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }),
              }}
            />
          </div>
        </div>
        <div className="arrow-container">
          <button onClick={clickHandler} className="convert-button">
            Convert!
          </button>
          <img src={arrow} alt="Arrow" className="arrow-convert" />
        </div>

        <div className="to-container">
          <h4>To: </h4>
          {value_after === "" ? null : (
            <div className="result-container">
              <p className="result-text">{value_after}</p>
            </div>
          )}
          <div className="kind-dropdown">
            <Select
              options={kind}
              isDisabled={kind === ""}
              value={after}
              onChange={aftHandler}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderColor: "green",
                  borderRadius: "0.5rem",
                  fontSize: "120%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }),
              }}
            />
          </div>
        </div>

        <div className="ratio-container">
          <h4>Ratio/Formula: </h4>
          {after === "" || value_after === "" ? null : (
            <div className="formula-container">
              <p className="formula-text">{ratio}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Units;
