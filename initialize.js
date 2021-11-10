var bounds = [[33.888679, -117.890171], [33.87825913, -117.88084]];
var map = L.map('map', {
center: [33.88041653, -117.88490707],
zoom:17
// minZoom:17,
// maxZoom: 19     
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
  
// map.setMaxBounds(bounds)
var buttonpressed = false

var me = L.marker([0,0], {draggable: true}).addTo(map)
me.setIcon(yellowIcon)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function buttonClicked() {
    buttonpressed = true
}

map.on('click', function(e){
var coord = e.latlng;
var lat = coord.lat;
var lng = coord.lng;
console.log(`L.marker([${lat},${lng}]).addTo(map)`);
buttonpressed = false
});

map.on('mousehover', function(create){
    if(buttonpressed)
        me.setLatLng(create.setLatLng)

})

map.on('mousemove', function(follow){
    if(buttonpressed)
        me.setLatLng(follow.latlng)
})

//Live Tracking Implementation
// setInterval(() => {
//     navigator.geolocation.getCurrentPosition(getPosition)
// }, 500)


function getPosition(position){
    var location
        if(location){
        map.removeLayer(lockMark)
        }
    var curLat = position.coords.latitude
    var curLong = position.coords.longitude
    console.log("Your current location is " + curLat + ", " + curLong)
    location = L.marker([curLat,curLong]).addTo(map)
 
}
