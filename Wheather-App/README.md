# Weather App 🌤️

A minimalistic weather app built with **vanilla JavaScript** that shows real-time weather data for any city. Features both manual city search and automatic location detection.

### Features

* 🌍 Real-time weather data from OpenWeatherMap API
* 📍 Automatic location detection using browser's Geolocation API
* 🔍 Manual city search with country code support
* 📱 Responsive and flexible layout
* ☁️ Simple and clean design using JavaScript and CSS

### Getting Started

1. Clone this repository
2. Start a local server in the project directory:
   ```bash
   # Using Python (recommended for development)
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

   For the location detection feature to work, you'll need HTTPS. Options:
   - Enable insecure origins in Chrome:
     1. Go to `chrome://flags/#unsafely-treat-insecure-origin-as-secure`
     2. Add `http://localhost:8000`
     3. Enable the flag and restart Chrome
   - Or use a development server with HTTPS support (like VS Code's Live Server)

### How to Use

* 🔍 **Search by City**: Enter a city name in the search box (add country code for more precise results, e.g., "London, UK")
* 📍 **Use Current Location**: Click the location icon at the bottom of the page to get weather for your current position
* 🌡️ **Multiple Cities**: Search for multiple cities to compare their weather

### Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/d1170963-d16b-4675-98f8-c0da8c99d68b" alt="WeatherApp Wide" width="60%" style="margin-right: 10px;"/>
  <img src="https://github.com/user-attachments/assets/620ccbf7-8553-4312-809a-3be5c07483e5" alt="WeatherApp Long" width="25%"/>
</p>
