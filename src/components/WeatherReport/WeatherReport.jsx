import { useEffect, useState } from "react";
import styles from "./WeatherReport.module.css";
import { WeatherImage } from "../WeatherImage/WeatherImage";
import search_icon from "../assets/search.png";
import { Humidity } from "../Humidity/Humidity";
import { WindSpeed } from "../WindSpeed/WindSpeed";
import { CityName } from "../CityName/CityName";
import { WeatherTemp } from "../WeatherTemp/WeatherTemp";

export const WeatherReport = () => {
  const apiKeyOpenW = "3e45f99f1696eff174f1bade338333d8";
  const [inputText, setInputText] = useState();
  const [currentCity, setcurrentCity] = useState();
  const [temparature, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [viewCity, setViewCity] = useState();
  const [iconCode, setIconCode] = useState("01d");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKeyOpenW}`
          );
          const newData = await response.json();
          setTemp(Math.floor(newData.main.temp));
          setHumidity(Math.floor(newData.main.humidity));
          setWindSpeed(Math.floor(newData.wind.speed));
          setViewCity(newData.name);
          setIconCode(newData.weather[0].icon);
        },
        () => {
          setcurrentCity("new delhi");
        }
      );
    }
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apiKeyOpenW}`
      );
      const newData = await response.json();
      setTemp(Math.floor(newData.main.temp));
      setHumidity(Math.floor(newData.main.humidity));
      setWindSpeed(Math.floor(newData.wind.speed));
      setViewCity(newData.name);
      setIconCode(newData.weather[0].icon);
    };
    if (currentCity) {
      fetchdata();
    }
  }, [currentCity]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const search = () => {
    setcurrentCity(inputText);
    setInputText("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setcurrentCity(inputText);
      setInputText("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <input
          type="text"
          className={styles.cityInput}
          value={inputText}
          placeholder="Enter City Name"
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <div
          className={styles.searchIcon}
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search" />
        </div>
      </div>

      <WeatherImage iconCode={iconCode} />
      <WeatherTemp temparature={temparature} />
      <CityName viewCity={viewCity} />
      <div className={styles.dataContainer}>
        <Humidity humidity={humidity} />
        <WindSpeed windSpeed={windSpeed} />
      </div>
    </div>
  );
};
