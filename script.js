const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msg = document.querySelector(".top-banner .msg");

const apiKey = "14d674dd08475e037565e3a068a05b95";

form.addEventListener("submit", e => {
  e.preventDefault();

  const inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // do stuff with the data
      console.log(data);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });
});
