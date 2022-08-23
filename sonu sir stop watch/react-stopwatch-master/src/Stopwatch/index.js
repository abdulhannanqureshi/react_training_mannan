import { useRef, useState } from "react";
import Controls from "./Controls";
import styles from "./stopwatch.module.scss";
import Watch from "./Watch";

export const Stopwatch = (props) => {
  const [timer, setTimer] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(0);
  const interval = useRef();

  const startTimer = () => {
    stopTimer();
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    setIsTimerStarted(true);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setIsTimerStarted(false);
  };

  const onControlChange = (isStarted) => {
    if (isStarted) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  return (
    <div className={styles.container}>
      <Watch currentTime={timer} />
      <Controls onClick={onControlChange} isStarted={isTimerStarted} />
    </div>
  );
};

export default Stopwatch;
