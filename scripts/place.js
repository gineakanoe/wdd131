let chill = document.querySelector("#windchill");

const temperature = 60;
const windSpeed = 1;

function calculateWindChill() {
    let windChill = 35.75 + 0.6215 * temperature - 35.75 * (windSpeed ^ 0.16) + 0.4575 * temperature * (windSpeed ^ 0.16);

    if (temperature <= 50 && windSpeed > 3) {
        console.log(windChill);
        chill.innerHTML = windchill;
    }
    else {
        console.log("N/A");
        chill.innerHTML = "N/A";
    }
}

calculateWindChill();
