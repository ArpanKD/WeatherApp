import React, { useEffect, useState } from "react";
import styles from "./WeatherReport.module.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

export const WeatherReport = () => {
  const apiKey = "3e45f99f1696eff174f1bade338333d8";
  const [inputText, setInputText] = useState();
  const [city, setCity] = useState("Delhi");

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [temparature, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [viewCity, setViewCity] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    const fetchCity = async () => {
      if ((lat, long)) {
        const response = await fetch(
          `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`
        );
        const data = await response.json();
        if (
          data.address.town ||
          data.address.town ||
          data.address.residential
        ) {
          if (data.address.city) {
            setCity(data.address.city);
            console.log(city);
          } else if (data.address.town) {
            setCity(data.address.town);
            console.log(city);
          } else if (data.address.residential)
            setCity(data.address.residential);
          console.log(city);
        }
        console.log(city);
      }
    };
    fetchCity();
  }, [lat, long, city]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      let newData = await response.json();
      setTemp(Math.floor(newData.main.temp));
      setHumidity(Math.floor(newData.main.humidity));
      setWindSpeed(Math.floor(newData.wind.speed));
      setViewCity(newData.name);
    };
    fetchdata();
  }, [city]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const search = () => {
    setCity(inputText);
    setInputText("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCity(inputText);
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
      <div className={styles.weatherImage}>
        <img src={cloud_icon} alt="" />
      </div>
      <div className={styles.weatherTemp}> {temparature}ºC</div>
      <div className={styles.weatherLocation}>{viewCity}</div>
      <div className={styles.dataContainer}>
        <div className={styles.element}>
          <img src={humidity_icon} alt="" className={styles.icon} />
          <div className={styles.data}>
            <div className={styles.humidityPercent}>{humidity}% </div>
            <div className={styles.text}>Humidity</div>
          </div>
        </div>

        <div className={styles.element}>
          <img src={wind_icon} alt="" className={styles.icon} />
          <div className={styles.data}>
            <div className={styles.humidityPercent}>{windSpeed} KM/Hr</div>
            <div className={styles.text}>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
