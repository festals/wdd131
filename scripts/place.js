const temp = document.querySelector("#temperature");
const condit = document.querySelector("#condition");
const wind = document.querySelector("#wind");
const windchill = document.querySelector("#windchill");

const temperature = 30;
const condition = "Sunny";
const windSpeed = 9;

function calculateWindChild(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
}

temp.textContent = temperature;
condit.textContent = condition;
wind.textContent = windSpeed;

if (temperature <= 10 && windSpeed > 4.8) {
    windchill.textContent = `${calculateWindChild(temperature, windSpeed)} km/h`;
}
else {
    windchill.textContent = "N/A";
}