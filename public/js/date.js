

const date = new Date();

const options = {
    weekday: "short",
    day: "numeric",
    month: "short"
}

const currentDate = date.toLocaleDateString("en-US", options);


module.exports = currentDate;