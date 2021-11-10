let accessToken = 'sk.eyJ1IjoiZGFya2xpZ2h0MXgiLCJhIjoiY2t1dXd0NW40MWlnaTJ3bzZ4cjZ0NHBpeiJ9.jmnkhWYEbxzrC_eMArrdGg'

// L.Routing.control({
//     waypoints: [
//         L.latLng(33.88039098730793,-117.88849353790285),
//         L.latLng(33.88231100528884,-117.88264095783235),
//     ],
//     router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

// }).addTo(map);

function routeTo(location) {
    if (me.getLatLng().lat == 0 && me.getLatLng().lng == 0)  {
        return
    }
    console.log(me.getLatLng().lat)
    switch(location) {
        case "Extension & International Programs (EIP)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(TitanHall.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(TitanHall._latlng,18)
            break
        case "Alumni Engagement":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(Golleher.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(Golleher._latlng,18)
            break
        case "Faculty Development Center (FDC)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(Golleher.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(Golleher._latlng,18)
            break
        case "College of Natural Sci & Math (CNSM)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(McCarthy.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(McCarthy._latlng,18)
            break
        case "This Osher Lifelong Learning Institute course is open to the public and is held in Mackey Auditorium in the Ruby Gerontology Center on the CSUF campus.":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(RubyGerontology.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(RubyGerontology._latlng,18)
            break
        case "Osher Lifelong Learning Institute (OLLI)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(RubyGerontology.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(RubyGerontology._latlng,18)
            break
        case "Theatre (THTR)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(VisualArt.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(VisualArt._latlng,18)
            break
        case "Biological Science (BIOL)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(McCarthy.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(McCarthy._latlng,18)
            break
        case "College of the Arts (COTA)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(VisualArt.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(VisualArt._latlng,18)
            break
        case "Art (ART)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(VisualArt.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(VisualArt._latlng,18)
            break
        case "Come learn and practice research-based strategies for providing efficient, effective feedback on student writing.":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(StudentRec.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(StudentRec._latlng,18)
            break
        case "College of Hum & Social Sciences (CHSS)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(Humanities.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(Humanities._latlng,18)
            break
        case "Athletics":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(TrackField.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(TrackField._latlng,18)
            break
        case "Mathematics (MATH)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(McCarthy.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(McCarthy._latlng,18)
            break
        case "College of Bus & Econ (CBE)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(Mihaylo.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(Mihaylo._latlng,18)
            break
        case "School of Music":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(VisualArt.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(VisualArt._latlng,18)
            break
        case "Xpath Error":
            console.log("error")
            break
        case "Division of Academic Affairs (VPAA)":
            L.Routing.control({
                waypoints: [
                    me.getLatLng(),
                    L.latLng(StudentRec.getLatLng()),
                ],
                icon: yellowIcon,
                router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

            }).addTo(map);
            map.flyTo(StudentRec._latlng,18)
            break
    }
}

