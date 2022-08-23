import styles from "./watch.module.scss";

const paddedTime = (num) => {
  return num.toString().padStart(2, 0);
};

const formatTime = (timeInSeconds) => {
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60);
  const hours = Math.floor(timeInSeconds / (60 * 60));

  return `${paddedTime(hours)}:${paddedTime(minutes)}:${paddedTime(seconds)}`;
};

const Watch = ({ currentTime }) => {
  return (
    <div className={`${styles.container} p-10 p-top-8 m-top-10`}>
      {formatTime(currentTime)}
    </div>
  );
};

export default Watch;
