const apiKey = "DRYKFVEYKQSZTNND2L3L2TKAF";

function capitaliseFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const iconMap = {
  "clear-day": "01d",
  "clear-night": "01n",
  "cloudy": "03d",
  "partly-cloudy-day": "02d",
  "partly-cloudy-night": "02n",
  "rain": "09d",
  "showers-day": "10d",
  "showers-night": "10n",
  "snow": "13d",
  "thunderstorm": "11d",
  "fog": "50d"
};

const descriptionMap = {
  "clear-day": "It's a clear day",
  "clear-night": "It's a clear night",
  "cloudy": "It's cloudy right now",
  "partly-cloudy-day": "It's a partly cloudy day",
  "partly-cloudy-night": "It's a partly cloudy night",
  "rain": "It's raining right now",
  "showers-day": "There are some showers today",
  "showers-night": "There are some showers tonight",
  "snow": "It's currently snowing",
  "thunderstorm": "There are currently thunderstorms",
  "fog": "It's foggy right now"
};

async function getWeather(location) {
  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const location = capitaliseFirstLetter(data.address);
    const today = data.days[0];
    const temperature = Math.round(((today.temp - 32) * 5) / 9);
    const feelsLike = Math.round(((today.feelslike - 32) * 5) / 9);
    const description = descriptionMap[today.icon]

    document.getElementById("location").textContent = location;
    document.getElementById("description").textContent = description;
    document.getElementById("temperature").textContent = temperature;
    document.getElementById("feels-like").textContent = feelsLike;
    document.getElementById("precip").textContent = today.precipprob;
    document.getElementById("conditions").textContent = today.conditions;
    



    const icon = iconMap[today.icon] || "01d";
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-card").innerHTML =
      "<p>Failed to load weather data.</p>";
  }
}

function handleSearch(event) {
  if (event.key === "Enter") {
    const location = event.target.value.trim();
    if (location) {
      getWeather(location);
      event.target.value = "";
    }
  }
}

document.querySelector(".search-container input").addEventListener("keypress", handleSearch);

// Call the function
getWeather("London");
