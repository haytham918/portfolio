import Units from "./Units";
import "./Converter.css";
import NavBar from "./NavBar";
import Currency from "./Currency";
import Time from "./Time";
import { useEffect, useState } from "react";
import axios from "axios";

const Converter = () => {
  const symbolURL =
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_5JxHD15VHFyRkSKwd2qbx4KXQAhGJGdR3mC9Qvm0";
  const latestURL =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_5JxHD15VHFyRkSKwd2qbx4KXQAhGJGdR3mC9Qvm0";
  const [countryList, setCountryList] = useState("");
  const [exchangeList, setExchangeList] = useState("");

  useEffect(() => {
    getData();
  }, []);

  console.log(countryList);

  async function getData() {
    const symbolResult = await axios.get(symbolURL);
    const latestResult = await axios.get(latestURL);
    if (latestResult.status === 200) {
      const data = symbolResult.data.data;
      const latestData = latestResult.data.data;
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
        />
      </div>
      <div className="page-container">{converterBody}</div>
    </div>
  );
};

export default Converter;
