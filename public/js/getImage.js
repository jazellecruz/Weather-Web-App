

const [clouds, clear, thunderstorm, rain, tornado, snow, haze, sand, smoke, fog, defaultImg] = [
    {
        imgSrc: "https://cdn.dribbble.com/users/1869172/screenshots/5579967/media/b9eb55014cc221c0356c8dee45154f9d.png",
        artName: "Mountains",
        artist: "VIDOR",
        artistLink: "https://dribbble.com/VIDOR",
        imgLink: "https://dribbble.com/shots/5579967-Mountain"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/1869172/screenshots/14714316/media/60ae6f4b1773f42d2aab110a5ba36707.png",
        artName: "Spirited Away Chapter 4",
        artist: "VIDOR",
        artistLink: "https://dribbble.com/VIDOR",
        imgLink: "https://dribbble.com/shots/14714316-Spirited-Away-Chapter-4/attachments/6414191?mode=media"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/518045/screenshots/11604863/media/c6e2755cd5a30fecda85c2171b34b342.png",
        artName: "Thunderstorm",
        artist: "Andrey Prokopenko",
        artistLink: "https://dribbble.com/Pro_Art",
        imgLink: "https://dribbble.com/shots/11604863-Thunderstorm"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/3320958/screenshots/15461952/media/810043b7a5c52744b9ae49aec7216cb3.jpeg",
        artName: "Rainy Day",
        artist: "Lee Art",
        artistLink: "https://dribbble.com/leelena",
        imgLink: "https://dribbble.com/shots/15461952-Rainy-day"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/2800634/screenshots/5798236/media/45de4859c35da927d886c14bce64ec32.png?compress=1&resize=800x600&vertical=top",
        artName: "Tornadoes",
        artist: "Tom Clohosy Cole",
        artistLink: "https://dribbble.com/tomclohosycole",
        imgLink: "https://dribbble.com/shots/5798236-Tornadoes"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/1869172/screenshots/15264630/media/d38b8f4afce15c2c9e4226df84ea849a.png?compress=1&resize=1000x750&vertical=top",
        artName: "COOL",
        artist: "VIDOR",
        artistLink: "https://dribbble.com/VIDOR",
        imgLink: "https://dribbble.com/shots/15264630-COOL"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/1007181/screenshots/3728723/media/6cb84e213d3e1561b6d1d302fbf97556.jpg",
        artName: "Purple haze",
        artist: "Camille Magnan",
        artistLink: "https://dribbble.com/camillemagnan",
        imgLink: "https://dribbble.com/shots/3728723-Purple-haze/attachments/9987167?mode=media"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/1869172/screenshots/5590830/media/a73b79c29e2ae977efd2e162b82a8244.png",
        artName: "Very Warm",
        artist: "VIDOR",
        artistLink: "https://dribbble.com/VIDOR",
        imgLink: "https://dribbble.com/shots/5590830-Very-Warm/attachments/10950508?mode=media"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/288987/screenshots/2697142/media/56bbc4266cd7becdce11b020e4365e25.png",
        artName: "The poet",
        artist: "Jona Dinges",
        artistLink: "https://dribbble.com/jonadinges",
        imgLink: "https://dribbble.com/shots/2697142-The-poet"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/922169/screenshots/7053600/media/8f88a0766aee9392aae7cf78d51bbe04.png?compress=1&resize=1000x750&vertical=top",
        artName: "Foggy Landscape",
        artist: "asia babulewicz",
        artistLink: "https://dribbble.com/asiababulewicz",
        imgLink: "https://dribbble.com/shots/7053600-Foggy-landscape"
    },
    {
        imgSrc: "https://cdn.dribbble.com/users/250507/screenshots/12908967/media/9103806132ddcb396e1db849cbe0fe94.jpg?compress=1&resize=1000x750&vertical=top",
        artName: "Textured Landscape 4",
        artist: "Brad Hansen",
        artistLink: "https://dribbble.com/bradhansen",
        imgLink: "https://dribbble.com/shots/12908967-Textured-Landscape-4"
    }
];

/* The weather argument passed onto this function will be converted from string to a variable name. 
Such action is necessary to find its matching object containing the image data. */
const getImgSrc = (weatherData) => {

    let image;
    const data = weatherData.toLowerCase();

    if (data === "rain" || data === "drizzle") {
        image = eval(rain);
    } else if (data === "dust" || data === "sand"){
        image = eval(sand);
    } else if(data === "ash" || data === "squall") {
        image = defaultImg;
    } else if (data === "fog" || data === "mist") {
        image = eval(fog);
    } else {
        image = eval(data);
    }

    return image;
}


module.exports = { getImgSrc };
