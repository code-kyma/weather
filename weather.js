const cityInput = document.getElementById('city-input');
const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = cityInput.value.trim();
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    fetch(`https://wttr.in/${city}?format=j1`)
        .then(async (response) => {
            const json = await response.json()
            console.warn(json)
            if (!response.ok) {
                alert('Please write the correct name of the city.')
                return;
            }
            document.getElementById('city-name').innerText = json.nearest_area[0].areaName[0].value;
            document.getElementById('temperature').innerText = `Temp: ${json.weather[0].hourly[0].tempC}°C`;
            document.getElementById('description').innerText = json.weather[0].hourly[0].weatherDesc[0].value;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error(error);
        });
});








































