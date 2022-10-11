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
  const endDay = Math.floor(gap / day);

  document.getElementById("days-till").innerHTML = endDay + " days till Departure";

};

countdown();