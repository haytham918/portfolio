import Units from "./Units";
import "./Converter.css";
import NavBar from "./NavBar";
import Currency from "./Currency";
import Time from "./Time";
import { useEffect, useState } from "react";
import axios from "axios";

const Converter = ({ closeConverter }) => {
  const symbolsURL =
    "http://data.fixer.io/api/symbols?access_key=0ccba43ed82b96bca5e8206f5f1f094a";
  const latestURL =
    "http://data.fixer.io/api/latest?access_key=0ccba43ed82b96bca5e8206f5f1f094a";
  const [countryList, setCountryList] = useState("");
  const [exchangeList, setExchangeList] = useState("");

  useEffect(() => {
    getData();
  }, []);

  console.log(countryList);

  async function getData() {
    const result = await axios.get(symbolsURL);
    const latestResult = await axios.get(latestURL);
    if (latestResult.data.success) {
      const data = result.data.symbols;
      const latestData = latestResult.data.rates;
      setCountryList(data);
      setExchangeList(latestData);
    }
  }
  const [index, showIndex] = useState(1);
  let converterBody;
  if (index === 1) {
    converterBody = <Units />;
  } else if (index === 2) {
    converterBody = (
      <Currency countryList={countryList} exchangeList={exchangeList} />
    );
  } else if (index === 3) {
    converterBody = <Time />;
  } else {
    converterBody = null;
  }

  const gotoUnit = () => {
    showIndex(1);
  };

  const gotoCurrency = () => {
    showIndex(2);
  };

  const gotoTime = () => {
    showIndex(3);
  };

  return (
    <div className="overall">
      <div className="top-bar">
        <NavBar
          className="top-bar"
          gotoUnit={gotoUnit}
          gotoCurrency={gotoCurrency}
          gotoTime={gotoTime}
          closeConverter={closeConverter}
        />
      </div>
      <div className="page-container">{converterBody}</div>
    </div>
  );
};

export default Converter;
