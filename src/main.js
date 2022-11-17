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
        const cityName = weatherData.name;
        const temp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const tempMin = weatherData.main.temp_min;
        const tempMax = weatherData.main.temp_max;
        const humidity = weatherData.main.humidity;
        const sunrise = weatherData.sys.sunrise;
        const sunriseDate = new Date(sunrise);
        let sunriseHours = (sunriseDate.getHours() < 10) ? "0" + sunriseDate.getHours() : sunriseDate.getHours();
        let sunriseMinutes = (sunriseDate.getMinutes() < 10) ? "0" + sunriseDate.getMinutes() : sunriseDate.getMinutes();
        let sunriseTime = sunriseHours + ":" + sunriseMinutes;
        const sunset = weatherData.sys.sunset;
        const sunsetDate = new Date(sunset);
        let sunsetHours = (sunsetDate.getHours() < 10) ? "0" + sunsetDate.getHours() : sunsetDate.getHours();
        let sunsetMinutes = (sunsetDate.getMinutes() < 10) ? "0" + sunsetDate.getMinutes() : sunsetDate.getMinutes();
        let sunsetTime = sunsetHours + ":" + sunsetMinutes;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        // console.log(data);

        // const container = document.createElement("div");
        // container.setAttribute("class", "container");
        // document.body.appendChild(container);
        const sunriseDiv = document.createElement("div");
        sunriseDiv.setAttribute("class", "sunrise sm-text");
        sunriseDiv.innerText = `Sunrise: ${sunriseTime}`;
        document.querySelector("#sunrise").appendChild(sunriseDiv);

        const sunsetDiv = document.createElement("div");
        sunsetDiv.setAttribute("class", "sunset sm-text");
        sunsetDiv.innerText = `Sunset: ${sunsetTime}`;
        document.querySelector("#sunset").appendChild(sunsetDiv);

        const cityNameDiv = document.createElement("h1");
        cityNameDiv.setAttribute("class", "cityName mid-text");
        cityNameDiv.innerText = cityName;
        document.querySelector("#city").appendChild(cityNameDiv);

        const weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("class", "icon");
        weatherIcon.setAttribute("src", imageURL);
        weatherIcon.innerText = icon;
        document.querySelector("#icon").appendChild(weatherIcon);

        const weather = document.createElement("h2");
        weather.setAttribute("class", "currentWeather");
        weather.innerText = description;
        document.querySelector("#description").appendChild(weather);

        const currentTemp = document.createElement("h1");
        currentTemp.setAttribute("class", "temperature");
        currentTemp.innerText = `${Math.floor(temp)}\u00B0`;
        document.querySelector("#temp").appendChild(currentTemp);


        const feelsLikeTemp = document.createElement("div");
        feelsLikeTemp.setAttribute("class", "feelslike sm-text");
        feelsLikeTemp.innerText = `(Feels Like: ${Math.floor(feelsLike)}\u00B0)`;
        document.querySelector("#feelsLike").appendChild(feelsLikeTemp);

        const tempMinDiv = document.createElement("div");
        tempMinDiv.setAttribute("class", "tempMin sm-text");
        tempMinDiv.innerText = `Low: ${Math.floor(tempMin)}\u00B0`;
        document.querySelector("#low").appendChild(tempMinDiv);

        const tempMaxDiv = document.createElement("div");
        tempMaxDiv.setAttribute("class", "tempMax sm-text");
        tempMaxDiv.innerText = `High: ${Math.floor(tempMax)}\u00B0`;
        document.querySelector("#high").appendChild(tempMaxDiv);

        const humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("class", "humidity sm-text");
        humidityDiv.innerText = `Humidity: ${humidity}\u0025`;
        document.querySelector("#humidity").appendChild(humidityDiv);
      });
  });
});
