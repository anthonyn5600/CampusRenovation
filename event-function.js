var previousClick //used in zoomtoWaypoint function
//function to indicate that an event have been left-click on the window
function eventClick(event) {
    let panel = event.srcElement.textContent
    let located = ''
    //search through the event_locations[i] and finding if it match with the location that was clicked on
    for (let i = 0; i < event_location.length; i++) {
        if (panel.includes(event_location[i])) {
            located = event_location[i]
        }
    }
    if (located != '')
        zoomtoWaypoint(located)
}
//function to indicate that building have been left-clicked on the window
function buildingClick(name) {
    zoomtoWaypoint(name)
}
//Pan to the location based off lat/long coordinate
//It will set the destination icon marker to green
function zoomtoWaypoint(site) {

    //in the case that a prior bulding/event building had their marker changed, it will reset it back to blue
    if (previousClick != null) {
        previousClick.setIcon(blueIcon)
    }

    switch (site) {
        case "Extension & International Programs (EIP)":
            map.flyTo(TitanHall._latlng, 18)
            previousClick = TitanHall
            TitanHall.setIcon(greenIcon)
            break
        case "Alumni Engagement":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setIcon(greenIcon)
            break
        case "Faculty Development Center (FDC)":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setIcon(greenIcon)
            break
        case "College of Natural Sci & Math (CNSM)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setIcon(greenIcon)
            break
        case "This Osher Lifelong Learning Institute course is open to the public and is held in Mackey Auditorium in the Ruby Gerontology Center on the CSUF campus.":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setIcon(greenIcon)
            break
        case "Osher Lifelong Learning Institute (OLLI)":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setIcon(greenIcon)
            break
        case "Theatre (THTR)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setIcon(greenIcon)
            break
        case "Biological Science (BIOL)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setIcon(greenIcon)
            break
        case "College of the Arts (COTA)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setIcon(greenIcon)
            break
        case "Art (ART)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setIcon(greenIcon)
            break
        case "Come learn and practice research-based strategies for providing efficient, effective feedback on student writing.":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setIcon(greenIcon)
            break
        case "College of Hum & Social Sciences (CHSS)":
            map.flyTo(Humanities._latlng, 18)
            previousClick = Humanities
            Humanities.setIcon(greenIcon)
            break
        case "Athletics":
            map.flyTo(TrackField._latlng, 18)
            previousClick = TrackField
            TrackField.setIcon(greenIcon)
            break
        case "Mathematics (MATH)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setIcon(greenIcon)
            break
        case "College of Bus & Econ (CBE)":
            map.flyTo(Mihaylo._latlng, 18)
            previousClick = Mihaylo
            Mihaylo.setIcon(greenIcon)
            break
        case "School of Music":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setIcon(greenIcon)
            break
        case "Xpath Error":
            console.log("error")
            break
        case "Division of Academic Affairs (VPAA)":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setIcon(greenIcon)
            break
        case "Lot A":
            map.flyTo(LotA._latlng, 18)
            previousClick = LotA
            LotA.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot S":
            map.flyTo(LotS._latlng, 18)
            previousClick = LotS
            LotS.setIcon(greenIcon)
            break
        case "Lot G":
            map.flyTo(LotG._latlng, 18)
            previousClick = LotG
            LotG.setIcon(greenIcon)
            break
        case "Titan Stadium":
            map.flyTo(TitanStadium._latlng, 18)
            previousClick = TitanStadium
            TitanStadium.setIcon(greenIcon)
            break
        case "Goodwin Field":
            map.flyTo(GoodwinField._latlng, 18)
            previousClick = GoodwinField
            GoodwinField.setIcon(greenIcon)
            break
        case "Anderson Family Field":
            map.flyTo(AndersonField._latlng, 18)
            previousClick = AndersonField
            AndersonField.setIcon(greenIcon)
            break
        case "Track and Field":
            map.flyTo(TrackField._latlng, 18)
            previousClick = TrackField
            TrackField.setIcon(greenIcon)
            break
        case "Lot D":
            map.flyTo(LotD._latlng, 18)
            previousClick = LotD
            LotD.setIcon(greenIcon)
            break
        case "Tennis Court":
            map.flyTo(TennisCt._latlng, 18)
            previousClick = TennisCt
            TennisCt.setIcon(greenIcon)
            break
        case "State College Parking Structure":
            map.flyTo(StateParking._latlng, 18)
            previousClick = StateParking
            StateParking.setIcon(greenIcon)
            break
        case "Student Recreation Center":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setIcon(greenIcon)
            break
        case "Lot R":
            map.flyTo(LotR._latlng, 18)
            previousClick = LotR
            LotR.setIcon(greenIcon)
            break
        case "University Police":
            map.flyTo(UnivPolice._latlng, 18)
            previousClick = UnivPolice
            UnivPolice.setIcon(greenIcon)
            break
        case "Golleher Alumni House":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setIcon(greenIcon)
            break
        case "Titan Gym":
            map.flyTo(TitanGym._latlng, 18)
            previousClick = TitanGym
            TitanGym.setIcon(greenIcon)
            break
        case "Kinesiology and Health Science":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setIcon(greenIcon)
            break
        case "Titan Student Union":
            map.flyTo(TitanUnion._latlng, 18)
            previousClick = TitanUnion
            TitanUnion.setIcon(greenIcon)
            break
        case "Bookstore":
            map.flyTo(Bookstore._latlng, 18)
            previousClick = Bookstore
            Bookstore.setIcon(greenIcon)
            break
        case "Visual Art":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setIcon(greenIcon)
            break
        case "Student Health and Counseling Center":
            map.flyTo(StudentHealth._latlng, 18)
            previousClick = StudentHealth
            StudentHealth.setIcon(greenIcon)
            break
        case "Pollak Library":
            map.flyTo(PollakLibrary._latlng, 18)
            previousClick = PollakLibrary
            PollakLibrary.setIcon(greenIcon)
            break
        case "Education Classroom":
            map.flyTo(EducationClassroom._latlng, 18)
            previousClick = EducationClassroom
            EducationClassroom.setIcon(greenIcon)
            break
        case "McCarthy Hall":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setIcon(greenIcon)
            break
        case "Clayes Performing Arts Center":
            map.flyTo(Clayes._latlng, 18)
            previousClick = Clayes
            Clayes.setIcon(greenIcon)
            break
        case "Nutwood Parking Structure":
            map.flyTo(Nutwood._latlng, 18)
            previousClick = Nutwood
            Nutwood.setIcon(greenIcon)
            break
        case "Lot C":
            map.flyTo(LotC._latlng, 18)
            previousClick = LotC
            LotC.setIcon(greenIcon)
            break
        case "Lot C East":
            map.flyTo(LotCE._latlng, 18)
            previousClick = LotCE
            LotCE.setIcon(greenIcon)
            break
        case "Dan Black Hall":
            map.flyTo(DBH._latlng, 18)
            previousClick = DBH
            DBH.setIcon(greenIcon)
            break
        case "Langsdorg Hall":
            map.flyTo(Langsdorg._latlng, 18)
            previousClick = Langsdorg
            Langsdorg.setIcon(greenIcon)
            break
        case "Gordon Hall":
            map.flyTo(Gordon._latlng, 18)
            previousClick = Gordon
            Gordon.setIcon(greenIcon)
            break
        case "Humanities and Social Science":
            map.flyTo(Humanities._latlng, 18)
            previousClick = Humanities
            Humanities.setIcon(greenIcon)
            break
        case "Titan House":
            map.flyTo(TitanHouse._latlng, 18)
            previousClick = TitanHouse
            TitanHouse.setIcon(greenIcon)
            break
        case "Titan Hall":
            map.flyTo(TitanHall._latlng, 18)
            previousClick = TitanHall
            TitanHall.setIcon(greenIcon)
            break
        case "Military Complex":
            map.flyTo(Military._latlng, 18)
            previousClick = Military
            Military.setIcon(greenIcon)
            break
        case "College ParkWest":
            map.flyTo(CollegeParkWest._latlng, 18)
            previousClick = CollegeParkWest
            CollegeParkWest.setIcon(greenIcon)
            break
        case "Mihaylo-Hall":
            map.flyTo(Mihaylo._latlng, 18)
            previousClick = Mihaylo
            Mihaylo.setIcon(greenIcon)
            break
        case "Lot F":
            map.flyTo(LotF._latlng, 18)
            previousClick = LotF
            LotF.setIcon(greenIcon)
            break
        case "Lot I":
            map.flyTo(LotI._latlng, 18)
            previousClick = LotI
            LotI.setIcon(greenIcon)
            break
        case "Eastside Parking Structure":
            map.flyTo(EastsideParking1._latlng, 18)
            previousClick = EastsideParking1
            EastsideParking1.setIcon(greenIcon)
            break
        case "Eastside Parking Structure 2":
            map.flyTo(EastsideParking2._latlng, 18)
            previousClick = EastsideParking2
            EastsideParking2.setIcon(greenIcon)
            break
        case "Engineering North West":
            map.flyTo(EngineeringNW._latlng, 18)
            previousClick = EngineeringNW
            EngineeringNW.setIcon(greenIcon)
            break
        case "Engineering":
            map.flyTo(Engineering._latlng, 18)
            previousClick = Engineering
            Engineering.setIcon(greenIcon)
            break
        case "Engineering South West":
            map.flyTo(EngineeringSW._latlng, 18)
            previousClick = EngineeringSW
            EngineeringSW.setIcon(greenIcon)
            break
        case "Engineering South East":
            map.flyTo(EngineeringSE._latlng, 18)
            previousClick = EngineeringSE
            EngineeringSE.setIcon(greenIcon)
            break
        case "Computer Science":
            map.flyTo(CS._latlng, 18)
            previousClick = CS
            CS.setIcon(greenIcon)
            break
        case "Engineering North East":
            map.flyTo(EngineeringNE._latlng, 18)
            previousClick = EngineeringNE
            EngineeringNE.setIcon(greenIcon)
            break
        case "Ruby Gerontology Center":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setIcon(greenIcon)
            break
        case "Lot H":
            map.flyTo(LotH._latlng, 18)
            previousClick = LotH
            LotH.setIcon(greenIcon)
            break
        case "Lot J":
            map.flyTo(LotJ._latlng, 18)
            previousClick = LotJ
            LotJ.setIcon(greenIcon)
            break
        case "Gastronome":
            map.flyTo(Gastronome._latlng, 18)
            previousClick = Gastronome
            Gastronome.setIcon(greenIcon)
            break
        case "Pine Hall":
            map.flyTo(PineHall._latlng, 18)
            previousClick = PineHall
            PineHall.setIcon(greenIcon)
            break
        case "Greenhouse Complex":
            map.flyTo(GreenhouseComplex._latlng, 18)
            previousClick = GreenhouseComplex
            GreenhouseComplex.setIcon(greenIcon)
            break
        case "Holly Hall":
            map.flyTo(HollyHall._latlng, 18)
            previousClick = HollyHall
            HollyHall.setIcon(greenIcon)
            break
        case "Juniper Hall":
            map.flyTo(JuniperHall._latlng, 18)
            previousClick = JuniperHall
            JuniperHall.setIcon(greenIcon)
            break
        case "Resident Hall Parking":
            map.flyTo(ResidentHallParking._latlng, 18)
            previousClick = ResidentHallParking
            ResidentHallParking.setIcon(greenIcon)
            break
        case "Fig Hall":
            map.flyTo(FigHall._latlng, 18)
            previousClick = FigHall
            FigHall.setIcon(greenIcon)
            break
        case "Acacia Hall":
            map.flyTo(AcaciaHall._latlng, 18)
            previousClick = AcaciaHall
            AcaciaHall.setIcon(greenIcon)
            break
        case "Manzanita Hall":
            map.flyTo(MazanitaHall._latlng, 18)
            previousClick = MazanitaHall
            MazanitaHall.setIcon(greenIcon)
            break
        case "Oak Hall":
            map.flyTo(OakHall._latlng, 18)
            previousClick = OakHall
            OakHall.setIcon(greenIcon)
            break
        case "Willow Hall":
            map.flyTo(WillowHall._latlng, 18)
            previousClick = WillowHall
            WillowHall.setIcon(greenIcon)
            break
        case "Elm Hall":
            map.flyTo(ElmHall._latlng, 18)
            previousClick = ElmHall
            ElmHall.setIcon(greenIcon)
            break
        case "Cypress Hall":
            map.flyTo(CypressHall._latlng, 18)
            previousClick = CypressHall
            CypressHall.setIcon(greenIcon)
            break
        case "Sycamore/Valencia Hall":
            map.flyTo(SycamoreValencia._latlng, 18)
            previousClick = SycamoreValencia
            SycamoreValencia.setIcon(greenIcon)
            break
        case "Environmental Health and Safety":
            map.flyTo(EnvironmentalHealth._latlng, 18)
            previousClick = EnvironmentalHealth
            EnvironmentalHealth.setIcon(greenIcon)
            break
        case "Arboretum Museum":
            map.flyTo(ArboretumMuseum._latlng, 18)
            previousClick = ArboretumMuseum
            ArboretumMuseum.setIcon(greenIcon)
            break
        case "Fullerton Arboretum Parking":
            map.flyTo(FullertonArboretumParking._latlng, 18)
            previousClick = FullertonArboretumParking
            FullertonArboretumParking.setIcon(greenIcon)
            break
        case "Birch Hall":
            map.flyTo(BirchHall._latlng, 18)
            previousClick = BirchHall
            BirchHall.setIcon(greenIcon)
            break

    }
}