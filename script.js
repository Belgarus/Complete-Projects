const form = document.querySelector(".top-banner form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const input = document.querySelector(".top-banner form input")
const inputVal = input.value
const apiKey = "14d674dd08475e037565e3a068a05b95"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)