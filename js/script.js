const form = document.querySelector("form.top-banner");
const input = document.querySelector("form.top-banner input");
const msg = document.querySelector("form.top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "14d674dd08475e037565e3a068a05b95";

function displayWeather(data) {
  const { main, name, sys, weather } = data;
  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

  // Check if city already exists
  const listItems = list.querySelectorAll(".city");
  const exists = Array.from(listItems).some(el => {
    const cityName = el.querySelector(".city-name span").textContent;
    const countryCode = el.querySelector(".city-name sup").textContent;
    return cityName === name && countryCode === sys.country;
  });

  if (exists) {
    msg.textContent = `You already know the weather for ${name}, ${sys.country}`;
    return;
  }

  const li = document.createElement("li");
  li.classList.add("city");
  const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img class="city-icon" src="${icon}" alt="${weather[0]["main"]}">
      <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
  `;
  li.innerHTML = markup;
  list.appendChild(li);
  msg.textContent = "";
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      displayWeather(data);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });

  form.reset();
  input.focus();
});

window.addEventListener('coordsFound', (e) => {
  const { latitude, longitude } = e.detail;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
       if (data.cod !== 200) {
        throw new Error(data.message);
      }
      displayWeather(data);
    })
    .catch(() => {
      msg.textContent = "Could not find weather for your location 😩";
    });
});