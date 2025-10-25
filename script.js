async function getWeather() {
  const city = document.getElementById('city').value;
  const resultDiv = document.getElementById('result');

  if (!city) {
    resultDiv.innerText = "Please enter a city name!";
    return;
  }

  const apiKey = "0f9cf8e30a4dbcb57fc9ce3dc45fe4b2"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 ${data.main.temp} °C</p>
        <p>🌤 ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      resultDiv.innerText = "City not found!";
    }
  } catch (err) {
    resultDiv.innerText = "Error fetching weather!";
  }
}
