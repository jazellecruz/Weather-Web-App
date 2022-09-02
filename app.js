// jshint esversion6

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const string = require("lodash/string");
const { getImgSrc } = require("./public/js/getImage");
const currentDate = require("./public/js/date");
const port = process.env.PORT || 3000;

const app = express();

let weatherInfo;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {
    res.render("home", {result: weatherInfo});
});

app.get("/results", (req, res) => {

    if (res.statusCode !== "404") {
        res.render("result", {
            weatherDetails: weatherInfo,
            currentDate: currentDate
        });
    } else {
        res.status(404).render("error");
    }
    
});

app.get("/developers-note", (req, res) => {
    res.render("note");
});

app.post("/", (req, res) => {
    const city = req.body.cityInput;
    const url = process.env.API_URL + 'q=' + city + '&appid=' + process.env.API_KEY + "&units=metric";

    https.get(url, (response) => {
        response.on("data", (data, err) => {
            const weatherData = JSON.parse(data);
            const results = {
                weather: string.startCase(weatherData.weather[0].description),
                weatherIcon: "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png",
                /* getImgSrc() will take the weather's main parameter and return its corresponding weather image.
                 See https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2 for weather conditions guide. */
                weatherImgSrc: getImgSrc(weatherData.weather[0].main),
                temp: Math.round(weatherData.main.temp),
                feelsLike: weatherData.main.feels_like,
                minTemp: Math.round(weatherData.main.temp_min),
                maxTemp: Math.round(weatherData.main.temp_max),
                humidity: weatherData.main.humidity,
                visibility: weatherData.visibility,
                windSpeed: weatherData.wind.speed,
                windDeg: weatherData.wind.deg,
                country: weatherData.sys.country,
                city: weatherData.name
            }
            weatherInfo = results;
            res.redirect("/results");
        });

    });

});

app.listen(port, () => {
    console.log("SERVER IS RUNNING ON PORT 3000.");
});