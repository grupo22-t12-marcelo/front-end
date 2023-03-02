const dateHour = (time: string) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const date = new Date(time).getTime();

  const dateNow = new Date().getTime();

  const dated = dateNow - date;

  const days = Math.floor(dated / day);
  const hours = Math.floor((dated % day) / hour);
  const minutes = Math.floor((dated % hour) / minute);
  const seconds = Math.floor((dated % minute) / second);

  const dateH = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
  return dateH;
};

export { dateHour };
