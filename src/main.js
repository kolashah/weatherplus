document.addEventListener("DOMContentLoaded", () => {
  let url;
  let query;
  let apiKey;
  let units;
  document.addEventListener("submit", function (e) {
    e.preventDefault();

    query = document.getElementById("cityInput").value;
    apiKey = "d4c55138bbca34363a7498b9f44c7c5d";
    units = "imperial";
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=" +
      apiKey +
      "&units=" +
      units;

    console.log(url);

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        const weatherData = data;
        const temp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const tempMin = weatherData.main.temp_min;
        const tempMax = weatherData.main.temp_max;
        const humidity = weatherData.main.humidity;
        // const sunrise =
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        // console.log(data);

        const container = document.createElement("div");
        container.setAttribute("class", "container");
        document.body.appendChild(container);

        const weather = document.createElement("h2");
        weather.setAttribute("class", "currentWeather");
        weather.innerText = description;
        document.querySelector(".container").appendChild(weather);

        const currentTemp = document.createElement("h1");
        currentTemp.setAttribute("class", "temperature");
        currentTemp.innerText = `Current Temp: ${temp}\u00B0`;
        document.querySelector(".container").appendChild(currentTemp);

        const weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("class", "icon");
        weatherIcon.setAttribute("src", imageURL);
        weatherIcon.innerText = icon;
        document.querySelector(".container").appendChild(weatherIcon);

        const feelsLikeTemp = document.createElement("div");
        feelsLikeTemp.setAttribute("class", "feelslike sm-text");
        feelsLikeTemp.innerText = `Feels Like: ${feelsLike}\u00B0`;
        document.querySelector(".container").appendChild(feelsLikeTemp);

        const tempMinDiv = document.createElement("div");
        tempMinDiv.setAttribute("class", "tempMin sm-text");
        tempMinDiv.innerText = `Low: ${tempMin}\u00B0`;
        document.querySelector(".container").appendChild(tempMinDiv);

        const tempMaxDiv = document.createElement("div");
        tempMaxDiv.setAttribute("class", "tempMax sm-text");
        tempMaxDiv.innerText = `High: ${tempMax}\u00B0`;
        document.querySelector(".container").appendChild(tempMaxDiv);

        const humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("class", "humidity sm-text");
        humidityDiv.innerText = `Humidity: ${humidity}`;
        document.querySelector(".container").appendChild(humidityDiv);
      });
  });
});
