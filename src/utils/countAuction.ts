import { useState, useEffect } from "react";
import { useProductContext } from "../contexts/productContext";

const countAuction = () => {
  const { count, setCount } = useProductContext();

  useEffect(() => {
    let interval = setInterval(() => {
      let timeArr = count.split(":");
      let seconds =
        parseInt(timeArr[0]) * 3600 +
        parseInt(timeArr[1]) * 60 +
        parseInt(timeArr[2]);
      seconds--;

      if (seconds < 0) {
        clearInterval(interval);
        setCount("00:00:00");
      } else {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        let displayHours = hours < 10 ? "0" + hours : hours;
        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds =
          remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

        setCount(`${displayHours}:${displayMinutes}:${displaySeconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return count;
};

export { countAuction };
