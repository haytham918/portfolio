import "./Currency.css";
import coin from "./coin.svg";
import arrow from "./arrow.svg";
import { useState } from "react";
import Select from "react-select";
import bitcoin from "./bitcoin.svg";
const Currency = (props) => {
  let countryCode = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
    BTC: 'BTC',
  };

  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [value_before, setEnterValue] = useState("");
  const [value_after, setAfterValue] = useState("");
  const [exchangeRate, setRate] = useState("");

  const [flag1, setFlag1] = useState("");
  const [flag2, setFlag2] = useState("");

  const createFlag1 = (str) => {
    if (str === "BTC") {
      setFlag1(bitcoin);
    } else {
      setFlag1(`https://flagsapi.com/${str}/shiny/32.png`);
    }
  };

  const createFlag2 = (str) => {
    if (str === "BTC") {
      setFlag2(bitcoin);
    } else {
      setFlag2(`https://flagsapi.com/${str}/shiny/32.png`);
    }
  };

  const inputHandler = (e) => {
    setEnterValue(e.target.value);
  };

  const beforeHandler = (e) => {
    setAfterValue("");
    setCountry1(e.value);
    createFlag1(countryCode[e.value]);
  };

  const afterHandler = (e) => {
    setAfterValue("");
    setCountry2(e.value);
    createFlag2(countryCode[e.value]);
  };

  const pickBoth = () => {
    alert("Please Pick Both Currencies!!!");
  };

  const clickHandler = () => {
    if (country1 !== "" && country2 !== "") {
      let exchangeValue1 = props.exchangeList[country1].value;
      let exchangeValue2 = props.exchangeList[country2].value;
      let ratio = exchangeValue2 / exchangeValue1;
      setRate(Number(ratio).toLocaleString("en"));
      setAfterValue(
        Number(value_before * ratio.toFixed(3)).toLocaleString("en")
      );
    } else {
      pickBoth();
    }
  };

  let val = [];
  if (props.countryList !== "") {
    val = Object.keys(props.countryList).map((key) => {
      return { label: `(${key}) ` + props.countryList[key].name, value: key };
    });
  }

  return (
    <>
      <h1 className="header-converter">Currency Conversion</h1>
      <img src={coin} alt="Coin" className="coin" />

      {props.countryList !== "" ? (
        <div className="currency-container">
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
                options={val}
                onChange={beforeHandler}
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
          <div className="convert-currency-container">
            <button onClick={clickHandler} className="convert-button">
              Convert!
            </button>
            <div className="flag-container">
              {flag1 !== "" ? (
                <img src={flag1} alt={country1} className="flag" />
              ) : null}
              <img src={arrow} alt="Arrow" className="arrow-convert" />
              {flag2 !== "" ? (
                <img src={flag2} alt={country2} className="flag" />
              ) : null}
            </div>
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
                options={val}
                onChange={afterHandler}
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
            <h4>Exchange Rate: </h4>
            {country2 === "" || value_after === "" ? null : (
              <div className="formula-container">
                <p className="formula-text">{exchangeRate}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1>
          Ooops... API Usage Limited:/<br></br>Come Back Later...
        </h1>
      )}
    </>
  );
};

export default Currency;
