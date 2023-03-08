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

  if (days > 0) {
    return days === 1 ? `há ${days} dia` : `há ${days} dias`;
  }

  if (hours > 0) {
    return hours === 1 ? `há ${hours} hora` : `há ${hours} horas`;
  }

  if (minutes > 0) {
    return minutes === 1 ? `há ${minutes} minuto` : `há ${minutes} minutos`;
  }

  if (seconds > 0) {
    return seconds === 1 ? `há ${seconds} segundo` : `há ${seconds} segundos`;
  }
};

const convertDate = (date: string) => {
  if (date?.length > 0) {
    const dateBirthDate = date;
    const dateSplit = dateBirthDate?.split("");

    const dateFormated =
      dateSplit[4] +
      dateSplit[5] +
      dateSplit[6] +
      dateSplit[7] +
      "-" +
      dateSplit[2] +
      dateSplit[3] +
      "-" +
      dateSplit[0] +
      dateSplit[1];

    return dateFormated;
  } else {
    return "";
  }
};

export { dateHour, convertDate };
