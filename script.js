async function getWeather() {
  const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/paris?key=DRYKFVEYKQSZTNND2L3L2TKAF'

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    const location = data.address
    const today = data.days[0]

    console.log(`📍 Location: ${location}`)
    console.log(`🌡️ Temperature: ${today.temp}°C`)
    console.log(`🤒 Feels Like: ${today.feelslike}°C`)
    console.log(`🌧️ Precipitation Probability: ${today.precipprob}%`)
    console.log(`⛅ Conditions: ${today.conditions}`)
    console.log(`🖼️ Icon: ${today.icon}`)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

// Call the function
getWeather()
