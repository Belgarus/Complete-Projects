const form = document.querySelector("form.top-banner");
const input = document.querySelector("form.top-banner input");
const msg = document.querySelector("form.top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "14d674dd08475e037565e3a068a05b95";

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

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
      
      form.reset();
      input.focus();
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
      
      form.reset();
      input.focus();
    });
});

//Check for country
// 1
const listItems = list.querySelectorAll(".ajax-section .city");
const listItemsArray = Array.from(listItems);

if (listItemsArray.length > 0) {
// 2
const filteredArray = listItemsArray.filter(elem => {
    const content = ""
    if (inputVal.includes(',')){
        if(inputVal.split(',')[1].length() > 2){
            inputVal = inputVal.split(",")[0];
        content = el.querySelector(".city-name span").textContent.toLowerCase();
        }
    }
})
}