import styles from "./Humidity.module.css";
import humidity_icon from "../assets/humidity.png";

export const Humidity = ({ humidity }) => {
  return (
    <div className={styles.element}>
      <img src={humidity_icon} alt="" className={styles.icon} />
      <div className={styles.data}>
        <div className={styles.humidityPercent}>{humidity}% </div>
        <div className={styles.text}>Humidity</div>
      </div>
    </div>
  );
};
