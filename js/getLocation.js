// Get references to HTML elements we need
const locationIcon = document.querySelector('.Icon');
// We use form, input, and msg from script.js

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
    // First, check if the browser supports geolocation
    if (!navigator.geolocation) {
        msg.textContent = "Your browser doesn't support location services";
        return;
    }

    // Show a loading message
    msg.textContent = "Getting your location...";
    
    // Options for getting the location
    const options = {
        enableHighAccuracy: true,  // Get the best possible location
        timeout: 5000,            // Wait up to 5 seconds
        maximumAge: 0             // Always get a fresh location
    };

    // Success handler - what to do when we get the location
    const handleSuccess = async (position) => {
        const { latitude, longitude } = position.coords;
        const cityName = await getCityFromCoords(latitude, longitude);
        
        // Put the city name in the search box
        input.value = cityName;
        
        // Automatically search for the weather
        const submitEvent = new Event('submit');
        form.dispatchEvent(submitEvent);
    };

    // Error handler - what to do if something goes wrong
    const handleError = (error) => {
        let errorMessage = "Couldn't get your location";
        
        if (error.code === error.PERMISSION_DENIED) {
            errorMessage = "Please allow location access to use this feature";
        }
        
        msg.textContent = errorMessage;
    };

    // Start getting the location
    navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError,
        options
    );
});