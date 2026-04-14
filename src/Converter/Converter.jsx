import Units from "./Units";
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
  const [index, showIndex] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const symbolResult = await axios.get(symbolURL);
      const latestResult = await axios.get(latestURL);

      if (latestResult.status === 200) {
        setCountryList(symbolResult.data.data);
        setExchangeList(latestResult.data.data);
      }
    };

    getData();
  }, []);

  const gotoUnit = () => {
    showIndex(1);
  };

  const gotoCurrency = () => {
    showIndex(2);
  };

  const gotoTime = () => {
    showIndex(3);
  };

  let converterBody = null;

  if (index === 1) {
    converterBody = <Units />;
  } else if (index === 2) {
    converterBody = (
      <Currency countryList={countryList} exchangeList={exchangeList} />
    );
  } else if (index === 3) {
    converterBody = <Time />;
  }

  return (
    <div className="converter-shell">
      <NavBar
        activeIndex={index}
        gotoUnit={gotoUnit}
        gotoCurrency={gotoCurrency}
        gotoTime={gotoTime}
      />
      <div className="converter-page">{converterBody}</div>
    </div>
  );
};

export default Converter;
