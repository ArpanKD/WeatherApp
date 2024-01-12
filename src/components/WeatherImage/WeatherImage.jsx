import styles from "./WeatherImage.module.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

import { useState } from "react";

export const WeatherImage = (props) => {
  const iconId = props;
  const [icon, setIcon] = useState(clear_icon);

  if (iconId === "01d" || iconId === "01n") {
    setIcon(clear_icon);
  } else if (
    iconId === "02d" ||
    iconId === "02n" ||
    iconId === "03d" ||
    iconId === "03n" ||
    iconId === "04d" ||
    iconId === "04n"
  ) {
    setIcon(cloud_icon);
  } else if (iconId === "09d" || iconId === "09n") {
    setIcon(drizzle_icon);
  } else if (
    iconId === "10d" ||
    iconId === "10n" ||
    iconId === "11d" ||
    iconId === "11n"
  ) {
    setIcon(rain_icon);
  } else if (iconId === "13d" || iconId === "13n") {
    setIcon(snow_icon);
  }
  return (
    <div className={styles.weatherImage}>
      <img src={icon} alt="" />
    </div>
  );
};
