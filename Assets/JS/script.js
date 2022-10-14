const countdown = () => {
  const countDate = new Date("December 10, 2022 12:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;


  //Milisecond conversion
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Calculations
  const daysTill = Math.floor(gap / day);
  const hoursTill = Math.floor((gap % day) / hour);
  const minutesTill = Math.floor((gap % hour) / minute);
  const secondsTill = Math.floor((gap % minute) / second);

  //Display
  document.getElementById("day").innerHTML = daysTill;
  document.getElementById("hour").innerHTML = hoursTill;
  document.getElementById("minute").innerHTML = minutesTill;
  document.getElementById("second").innerHTML = secondsTill;

};

setInterval(countdown, 1000);