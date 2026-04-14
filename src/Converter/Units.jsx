import { useState } from "react";
import Select from "react-select";
import arrow from "./arrow.svg";

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

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minHeight: 48,
    borderRadius: 12,
    borderColor: state.isFocused ? "rgba(15, 23, 42, 0.24)" : "rgba(15, 23, 42, 0.1)",
    boxShadow: "none",
    paddingInline: 4,
    backgroundColor: "white",
    fontWeight: 500,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: 12,
    overflow: "hidden",
  }),
};

const Units = () => {
  const [kind, setKind] = useState("");
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [value_before, setEnterValue] = useState("");
  const [value_after, setAfterValue] = useState("");
  const [ratio, setRatio] = useState("");

  const converter = (before_label, before_value, after_label, after_value) => {
    let formula;
    let valueAfter;

    if (before_label === "Liter per 100 kilometers") {
      formula = `${282.481 / after_value}/x`;
      valueAfter = before_value / after_value / value_before;
    } else if (after_label === "Liter per 100 kilometers") {
      formula = `${282.481 / before_value}/x`;
      valueAfter = after_value / before_value / value_before;
    } else {
      formula = before_value / after_value;
      valueAfter = formula * value_before;
    }

    return { formula, value_after: valueAfter };
  };

  const temperature = (before_label, after_label) => {
    let formula;
    let valueAfter;

    if (before_label === "Celsius") {
      if (after_label === "Kelvin") {
        formula = "x + 273.15";
        valueAfter = Number(value_before) + 273.15;
      } else {
        formula = "x*(1.8) + 32";
        valueAfter = Number(value_before) * 1.8 + 32;
      }
    } else if (before_label === "Kelvin") {
      if (after_label === "Celsius") {
        formula = "x - 273.15";
        valueAfter = value_before - 273.15;
      } else {
        formula = "(x-273.15) * (1.8) + 32";
        valueAfter = (value_before - 273.15) * 1.8 + 32;
      }
    } else if (before_label === "Fahrenheit") {
      if (after_label === "Celsius") {
        formula = "(x-32) * 5/9 ";
        valueAfter = ((value_before - 32) * 5) / 9;
      } else {
        formula = "(x-32) * 5/9 + 273.15";
        valueAfter = ((value_before - 32) * 5) / 9 + 273.15;
      }
    }

    return { formula, value_after: valueAfter };
  };

  const kindHandler = (option) => {
    setEnterValue("");
    setAfterValue("");
    setBefore("");
    setAfter("");
    setKind(option.value);
  };

  const orinHandler = (option) => {
    setAfterValue("");
    setBefore(option);
  };

  const aftHandler = (option) => {
    setAfterValue("");
    setAfter(option);
  };

  const inputHandler = (e) => {
    setEnterValue(e.target.value);
  };

  const clickHandler = () => {
    if (value_before < 0 && kind !== Temperature) {
      alert("Negative Number Makes No Sense Here!!!");
      return;
    }

    if (!before || !after) {
      alert("Make Sure You Picked Both Units!!!");
      return;
    }

    const conversion =
      kind !== Temperature
        ? converter(before.label, before.value, after.label, after.value)
        : temperature(before.label, after.label);

    setRatio(conversion.formula);
    setAfterValue(conversion.value_after);
  };

  return (
    <section className="converter-panel">
      <h1 className="converter-heading">Unit Conversion</h1>
      <img
        src="https://www.seekpng.com/png/detail/61-610271_png-file-pencil-ruler-svg.png"
        alt="Pencil and ruler"
        className="converter-art"
      />

      <div className="mt-6 flex flex-col gap-1">
        <div className="converter-row">
          <h4 className="converter-label">Select measurement</h4>
          <div className="converter-select">
            <Select options={units_kind} onChange={kindHandler} styles={selectStyles} />
          </div>
        </div>

        <div className="converter-row">
          <h4 className="converter-label">From</h4>
          <input
            className="converter-input"
            placeholder="Value"
            type="number"
            value={value_before}
            onChange={inputHandler}
          />
          <div className="converter-select">
            <Select
              options={kind}
              isDisabled={kind === ""}
              value={before}
              onChange={orinHandler}
              styles={selectStyles}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <button onClick={clickHandler} className="converter-button" type="button">
            Convert
          </button>
          <img src={arrow} alt="Arrow" className="h-12 w-auto opacity-70" />
        </div>

        <div className="converter-row">
          <h4 className="converter-label">To</h4>
          {value_after === "" ? (
            <div className="converter-note">Result appears here</div>
          ) : (
            <div className="converter-result">{value_after}</div>
          )}
          <div className="converter-select">
            <Select
              options={kind}
              isDisabled={kind === ""}
              value={after}
              onChange={aftHandler}
              styles={selectStyles}
            />
          </div>
        </div>

        <div className="converter-row">
          <h4 className="converter-label">Ratio / Formula</h4>
          {after === "" || value_after === "" ? (
            <div className="converter-note">Choose units to compute</div>
          ) : (
            <div className="converter-note">{ratio}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Units;
