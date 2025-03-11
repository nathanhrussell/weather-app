function capitaliseFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

async function getWeather() {
  const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/paris?key=DRYKFVEYKQSZTNND2L3L2TKAF'

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    const location = capitaliseFirstLetter(data.address)
    const today = data.days[0]
    const temperature = ((today.temp - 32) * 5) / 9
    const feelsLike = ((today.feelslike - 32) * 5) / 9

    console.log(`📍 Location: ${location}`)
    console.log(`🌡️ Temperature: ${temperature}°C`)
    console.log(`🤒 Feels Like: ${feelsLike}°C`)
    console.log(`🌧️ Precipitation Probability: ${today.precipprob}%`)
    console.log(`⛅ Conditions: ${today.conditions}`)
    console.log(`🖼️ Icon: ${today.icon}`)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

// Call the function
getWeather()
