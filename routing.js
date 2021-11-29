let accessToken = 'REDACTED_MAPBOX_TOKEN'
var currentRoute
// currentRoute = L.Routing.control({
//     waypoints: [
//         L.latLng(33.88039098730793,-117.88849353790285),
//         L.latLng(33.88231100528884,-117.88264095783235),
//     ],
//     router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})

// }).addTo(map);
function routeRemove() {
    currentRoute.spliceWaypoints(0,2)
    map.removeLayer(me)
    var legend = document.getElementsByClassName("leaflet-routing-container leaflet-bar leaflet-control")
    legend.item(0).remove()
}
function routeTo(location) {
    if (me.getLatLng().lat == 0 && me.getLatLng().lng == 0)  {
        return
    }
    if (map.hasLayer(me)) {
        switch(location) {
            case "Extension & International Programs (EIP)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanHall._latlng,18)
                break
            case "Alumni Engagement":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Golleher.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Golleher._latlng,18)
                break
            case "Faculty Development Center (FDC)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Golleher.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Golleher._latlng,18)
                break
            case "College of Natural Sci & Math (CNSM)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        McCarthy.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(McCarthy._latlng,18)
                break
            case "This Osher Lifelong Learning Institute course is open to the public and is held in Mackey Auditorium in the Ruby Gerontology Center on the CSUF campus.":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        RubyGerontology.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(RubyGerontology._latlng,18)
                break
            case "Osher Lifelong Learning Institute (OLLI)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        RubyGerontology.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(RubyGerontology._latlng,18)
                break
            case "Theatre (THTR)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        VisualArt.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(VisualArt._latlng,18)
                break
            case "Biological Science (BIOL)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        McCarthy.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(McCarthy._latlng,18)
                break
            case "College of the Arts (COTA)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        VisualArt.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(VisualArt._latlng,18)
                break
            case "Art (ART)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        VisualArt.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(VisualArt._latlng,18)
                break
            case "Come learn and practice research-based strategies for providing efficient, effective feedback on student writing.":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StudentRec.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StudentRec._latlng,18)
                break
            case "College of Hum & Social Sciences (CHSS)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Humanities.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Humanities._latlng,18)
                break
            case "Athletics":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TrackField.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TrackField._latlng,18)
                break
            case "Mathematics (MATH)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        McCarthy.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(McCarthy._latlng,18)
                break
            case "College of Bus & Econ (CBE)":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Mihaylo.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Mihaylo._latlng,18)
                break
            case "School of Music":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        VisualArt.getLatLng(),
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
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StudentRec.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StudentRec._latlng,18)
                break
            case "Lot A":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotA.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotA._latlng,18)
                break
            case "Lot S":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotS.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotS._latlng,18)
                break
            case "Lot G":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotG.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotG._latlng,18)
                break
            case "Titan Stadium":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanStadium.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanStadium._latlng,18)
                break
            case "Goodwin Field":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        GoodwinField.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(GoodwinField._latlng,18)
                break
            case "Anderson Family Field":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        AndersonField.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(AndersonField._latlng,18)
                break
            case "Track and Field":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TrackField.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TrackField._latlng,18)
                break
            case "Lot D":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotD.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotD._latlng,18)
                break
            case "Tennis Court":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TennisCt.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TennisCt._latlng,18)
                break
            case "State College Parking Structure":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StateParking.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StateParking._latlng,18)
                break
            case "Student Recreation Center":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StudentRec.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StudentRec._latlng,18)
                break
            case "Lot R":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotR.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotR._latlng,18)
                break
            case "University Police":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        UnivPolice.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(UnivPolice._latlng,18)
                break
            case "Golleher Alumni House":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Golleher.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Golleher._latlng,18)
                break
            case "Titan Gym":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanGym.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanGym._latlng,18)
                break
            case "Kinesiology and Health Science":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StudentRec.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StudentRec._latlng,18)
                break
            case "Titan Student Union":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanUnion.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanUnion._latlng,18)
                break
            case "Bookstore":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Bookstore.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Bookstore._latlng,18)
                break
            case "Visual Art":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        VisualArt.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(VisualArt._latlng,18)
                break
            case "Student Health and Counseling Center":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        StudentHealth.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(StudentHealth._latlng,18)
                break
            case "Pollak Library":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        PollakLibrary.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(PollakLibrary._latlng,18)
                break
            case "Education Classroom":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EducationClassroom.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EducationClassroom._latlng,18)
                break
            case "McCarthy Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        McCarthy.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(McCarthy._latlng,18)
                break
            case "Clayes Performing Arts Center":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Clayes.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Clayes._latlng,18)
                break
            case "Nutwood Parking Structure":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Nutwood.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Nutwood._latlng,18)
                break
            case "Lot C":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotC.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotC._latlng,18)
                break
            case "Lot C East":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotCE.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotCE._latlng,18)
                break
            case "Dan Black Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        DBH.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(DBH._latlng,18)
                break
            case "Langsdorg Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Langsdorg.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Langsdorg._latlng,18)
                break
            case "Gordon Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Gordon.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Gordon._latlng,18)
                break
            case "Humanities and Social Science":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Humanities.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Humanities._latlng,18)
                break
            case "Titan House":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanHouse.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanHouse._latlng,18)
                break
            case "Titan Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        TitanHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(TitanHall._latlng,18)
                break
            case "Military Complex":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Military.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Military._latlng,18)
                break
            case "College ParkWest":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        CollegeParkWest.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(CollegeParkWest._latlng,18)
                break
            case "Mihaylo-Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Mihaylo.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Mihaylo._latlng,18)
                break
            case "Lot F":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotF.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotF._latlng,18)
                break
            case "Lot I":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotI.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotI._latlng,18)
                break
            case "Eastside Parking Structure":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EastsideParking1.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EastsideParking1._latlng,18)
                break
            case "Eastside Parking Structure 2":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EastsideParking2.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EastsideParking2._latlng,18)
                break
            case "Engineering North West":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EngineeringNW.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EngineeringNW._latlng,18)
                break
            case "Engineering":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Engineering.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Engineering._latlng,18)
                break
            case "Engineering South West":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EngineeringSW.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EngineeringSW._latlng,18)
                break
            case "Engineering South East":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EngineeringSE.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EngineeringSE._latlng,18)
                break
            case "Computer Science":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        CS.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(CS._latlng,18)
                break
            case "Engineering North East":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EngineeringNE.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EngineeringNE._latlng,18)
                break
            case "Ruby Gerontology Center":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        RubyGerontology.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(RubyGerontology._latlng,18)
                break
            case "Lot H":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotH.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotH._latlng,18)
                break
            case "Lot J":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        LotJ.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(LotJ._latlng,18)
                break
            case "Gastronome":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        Gastronome.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(Gastronome._latlng,18)
                break
            case "Pine Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        PineHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(PineHall._latlng,18)
                break
            case "Greenhouse Complex":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        GreenhouseComplex.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(GreenhouseComplex._latlng,18)
                break
            case "Holly Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        HollyHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(HollyHall._latlng,18)
                break
            case "Juniper Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        JuniperHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(JuniperHall._latlng,18)
                break
            case "Resident Hall Parking":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        ResidentHallParking.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(ResidentHallParking._latlng,18)
                break
            case "Fig Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        FigHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(FigHall._latlng,18)
                break
            case "Acacia Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        AcaciaHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(AcaciaHall._latlng,18)
                break
            case "Manzanita Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        MazanitaHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(MazanitaHall._latlng,18)
                break
            case "Oak Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        OakHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(OakHall._latlng,18)
                break
            case "Willow Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        WillowHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(WillowHall._latlng,18)
                break
            case "Elm Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        ElmHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(ElmHall._latlng,18)
                break
            case "Cypress Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        CypressHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(CypressHall._latlng,18)
                break
            case "Sycamore/Valencia Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        SycamoreValencia.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(SycamoreValencia._latlng,18)
                break
            case "Environmental Health and Safety":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        EnvironmentalHealth.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(EnvironmentalHealth._latlng,18)
                break
            case "Arboretum Museum":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        ArboretumMuseum.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(ArboretumMuseum._latlng,18)
                break
            case "Fullerton Arboretum Parking":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        FullertonArboretumParking.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(FullertonArboretumParking._latlng,18)
                break
            case "Birch Hall":
                currentRoute = L.Routing.control({
                    waypoints: [
                        me.getLatLng(),
                        BirchHall.getLatLng(),
                    ],
                    icon: yellowIcon,
                    router: L.Routing.mapbox(accessToken, {profile: 'mapbox/walking'})
    
                }).addTo(map);
                map.flyTo(BirchHall._latlng,18)
                break
        }
        let test = document.getElementById("right-container")
        let legend = document.getElementsByClassName("leaflet-routing-container leaflet-bar leaflet-control")
        test.insertBefore(legend.item(0),test.firstChild)
    }


}

