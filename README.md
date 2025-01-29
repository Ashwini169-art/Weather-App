# Weather-App
1. HTML Structure:
The page contains a search box where users can input a city name.
After entering the city and clicking the search button (magnifying glass icon), it will display weather details like temperature, description, humidity, and wind speed.
An image representing the weather condition (cloudy, clear, rain, snow, etc.) is shown.
2. CSS Styling:
The page uses simple styling to create a neat and responsive weather card layout.
There are various styles for the search box, weather image, and details such as temperature, humidity, and wind speed.
3. JavaScript Functionality:
The script fetches weather data from the OpenWeatherMap API.
When the user clicks the search button, it makes an asynchronous request to get weather data for the city entered.
The weather information (temperature, description, humidity, wind speed) is displayed dynamically in the designated sections.
The weather image updates based on the weather conditions, like clear skies or rain.
The script uses the fetch() API to get data and async/await for handling asynchronous calls.
4. Key Features:
Weather data is fetched dynamically from OpenWeatherMap's API.
Weather icons change based on the weather description.
The UI updates with the temperature (converted from Kelvin to Celsius), description of weather, humidity, and wind speed.
5. Flow of the Application:
User Input: The user enters a city name in the search box.
Weather Fetch: On clicking the search button, an API request is sent to OpenWeatherMap to fetch the weather details for that city.
Display Results: The UI is updated with the fetched data, including temperature, weather description, humidity, and wind speed.
This app is a simple example of how to interact with weather APIs to build a dynamic and functional weather application.



