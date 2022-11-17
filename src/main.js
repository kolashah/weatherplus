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

        const weather = document.createElement("h2");
        weather.setAttribute("id", "currentWeather");
        weather.innerText = description;
        document.querySelector("body").appendChild(weather);

        const currentTemp = document.createElement("h1");
        currentTemp.setAttribute("id", "temperature");
        currentTemp.innerText = `Current Temp: ${temp}\u00B0`;
        document.querySelector("body").appendChild(currentTemp);

        const weatherIcon = document.createElement("img");
        weatherIcon.setAttribute("id", "icon");
        weatherIcon.setAttribute("src", imageURL);
        weatherIcon.innerText = icon;
        document.querySelector("body").appendChild(weatherIcon);

        const feelsLikeTemp = document.createElement("div");
        feelsLikeTemp.setAttribute("class", "feelslike sm-text");
        feelsLikeTemp.innerText = `Feels Like: ${feelsLike}\u00B0`;
        document.querySelector("body").appendChild(feelsLikeTemp);

        const tempMinDiv = document.createElement("div");
        tempMinDiv.setAttribute("class", "tempMin sm-text");
        tempMinDiv.innerText = `Low: ${tempMin}\u00B0`;
        document.querySelector("body").appendChild(tempMinDiv);

        const tempMaxDiv = document.createElement("div");
        tempMaxDiv.setAttribute("class", "tempMax sm-text");
        tempMaxDiv.innerText = `High: ${tempMax}\u00B0`;
        document.querySelector("body").appendChild(tempMaxDiv);

        const humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("class", "humidity sm-text");
        humidityDiv.innerText = `Humidity: ${humidity}`;
        document.querySelector("body").appendChild(humidityDiv);
      });
  });
});

// weather.innerHTML

//  res.write("<p>The weather is currently " + description + "<p>");
//  res.write(
//    "<h1>The temperature in " + query + " is " + temp + " degrees.</h1>"
//  );
//  res.write("<img src=" + imageURL + ">");
//  res.send();

// app.post("/", function (req, res) {
//   const query = req.body.cityName;
//   const apiKey = "d4c55138bbca34363a7498b9f44c7c5d";
//   const units = "imperial";
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     query +
//     "&appid=" +
//     apiKey +
//     "&units=" +
//     units;
//   https.get(url, function (response) {
//     console.log(response.statusCode);

//     response.on("data", function (data) {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const description = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//       res.write("<p>The weather is currently " + description + "<p>");
//       res.write(
//         "<h1>The temperature in " + query + " is " + temp + " degrees.</h1>"
//       );
//       res.write("<img src=" + imageURL + ">");
//       res.send();
//     });
//   });
// });
