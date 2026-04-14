import coin from "./coin.svg";
import arrow from "./arrow.svg";
import { useState } from "react";
import Select from "react-select";
import bitcoin from "./bitcoin.svg";

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

const Currency = (props) => {
  const countryCode = {
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
    BTC: "BTC",
  };

  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [value_before, setEnterValue] = useState("");
  const [value_after, setAfterValue] = useState("");
  const [exchangeRate, setRate] = useState("");
  const [flag1, setFlag1] = useState("");
  const [flag2, setFlag2] = useState("");

  const createFlag = (code) =>
    code === "BTC" ? bitcoin : `https://flagsapi.com/${code}/shiny/32.png`;

  const inputHandler = (e) => {
    setEnterValue(e.target.value);
  };

  const beforeHandler = (option) => {
    setAfterValue("");
    setCountry1(option.value);
    setFlag1(createFlag(countryCode[option.value]));
  };

  const afterHandler = (option) => {
    setAfterValue("");
    setCountry2(option.value);
    setFlag2(createFlag(countryCode[option.value]));
  };

  const clickHandler = () => {
    if (country1 === "" || country2 === "") {
      alert("Please Pick Both Currencies!!!");
      return;
    }

    const exchangeValue1 = props.exchangeList[country1].value;
    const exchangeValue2 = props.exchangeList[country2].value;
    const ratio = exchangeValue2 / exchangeValue1;

    setRate(Number(ratio).toLocaleString("en"));
    setAfterValue(Number(value_before * ratio.toFixed(3)).toLocaleString("en"));
  };

  let val = [];
  if (props.countryList !== "") {
    val = Object.keys(props.countryList).map((key) => ({
      label: `(${key}) ${props.countryList[key].name}`,
      value: key,
    }));
  }

  if (props.countryList === "") {
    return (
      <section className="converter-panel">
        <h1 className="converter-heading">Currency Conversion</h1>
        <p className="mt-8 text-center text-[1rem] font-medium text-title">
          Ooops... API Usage Limited:/ Come Back Later...
        </p>
      </section>
    );
  }

  return (
    <section className="converter-panel">
      <h1 className="converter-heading">Currency Conversion</h1>
      <img src={coin} alt="Coin" className="converter-art" />

      <div className="mt-6 flex flex-col gap-1">
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
            <Select options={val} onChange={beforeHandler} styles={selectStyles} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          <button onClick={clickHandler} className="converter-button" type="button">
            Convert
          </button>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {flag1 !== "" ? <img src={flag1} alt={country1} className="h-10 w-10 rounded-full shadow-sm" /> : null}
            <img src={arrow} alt="Arrow" className="h-12 w-auto opacity-70" />
            {flag2 !== "" ? <img src={flag2} alt={country2} className="h-10 w-10 rounded-full shadow-sm" /> : null}
          </div>
        </div>

        <div className="converter-row">
          <h4 className="converter-label">To</h4>
          {value_after === "" ? (
            <div className="converter-note">Result appears here</div>
          ) : (
            <div className="converter-result">{value_after}</div>
          )}
          <div className="converter-select">
            <Select options={val} onChange={afterHandler} styles={selectStyles} />
          </div>
        </div>

        <div className="converter-row">
          <h4 className="converter-label">Exchange rate</h4>
          {country2 === "" || value_after === "" ? (
            <div className="converter-note">Choose both currencies</div>
          ) : (
            <div className="converter-note">{exchangeRate}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Currency;
