require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const _ = require("lodash");
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
    res.render("result", {weatherDetails: weatherInfo});
});


app.post("/", async(req, res, next) => {
    const city = req.body.cityInput;
    const url = process.env.API_URL + 'q=' + city + "&units=metric"  + '&appid=' + process.env.API_KEY;

    try {
        let results = await axios.get(url)

        weatherInfo = {
            location: {
                coord: {
                    lon: results.data.coord.lon,
                    lat: results.data.coord.lat
                },
                country: results.data.sys.country,
                city: results.data.name
            },
            weather: {
                main: results.data.weather[0].main,
                desc: _.startCase(results.data.weather[0].description),
                icon: `http://openweathermap.org/img/wn/${results.data.weather[0].icon}@2x.png`,
            },
            main: {
                temp: _.round(results.data.main.temp),
                humidity: `${results.data.main.humidity}%`,
                wind: {
                    speed: results.data.wind.speed,
                }
            }
        }

        res.redirect("/results");
    } catch(err) {
        next(err);
    }

});

app.use((err, req, res, next) => {
    console.log(err)
    if (err.response.status) {
        res.render("error", {error: err.response.status});
    } else {
        res.render("error");
    }
   
});

app.listen(port, () => {
    console.log("Howdy from port 3000! 🤠");
});