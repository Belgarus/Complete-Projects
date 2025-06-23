import { nearestCity } from 'cityjs';

const locationIcon = document.querySelector('.Icon');
const msg = document.querySelector("form.top-banner .msg");

locationIcon.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        // Show loading message
        msg.textContent = "Getting your location...";
        
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            
            try {
                const cityData = nearestCity({ latitude, longitude });
                
                // Use the existing form input to trigger a weather search for the found city
                const input = document.querySelector("form.top-banner input");
                input.value = cityData.name;
                
                // Trigger form submission
                const form = document.querySelector("form.top-banner");
                const submitEvent = new Event('submit');
                form.dispatchEvent(submitEvent);
                
            } catch (error) {
                msg.textContent = "Couldn't find a city near your location.";
                console.error('Error finding nearest city:', error);
            }
        }, error => {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    msg.textContent = "Please allow location access to use this feature.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    msg.textContent = "Location information unavailable.";
                    break;
                case error.TIMEOUT:
                    msg.textContent = "Location request timed out.";
                    break;
                default:
                    msg.textContent = "An error occurred while getting your location.";
            }
            console.error('Geolocation error:', error);
        });
    } else {
        msg.textContent = "Geolocation is not supported by your browser.";
    }
});