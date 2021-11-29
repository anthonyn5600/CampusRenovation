function eventClick(event) {
    // console.log(event.srcElement.innerHTML)
    let panel = event.srcElement.textContent
    let located = ''
    for (let i = 0; i < event_location.length; i++) {
        if(panel.includes(event_location[i])) {
            located = event_location[i]
        }
    }
    zoomtoWaypoint(located)
}

function buildingClick(name) {
     zoomtoWaypoint(name)
}
function zoomtoWaypoint(site) {
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    
    switch(site) {
        case "Extension & International Programs (EIP)":
            map.flyTo(TitanHall._latlng,18)
            TitanHall.setIcon(greenIcon)
            break
        case "Alumni Engagement":
            map.flyTo(Golleher._latlng,18)
            Golleher.setIcon(greenIcon)
            break
        case "Faculty Development Center (FDC)":
            map.flyTo(Golleher._latlng,18)
            Golleher.setIcon(greenIcon)
            break
        case "College of Natural Sci & Math (CNSM)":
            map.flyTo(McCarthy._latlng,18)
            McCarthy.setIcon(greenIcon)
            break
        case "This Osher Lifelong Learning Institute course is open to the public and is held in Mackey Auditorium in the Ruby Gerontology Center on the CSUF campus.":
            map.flyTo(RubyGerontology._latlng,18)
            RubyGerontology.setIcon(greenIcon)
            break
        case "Osher Lifelong Learning Institute (OLLI)":
            map.flyTo(RubyGerontology._latlng,18)
            RubyGerontology.setIcon(greenIcon)
            break
        case "Theatre (THTR)":
            map.flyTo(VisualArt._latlng,18)
            VisualArt.setIcon(greenIcon)
            break
        case "Biological Science (BIOL)":
            map.flyTo(McCarthy._latlng,18)
            McCarthy.setIcon(greenIcon)
            break
        case "College of the Arts (COTA)":
            map.flyTo(VisualArt._latlng,18)
            VisualArt.setIcon(greenIcon)
            break
        case "Art (ART)":
            map.flyTo(VisualArt._latlng,18)
            VisualArt.setIcon(greenIcon)
            break
        case "Come learn and practice research-based strategies for providing efficient, effective feedback on student writing.":
            map.flyTo(StudentRec._latlng,18)
            StudentRec.setIcon(greenIcon)
            break
        case "College of Hum & Social Sciences (CHSS)":
            map.flyTo(Humanities._latlng,18)
            Humanities.setIcon(greenIcon)
            break
        case "Athletics":
            map.flyTo(TrackField._latlng,18)
            TrackField.setIcon(greenIcon)
            break
        case "Mathematics (MATH)":
            map.flyTo(McCarthy._latlng,18)
            McCarthy.setIcon(greenIcon)
            break
        case "College of Bus & Econ (CBE)":
            map.flyTo(Mihaylo._latlng,18)
            Mihaylo.setIcon(greenIcon)
            break
        case "School of Music":
            map.flyTo(VisualArt._latlng,18)
            VisualArt.setIcon(greenIcon)
            break
        case "Xpath Error":
            console.log("error")
            break
        case "Division of Academic Affairs (VPAA)":
            map.flyTo(StudentRec._latlng,18)
            StudentRec.setIcon(greenIcon)
            break
        case "Lot A":
            map.flyTo(LotA._latlng,18)
            LotA.setStyle({color: "#00FF00", fillColor:"#00FF00"})
            break
        case "Lot S":
            map.flyTo(LotS._latlng,18)
            LotS.setIcon(greenIcon)
            break
        case "Lot G":
            map.flyTo(LotG._latlng,18)
            LotG.setIcon(greenIcon)
            break
        case "Titan Stadium":
            map.flyTo(TitanStadium._latlng,18)
            TitanStadium.setIcon(greenIcon)
            break
        case "Goodwin Field":
            map.flyTo(GoodwinField._latlng,18)
            GoodwinField.setIcon(greenIcon)
            break
        case "Anderson Family Field":
            map.flyTo(AndersonField._latlng,18)
            AndersonField.setIcon(greenIcon)
            break
        case "Track and Field":
            map.flyTo(TrackField._latlng,18)
            TrackField.setIcon(greenIcon)
            break
        case "Lot D":
            map.flyTo(LotD._latlng,18)
            LotD.setIcon(greenIcon)
            break
        case "Tennis Court":
            map.flyTo(TennisCt._latlng,18)
            TennisCt.setIcon(greenIcon)
            break
        case "State College Parking Structure":
            map.flyTo(StateParking._latlng,18)
            StateParking.setIcon(greenIcon)
            break
        case "Student Recreation Center":
            map.flyTo(StudentRec._latlng,18)
            StudentRec.setIcon(greenIcon)
            break
        case "Lot R":
            map.flyTo(LotR._latlng,18)
            LotR.setIcon(greenIcon)
            break
        case "University Police":
            map.flyTo(UnivPolice._latlng,18)
            UnivPolice.setIcon(greenIcon)
            break
        case "Golleher Alumni House":
            map.flyTo(Golleher._latlng,18)
            Golleher.setIcon(greenIcon)
            break
        case "Titan Gym":
            map.flyTo(TitanGym._latlng,18)
            TitanGym.setIcon(greenIcon)
            break
        case "Kinesiology and Health Science":
            map.flyTo(StudentRec._latlng,18)
            StudentRec.setIcon(greenIcon)
            break
        case "Titan Student Union":
            map.flyTo(TitanUnion._latlng,18)
            TitanUnion.setIcon(greenIcon)
            break
        case "Bookstore":
            map.flyTo(Bookstore._latlng,18)
            Bookstore.setIcon(greenIcon)
            break
        case "Visual Art":
            map.flyTo(VisualArt._latlng,18)
            VisualArt.setIcon(greenIcon)
            break
        case "Student Health and Counseling Center":
            map.flyTo(StudentHealth._latlng,18)
            StudentHealth.setIcon(greenIcon)
            break
        case "Pollak Library":
            map.flyTo(PollakLibrary._latlng,18)
            PollakLibrary.setIcon(greenIcon)
            break
        case "Education Classroom":
            map.flyTo(EducationClassroom._latlng,18)
            EducationClassroom.setIcon(greenIcon)
            break
        case "McCarthy Hall":
            map.flyTo(McCarthy._latlng,18)
            McCarthy.setIcon(greenIcon)
            break
        case "Clayes Performing Arts Center":
            map.flyTo(Clayes._latlng,18)
            Clayes.setIcon(greenIcon)
            break
        case "Nutwood Parking Structure":
            map.flyTo(Nutwood._latlng,18)
            Nutwood.setIcon(greenIcon)
            break
        case "Lot C":
            map.flyTo(LotC._latlng,18)
            LotC.setIcon(greenIcon)
            break
        case "Lot C East":
            map.flyTo(LotCE._latlng,18)
            LotCE.setIcon(greenIcon)
            break
        case "Dan Black Hall":
            map.flyTo(DBH._latlng,18)
            DBH.setIcon(greenIcon)
            break
        case "Langsdorg Hall":
            map.flyTo(Langsdorg._latlng,18)
            Langsdorg.setIcon(greenIcon)
            break
        case "Gordon Hall":
            map.flyTo(Gordon._latlng,18)
            Gordon.setIcon(greenIcon)
            break
        case "Humanities and Social Science":
            map.flyTo(Humanities._latlng,18)
            Humanities.setIcon(greenIcon)
            break
        case "Titan House":
            map.flyTo(TitanHouse._latlng,18)
            TitanHouse.setIcon(greenIcon)
            break
        case "Titan Hall":
            map.flyTo(TitanHall._latlng,18)
            TitanHall.setIcon(greenIcon)
            break
        case "Military Complex":
            map.flyTo(Military._latlng,18)
            Military.setIcon(greenIcon)
            break
        case "College ParkWest":
            map.flyTo(CollegeParkWest._latlng,18)
            CollegeParkWest.setIcon(greenIcon)
            break
        case "Mihaylo-Hall":
            map.flyTo(Mihaylo._latlng,18)
            Mihaylo.setIcon(greenIcon)
            break
        case "Lot F":
            map.flyTo(LotF._latlng,18)
            LotF.setIcon(greenIcon)
            break
        case "Lot I":
            map.flyTo(LotI._latlng,18)
            LotI.setIcon(greenIcon)
            break
        case "Eastside Parking Structure":
            map.flyTo(EastsideParking1._latlng,18)
            EastsideParking1.setIcon(greenIcon)
            break
        case "Eastside Parking Structure 2":
            map.flyTo(EastsideParking2._latlng,18)
            EastsideParking2.setIcon(greenIcon)
            break
        case "Engineering North West":
            map.flyTo(EngineeringNW._latlng,18)
            EngineeringNW.setIcon(greenIcon)
            break
        case "Engineering":
            map.flyTo(Engineering._latlng,18)
            Engineering.setIcon(greenIcon)
            break
        case "Engineering South West":
            map.flyTo(EngineeringSW._latlng,18)
            EngineeringSW.setIcon(greenIcon)
            break
        case "Engineering South East":
            map.flyTo(EngineeringSE._latlng,18)
            EngineeringSE.setIcon(greenIcon)
            break
        case "Computer Science":
            map.flyTo(CS._latlng,18)
            CS.setIcon(greenIcon)
            break
        case "Engineering North East":
            map.flyTo(EngineeringNE._latlng,18)
            EngineeringNE.setIcon(greenIcon)
            break
        case "Ruby Gerontology Center":
            map.flyTo(RubyGerontology._latlng,18)
            RubyGerontology.setIcon(greenIcon)
            break
        case "Lot H":
            map.flyTo(LotH._latlng,18)
            LotH.setIcon(greenIcon)
            break
        case "Lot J":
            map.flyTo(LotJ._latlng,18)
            LotJ.setIcon(greenIcon)
            break
        case "Gastronome":
            map.flyTo(Gastronome._latlng,18)
            Gastronome.setIcon(greenIcon)
            break
        case "Pine Hall":
            map.flyTo(PineHall._latlng,18)
            PineHall.setIcon(greenIcon)
            break
        case "Greenhouse Complex":
            map.flyTo(GreenhouseComplex._latlng,18)
            GreenhouseComplex.setIcon(greenIcon)
            break
        case "Holly Hall":
            map.flyTo(HollyHall._latlng,18)
            HollyHall.setIcon(greenIcon)
            break
        case "Juniper Hall":
            map.flyTo(JuniperHall._latlng,18)
            JuniperHall.setIcon(greenIcon)
            break
        case "Resident Hall Parking":
            map.flyTo(ResidentHallParking._latlng,18)
            ResidentHallParking.setIcon(greenIcon)
            break
        case "Fig Hall":
            map.flyTo(FigHall._latlng,18)
            FigHall.setIcon(greenIcon)
            break
        case "Acacia Hall":
            map.flyTo(AcaciaHall._latlng,18)
            AcaciaHall.setIcon(greenIcon)
            break
        case "Manzanita Hall":
            map.flyTo(MazanitaHall._latlng,18)
            MazanitaHall.setIcon(greenIcon)
            break
        case "Oak Hall":
            map.flyTo(OakHall._latlng,18)
            OakHall.setIcon(greenIcon)
            break
        case "Willow Hall":
            map.flyTo(WillowHall._latlng,18)
            WillowHall.setIcon(greenIcon)
            break
        case "Elm Hall":
            map.flyTo(ElmHall._latlng,18)
            ElmHall.setIcon(greenIcon)
            break
        case "Cypress Hall":
            map.flyTo(CypressHall._latlng,18)
            CypressHall.setIcon(greenIcon)
            break
        case "Sycamore/Valencia Hall":
            map.flyTo(SycamoreValencia._latlng,18)
            SycamoreValencia.setIcon(greenIcon)
            break
        case "Environmental Health and Safety":
            map.flyTo(EnvironmentalHealth._latlng,18)
            EnvironmentalHealth.setIcon(greenIcon)
            break
        case "Arboretum Museum":
            map.flyTo(ArboretumMuseum._latlng,18)
            ArboretumMuseum.setIcon(greenIcon)
            break
        case "Fullerton Arboretum Parking":
            map.flyTo(FullertonArboretumParking._latlng,18)
            FullertonArboretumParking.setIcon(greenIcon)
            break
        case "Birch Hall":
            map.flyTo(BirchHall._latlng,18)
            BirchHall.setIcon(greenIcon)
            break

    }
}