const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

const getDate = () => {
  const d = new Date();
  const date = d.toLocaleDateString("es-CL", dateOptions);
  document.querySelector(".date").textContent = date;
};

const getTime = () => {
  const d = new Date();
  const time = d.toLocaleTimeString("es-CL", timeOptions).slice(0, 5);
  document.querySelector(".time").textContent = time;
};

const getFlightNumber = () => {
  const flightNumber = Math.floor(Math.random() * 9000) + 1000;
  document.getElementById("numberFlight").textContent = flightNumber;
};

const getRandomTerminalNumber = () => {
  const numberTerminal = Math.floor(Math.random() * 10) + 1;
  document.getElementById("numberTerminal").textContent = numberTerminal;
};

window.onload = function () {
  getTime();
  getDate();
  getFlightNumber();
  getRandomTerminalNumber();
  // setInterval(() => getTime(), 1000);
};
