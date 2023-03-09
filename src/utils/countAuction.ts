import { useState, useEffect } from "react";

const countAuction = (time: string) => {
  const [countdownResult, setCountdownResult] = useState("");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    let interval = setInterval(() => {
      let counst = new Date(time);

      let count_down = counst.setHours(counst.getHours() + 72);

      let now = new Date(Date.now()).getTime();
      let diff = count_down - now;

      if (diff < 0) {
        clearInterval(interval);
        setCountdownResult("00:00:00");
      } else {
        const days = Math.floor(diff / day);
        const hours = Math.floor((diff % day) / hour);
        const minutes = Math.floor((diff % hour) / minute);
        const seconds = Math.floor((diff % minute) / second);

        const daysInHours = days * 24;
        const days_hours = daysInHours + hours;

        let displayHours = days_hours < 10 ? "0" + days_hours : days_hours;
        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        setCountdownResult(
          `${displayHours}:${displayMinutes}:${displaySeconds}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownResult]);

  return countdownResult;
};

export { countAuction };
