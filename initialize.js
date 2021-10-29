var bounds = [[33.888679, -117.890171], [33.87825913, -117.88084]];
var map = L.map('map', {
center: [33.88041653, -117.88490707],
zoom:17,
minZoom:17,
maxZoom: 19     
});

// map.setMaxBounds(bounds)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('click', function(e){
var coord = e.latlng;
var lat = coord.lat;
var lng = coord.lng;
console.log(`L.marker([${lat},${lng}]).addTo(map)`);
});