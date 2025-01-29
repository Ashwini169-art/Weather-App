const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "c50901fa706f7d5150c3976f8bd23c41";
    // Correct usage of template literals
    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;



    const weather_data = await fetch(url)
        .then(response => response.json());  

        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed} km/h`;

        switch(weather_data.weather[0].main) {
            case 'Clouds':
                weather_img.src = "assets/Cloud.png";  // Use relative path
                break;
            case 'Clear':
                weather_img.src = "assets/Clear.png";  // Use relative path
                break;
            case 'Rain':
                weather_img.src = "assets/Rain.png";  // Use relative path
                break;
            case 'Mist':
                weather_img.src = "assets/Mist.png";  // Use relative path
                break;
            case 'Snow':
                weather_img.src = "assets/Snow.png";  // Use relative path
                break;
        }
        
        console.log(weather_data);

}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});