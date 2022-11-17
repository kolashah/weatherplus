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

    document.getElementById("cityInput").value = ''

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
        let sunriseHours =
          sunriseDate.getHours() < 10
            ? "0" + sunriseDate.getHours()
            : sunriseDate.getHours();
        let sunriseMinutes =
          sunriseDate.getMinutes() < 10
            ? "0" + sunriseDate.getMinutes()
            : sunriseDate.getMinutes();
        let sunriseTime = sunriseHours + ":" + sunriseMinutes;
        const sunset = weatherData.sys.sunset;
        const sunsetDate = new Date(sunset);
        let sunsetHours =
          sunsetDate.getHours() < 10
            ? "0" + sunsetDate.getHours()
            : sunsetDate.getHours();
        let sunsetMinutes =
          sunsetDate.getMinutes() < 10
            ? "0" + sunsetDate.getMinutes()
            : sunsetDate.getMinutes();
        let sunsetTime = sunsetHours + ":" + sunsetMinutes;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        // console.log(data);

        //main container
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        document.body.appendChild(container);

        //container header
        const header = document.createElement("div");
        header.setAttribute("class", "header");
        const containerID = document.querySelector(".container");
        containerID.appendChild(header);

        const sunriseClass = document.createElement("div");
        sunriseClass.setAttribute("class", "bi bi-sunrise fa-4x");
        const headerID = document.querySelector(".header");
        headerID.appendChild(sunriseClass);

        const sunriseDiv = document.createElement("div");
        sunriseDiv.setAttribute("class", "sunrise sm-text");
        sunriseDiv.innerText = `Sunrise: ${sunriseTime}`;
        sunriseClass.appendChild(sunriseDiv);

        const sunsetClass = document.createElement("div");
        sunsetClass.setAttribute("class", "bi bi-sunset-fill fa-4x");
        headerID.appendChild(sunsetClass);

        const sunsetDiv = document.createElement("div");
        sunsetDiv.setAttribute("class", "sunset sm-text");
        sunsetDiv.innerText = `Sunset: ${sunsetTime}`;
        sunsetClass.appendChild(sunsetDiv);


        //city name
        const cityDiv = document.createElement("div");
        cityDiv.setAttribute("class", "city");
        containerID.appendChild(cityDiv);

        const cityNameDiv = document.createElement("h1");
        cityNameDiv.setAttribute("class", "cityName mid-text");
        cityNameDiv.innerText = cityName;
        const cityNameClass = document.querySelector(".city");
        cityNameClass.appendChild(cityNameDiv);


        // middle
        const middleDiv = document.createElement("div");
        middleDiv.setAttribute("class", "middle");
        containerID.appendChild(middleDiv);

        //middle left
        const leftHalf = document.createElement("div");
        leftHalf.setAttribute("class", "leftHalf");
        const middleID = document.querySelector(".middle");
        middleID.appendChild(leftHalf);

        const iconDiv = document.createElement("div");
        iconDiv.setAttribute("class", "icon");
        const leftID = document.querySelector(".leftHalf");
        leftID.appendChild(iconDiv);

        const weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("class", "icon");
        weatherIcon.setAttribute("src", imageURL);
        weatherIcon.innerText = icon;
        const WeatherIconDiv = document.querySelector(".icon");
        WeatherIconDiv.appendChild(weatherIcon);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", "description");
        leftHalf.appendChild(descriptionDiv);

        const weather = document.createElement("h3");
        weather.setAttribute("class", "currentWeather");
        weather.innerText = description;
        const descDiv = document.querySelector(".description");
        descDiv.appendChild(weather);

        //space
        const spaceDiv = document.createElement("div");
        spaceDiv.setAttribute("class", "space");
        middleID.appendChild(spaceDiv);

        //right half
        const rightHalf = document.createElement("div");
        rightHalf.setAttribute("class", "rightHalf");
        middleID.appendChild(rightHalf);

        const tempDiv = document.createElement("div");
        tempDiv.setAttribute("class", "temp");
        rightHalf.appendChild(tempDiv);

        const currentTemp = document.createElement("h1");
        currentTemp.setAttribute("class", "temperature");
        currentTemp.innerText = `${Math.floor(temp)}\u00B0`;
        const tempSelect = document.querySelector(".temp");
        tempSelect.appendChild(currentTemp);

        const feelsLikeTemp = document.createElement("div");
        feelsLikeTemp.setAttribute("class", "feelslike sm-text");
        feelsLikeTemp.innerText = `(Feels Like: ${Math.floor(
          feelsLike
        )}\u00B0)`;
        rightHalf.appendChild(feelsLikeTemp);


        //footer
        const footer = document.createElement("div");
        footer.setAttribute("class", "footer");
        container.appendChild(footer);


        const humid = document.createElement("div");
        humid.setAttribute("class", "humidity");
        footer.appendChild(humid);

        const humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("class", "humidity sm-text");
        humidityDiv.innerText = `Humidity: ${humidity}\u0025`;
        const humidDiv = document.querySelector(".humidity");
        humidDiv.appendChild(humidityDiv);

        const low = document.createElement("div");
        low.setAttribute("class", "low");
        footer.appendChild(low);

        const lowArrow = document.createElement("div");
        lowArrow.setAttribute("class", "lowArrow bi bi-caret-down-fill");
        const lowDiv = document.querySelector(".low");
        lowDiv.appendChild(lowArrow);

        const tempMinDiv = document.createElement("div");
        tempMinDiv.setAttribute("class", "tempMin sm-text");
        tempMinDiv.innerText = `${Math.floor(tempMin)}\u00B0`;
        lowDiv.appendChild(tempMinDiv);

        const high = document.createElement("div");
        high.setAttribute("class", "high");
        footer.appendChild(high);

        const highArrow = document.createElement("div");
        highArrow.setAttribute("class", "highArrow bi bi-caret-up-fill");
        const highDiv = document.querySelector(".high");
        highDiv.appendChild(highArrow);

        const tempMaxDiv = document.createElement("div");
        tempMaxDiv.setAttribute("class", "tempMax sm-text");
        tempMaxDiv.innerText = `${Math.floor(tempMax)}\u00B0`;
        highDiv.appendChild(tempMaxDiv);


      });
  });
});
