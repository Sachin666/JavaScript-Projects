const apikey = "18253e90dc489703bd6882c332f472e6";

const main = document.getElementById("main");

const form = document.getElementById("form");

const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeather(city) {
  const res = await fetch(url(city));
  const data = await res.json();
  addWeather(data);
}

function addWeather(data) {
  const temp = KtoC(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
                      <h2>${temp}°C <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'/></h2>
                      <small>it's ${data.weather[0].main} in ${data.name}</small>
                      `;

  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(k) {
  return Math.floor(k - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;

  if (city) {
    getWeather(city);
  }

  search.value = "";
});
