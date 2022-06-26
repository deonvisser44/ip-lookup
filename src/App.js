import { useEffect, useState } from "react";
import classes from './App.module.css'
import SearchBar from "./components/SearchBar";
import AddressInfo from "./components/AddressInfo";
import MapComp from "./components/MapComp";
import Banner from "./components/Banner";
import { FaSearchLocation } from "react-icons/fa";

function App() {
  const [searchResult, setSearchResult] = useState({});
  const [searchIp, setSearchIp] = useState("");
  const [defaultIp, setDefaultIp] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [hasData, setHasData] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e) => {
    setSearchIp(e.target.value);
  };

  const getUserIP = () => {
    fetch("http://ip.jsontest.com/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.ip);
        setSearchIp(data.ip);
        setDefaultIp(data.ip);
        return data.ip;
      });
  };

  const getInputData = (e) => {
    e.preventDefault();

    fetch(`https://ipapi.co/${searchIp || defaultIp}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setHasError(true);
          setHasData(false);
          return;
        }
        setSearchResult(data);
        setLat(data.latitude);
        setLong(data.longitude);
        setHasData(true);
        setHasError(false);
      });
  };

  useEffect(() => {
    if(searchIp.length === 0) {
      setHasError(false)
    }
  }, [searchIp])

  useEffect(() => {
    getUserIP();
  }, []);

  return (
    <div className={classes.App}>
      <div className={classes.backgroundImg}></div>
      <div className={classes.logo}>
        <h1>
          <span className={classes.logoSpan}>IP</span> LOOKUP <FaSearchLocation />
        </h1>
      </div>
      <div className={classes.content}>
        <SearchBar
          searchIp={searchIp}
          handleInputChange={handleInputChange}
          submitHandler={getInputData}
          hasError={hasError}
        />
        {!hasData && <Banner />}
        {hasData && !hasError && (
          <div className={classes.headingAndInfo}>
            <h2>Info about IP: {searchResult.ip}</h2>
            <div className={classes.infoAndMap}>
              <AddressInfo
                country={searchResult.country_name}
                ip={searchResult.ip}
                city={searchResult.city}
                isp={searchResult.org}
                region={searchResult.region}
                version={searchResult.version}
                lat={searchResult.latitude}
                long={searchResult.longitude}
              />
              <MapComp lat={lat} long={long} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
