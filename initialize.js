
//initialize the Leaflet map with some setting
var map = L.map('map', {
    center: [33.88041653, -117.88490707],
    zoom: 17  
});

//used for the from "from waypoint" button. 
var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//change the waypoint color to indicate the building have been located.
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//used to reset the green marker color back to blue
var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//graphical look for the map overlay
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var buttonPressed = false

var me = L.marker([0, 0], { draggable: true })
me.setIcon(yellowIcon)

//function to indicate that the "From waypoint" button has been pressed
function buttonClicked() {
    me.addTo(map)
    buttonPressed = true
}

//marker follow the cursor
map.on('mousemove', function (follow) {
    if (buttonPressed)
        me.setLatLng(follow.latlng)
})

//help make the marker stop following the cursor
map.on('click', function (e) {
    buttonPressed = false
});


//Live Tracking Implementation
// setInterval(() => {
//     navigator.geolocation.getCurrentPosition(getPosition)
// }, 500)

//used to help set the marker
// function getPosition(position) {
//     var location
//     if (location) {
//         map.removeLayer(lockMark)
//     }
//     var curLat = position.coords.latitude
//     var curLong = position.coords.longitude
//     console.log("Your current location is " + curLat + ", " + curLong)
//     location = L.marker([curLat, curLong]).addTo(map)

// }
