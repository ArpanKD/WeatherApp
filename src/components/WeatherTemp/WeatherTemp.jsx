import styles from "./WeatherTemp.module.css";
export const WeatherTemp = ({ temparature }) => {
  return <div className={styles.weatherTemp}> {temparature}ºC</div>;
};
