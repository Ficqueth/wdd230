const weatherInfo = document.querySelector('.weather-card');

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=38.58&lon=-92.18&appid=4188bb235b1ca1fae6c2493e752ce07e&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);  // Display both current weather and forecast
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    // Current weather (today)
    const current = data.list[0]; // First entry is today's weather
    const currentWeatherHTML = `
        <div class="weather-item">
            <strong>Today: </strong>${Math.round(current.main.temp)}°F, ${current.weather[0].description}
            <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" alt="${current.weather[0].description}">
        </div>
    `;

    // Forecast for the next 2 days
    let forecastHTML = "";
    let dayCount = 0;
    const forecastDays = [];

    data.list.forEach((entry) => {
        const date = new Date(entry.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        const time = date.getHours();

        // Only take forecasts at 12:00 PM for the next two days
        if (time === 12 && dayCount < 3) {
            forecastDays.push({
                day: day,
                temp: Math.round(entry.main.temp),
                description: entry.weather[0].description,
                icon: entry.weather[0].icon
            });
            dayCount++;
        }
    });

    // Generate HTML for the forecast
    forecastDays.forEach(forecast => {
        forecastHTML += `
            <div class="weather-item">
                <strong>${forecast.day}:</strong> 
                ${forecast.temp}°F, ${forecast.description}
                <img src="https://openweathermap.org/img/w/${forecast.icon}.png" alt="${forecast.description}">
            </div>
        `;
    });

    // Insert data into the weather-info div
    weatherInfo.innerHTML = currentWeatherHTML + forecastHTML;
}

// Fetch weather data on page load
apiFetch();
