// script.js
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationElement = document.querySelector('#location');
    locationElement.innerHTML = `Latitude: ${latitude}; Longitude: ${longitude};`
  
    // Send the location to your server for further processing
    sendLocationToServer({ latitude, longitude });
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  
  function sendLocationToServer(location) {
    // Implement logic to send the location data to your server
    // You can use AJAX, Fetch API, or any other suitable method
    // Example using Fetch API:
    fetch('/api/save-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(location),
    })
    .then(response => response.json())
    .then(data => console.log('Location sent to server:', data))
    .catch(error => console.error('Error sending location:', error));
  }