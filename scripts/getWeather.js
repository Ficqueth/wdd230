const weatherSection = document.querySelector('#weather-section');
const currentWeatherContainer = document.querySelector('#current-weather');
const forecastContainer = document.querySelector('#forecast-days');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=38.85&lon=-91.95&appid=4188bb235b1ca1fae6c2493e752ce07e&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);  // Display both current weather and forecast in one function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    // Current weather (today)
    const current = data.list[0]; // The first entry is today's weather
    const currentWeatherHTML = `
        <div class="weather-item">
            <strong>Today: </strong>${Math.round(current.main.temp)}&deg;F ${current.weather[0].description}
            <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" alt="${current.weather[0].description}">
        </div>
    `;

    // Forecast for the next 2 days (excluding today)
    let forecastHTML = "";
    let dayCount = 0;
    const forecastDays = [];

    data.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const time = date.getHours();

        // Only consider forecast data from 12:00 PM and after today (start from the next day)
        if (time === 12 && dayCount < 2) {
            forecastDays.push({
                day: day,
                temp: Math.round(entry.main.temp), // Round the forecast temperature to an integer
                description: entry.weather[0].description,
                icon: entry.weather[0].icon
            });
            dayCount++;
        }

        // Stop after we've fetched 2 days of forecast
        if (dayCount >= 2) return;
    });

    // Ensure forecastDays has 2 items, even if data is incomplete
    if (forecastDays.length < 2) {
        forecastDays.push({
            day: "No data available",
            temp: "N/A",
            description: "Unavailable",
            icon: "01d" // Default icon
        });
    }

    // Generate HTML for the forecast with consistent method for temperature, description, and icon
    forecastDays.forEach(forecast => {
        const forecastIconSrc = `https://openweathermap.org/img/w/${forecast.icon}.png`;

        forecastHTML += `
            <div class="weather-item">
                <strong>${forecast.day}:</strong> 
                ${forecast.temp}&deg;F ${forecast.description}
                <img src="${forecastIconSrc}" alt="${forecast.description}">
            </div>
        `;
    });

    // Append both current weather and forecast HTML to the weather-info div
    document.querySelector('#weather-info').innerHTML = currentWeatherHTML + forecastHTML;
}




apiFetch();
