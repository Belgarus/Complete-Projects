// Get references to HTML elements we need
const locationIcon = document.querySelector('.Icon');
// Using msg from script.js

// This function gets the city name from latitude and longitude
async function getCityFromCoords(latitude, longitude) {
    // Using OpenStreetMap's free service to convert coordinates to a city name
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Try to find a city name from different possible fields
        const city = data.address.city || 
                    data.address.town || 
                    data.address.village || 
                    data.address.suburb;
        
        return city || 'Unknown location';
    } catch (error) {
        return 'Unknown location';
    }
}

// What happens when someone clicks the location icon
locationIcon.addEventListener('click', () => {
    if (!navigator.geolocation) {
        msg.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    msg.textContent = "Getting your location...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            const event = new CustomEvent('coordsFound', {
                detail: { latitude, longitude }
            });
            window.dispatchEvent(event);
        },
        (error) => {
            msg.textContent = `Error: ${error.message}`;
        }
    );
});