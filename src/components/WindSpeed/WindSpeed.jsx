import styles from "./WindSpeed.module.css";
import wind_icon from "../assets/wind.png";
export const WindSpeed = ({ windSpeed }) => {
  return (
    <div className={styles.element}>
      <img src={wind_icon} alt="" className={styles.icon} />
      <div className={styles.data}>
        <div className={styles.humidityPercent}>{windSpeed} KM/Hr</div>
        <div className={styles.text}>Wind Speed</div>
      </div>
    </div>
  );
};
