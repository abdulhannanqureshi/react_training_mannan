import Button from "./Button";
import styles from "./controls.module.scss";

const Controls = ({ onClick, isStarted }) => {
  return (
    <div className={styles.container}>
      <Button onClick={() => onClick(true)} disabled={isStarted}>
        Start
      </Button>
      <Button onClick={() => onClick(false)} disabled={!isStarted}>
        Stop
      </Button>
    </div>
  );
};

export default Controls;
