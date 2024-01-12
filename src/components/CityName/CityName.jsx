import styles from "./CityName.module.css";
export const CityName = ({ viewCity }) => {
  return <div className={styles.weatherLocation}>{viewCity}</div>;
};
