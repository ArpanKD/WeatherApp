import styles from "./AppHeader.module.css";

const AppHeader = ({ title }) => {
  return (
    <header className={styles.heading}>
      <h2>{title}</h2>
    </header>
  );
};

export default AppHeader;
