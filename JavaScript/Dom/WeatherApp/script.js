const API_KEY = "4202289f4e7913dbb1d50d03218a37bf";

document
  .getElementById("weather-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.getElementById("city-input").value.trim();
    if (!city) return;

    const resultDiv = document.getElementById("weather-result");
    resultDiv.innerHTML = "Loading...";

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const cityName = data.name;

      resultDiv.innerHTML = `
      <strong>${cityName}</strong><br>
      Temperature: ${temp}°C<br>
      Condition: ${desc}
    `;
    } catch (err) {
      resultDiv.innerHTML = "❌ Error: " + err.message;
    }
  });
