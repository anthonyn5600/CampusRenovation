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
        previousClick.setStyle({ color: "rgb(51, 136, 255)", fillColor: "rgb(51, 136, 255)"})
    }

    switch (site) {
        case "Extension & International Programs (EIP)":
            map.flyTo(TitanHall._latlng, 18)
            previousClick = TitanHall
            TitanHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Alumni Engagement":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Faculty Development Center (FDC)":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "College of Natural Sci & Math (CNSM)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "This Osher Lifelong Learning Institute course is open to the public and is held in Mackey Auditorium in the Ruby Gerontology Center on the CSUF campus.":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Osher Lifelong Learning Institute (OLLI)":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Theatre (THTR)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Biological Science (BIOL)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "College of the Arts (COTA)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Art (ART)":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Come learn and practice research-based strategies for providing efficient, effective feedback on student writing.":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "College of Hum & Social Sciences (CHSS)":
            map.flyTo(Humanities._latlng, 18)
            previousClick = Humanities
            Humanities.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Athletics":
            map.flyTo(TrackField._latlng, 18)
            previousClick = TrackField
            TrackField.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Mathematics (MATH)":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "College of Bus & Econ (CBE)":
            map.flyTo(Mihaylo._latlng, 18)
            previousClick = Mihaylo
            Mihaylo.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "School of Music":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Xpath Error":
            console.log("error")
            break
        case "Division of Academic Affairs (VPAA)":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot A":
            map.flyTo(LotA._latlng, 18)
            previousClick = LotA
            LotA.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot S":
            map.flyTo(LotS._latlng, 18)
            previousClick = LotS
            LotS.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot G":
            map.flyTo(LotG._latlng, 18)
            previousClick = LotG
            LotG.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Titan Stadium":
            map.flyTo(TitanStadium._latlng, 18)
            previousClick = TitanStadium
            TitanStadium.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Goodwin Field":
            map.flyTo(GoodwinField._latlng, 18)
            previousClick = GoodwinField
            GoodwinField.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Anderson Family Field":
            map.flyTo(AndersonField._latlng, 18)
            previousClick = AndersonField
            AndersonField.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Track and Field":
            map.flyTo(TrackField._latlng, 18)
            previousClick = TrackField
            TrackField.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot D":
            map.flyTo(LotD._latlng, 18)
            previousClick = LotD
            LotD.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Tennis Court":
            map.flyTo(TennisCt._latlng, 18)
            previousClick = TennisCt
            TennisCt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "State College Parking Structure":
            map.flyTo(StateParking._latlng, 18)
            previousClick = StateParking
            StateParking.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Student Recreation Center":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot R":
            map.flyTo(LotR._latlng, 18)
            previousClick = LotR
            LotR.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "University Police":
            map.flyTo(UnivPolice._latlng, 18)
            previousClick = UnivPolice
            UnivPolice.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Golleher Alumni House":
            map.flyTo(Golleher._latlng, 18)
            previousClick = Golleher
            Golleher.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Titan Gym":
            map.flyTo(TitanGym._latlng, 18)
            previousClick = TitanGym
            TitanGym.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Kinesiology and Health Science":
            map.flyTo(StudentRec._latlng, 18)
            previousClick = StudentRec
            StudentRec.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Titan Student Union":
            map.flyTo(TitanUnion._latlng, 18)
            previousClick = TitanUnion
            TitanUnion.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Bookstore":
            map.flyTo(Bookstore._latlng, 18)
            previousClick = Bookstore
            Bookstore.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Visual Art":
            map.flyTo(VisualArt._latlng, 18)
            previousClick = VisualArt
            VisualArt.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Student Health and Counseling Center":
            map.flyTo(StudentHealth._latlng, 18)
            previousClick = StudentHealth
            StudentHealth.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Pollak Library":
            map.flyTo(PollakLibrary._latlng, 18)
            previousClick = PollakLibrary
            PollakLibrary.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Education Classroom":
            map.flyTo(EducationClassroom._latlng, 18)
            previousClick = EducationClassroom
            EducationClassroom.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "McCarthy Hall":
            map.flyTo(McCarthy._latlng, 18)
            previousClick = McCarthy
            McCarthy.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Clayes Performing Arts Center":
            map.flyTo(Clayes._latlng, 18)
            previousClick = Clayes
            Clayes.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Nutwood Parking Structure":
            map.flyTo(Nutwood._latlng, 18)
            previousClick = Nutwood
            Nutwood.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot C":
            map.flyTo(LotC._latlng, 18)
            previousClick = LotC
            LotC.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot C East":
            map.flyTo(LotCE._latlng, 18)
            previousClick = LotCE
            LotCE.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Dan Black Hall":
            map.flyTo(DBH._latlng, 18)
            previousClick = DBH
            DBH.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Langsdorg Hall":
            map.flyTo(Langsdorg._latlng, 18)
            previousClick = Langsdorg
            Langsdorg.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Gordon Hall":
            map.flyTo(Gordon._latlng, 18)
            previousClick = Gordon
            Gordon.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Humanities and Social Science":
            map.flyTo(Humanities._latlng, 18)
            previousClick = Humanities
            Humanities.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Titan House":
            map.flyTo(TitanHouse._latlng, 18)
            previousClick = TitanHouse
            TitanHouse.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Titan Hall":
            map.flyTo(TitanHall._latlng, 18)
            previousClick = TitanHall
            TitanHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Military Complex":
            map.flyTo(Military._latlng, 18)
            previousClick = Military
            Military.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "College ParkWest":
            map.flyTo(CollegeParkWest._latlng, 18)
            previousClick = CollegeParkWest
            CollegeParkWest.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Mihaylo-Hall":
            map.flyTo(Mihaylo._latlng, 18)
            previousClick = Mihaylo
            Mihaylo.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot F":
            map.flyTo(LotF._latlng, 18)
            previousClick = LotF
            LotF.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot I":
            map.flyTo(LotI._latlng, 18)
            previousClick = LotI
            LotI.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Eastside Parking Structure":
            map.flyTo(EastsideParking1._latlng, 18)
            previousClick = EastsideParking1
            EastsideParking1.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Eastside Parking Structure 2":
            map.flyTo(EastsideParking2._latlng, 18)
            previousClick = EastsideParking2
            EastsideParking2.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Engineering North West":
            map.flyTo(EngineeringNW._latlng, 18)
            previousClick = EngineeringNW
            EngineeringNW.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Engineering":
            map.flyTo(Engineering._latlng, 18)
            previousClick = Engineering
            Engineering.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Engineering South West":
            map.flyTo(EngineeringSW._latlng, 18)
            previousClick = EngineeringSW
            EngineeringSW.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Engineering South East":
            map.flyTo(EngineeringSE._latlng, 18)
            previousClick = EngineeringSE
            EngineeringSE.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Computer Science":
            map.flyTo(CS._latlng, 18)
            previousClick = CS
            CS.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Engineering North East":
            map.flyTo(EngineeringNE._latlng, 18)
            previousClick = EngineeringNE
            EngineeringNE.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Ruby Gerontology Center":
            map.flyTo(RubyGerontology._latlng, 18)
            previousClick = RubyGerontology
            RubyGerontology.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot H":
            map.flyTo(LotH._latlng, 18)
            previousClick = LotH
            LotH.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Lot J":
            map.flyTo(LotJ._latlng, 18)
            previousClick = LotJ
            LotJ.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Gastronome":
            map.flyTo(Gastronome._latlng, 18)
            previousClick = Gastronome
            Gastronome.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Pine Hall":
            map.flyTo(PineHall._latlng, 18)
            previousClick = PineHall
            PineHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Greenhouse Complex":
            map.flyTo(GreenhouseComplex._latlng, 18)
            previousClick = GreenhouseComplex
            GreenhouseComplex.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Holly Hall":
            map.flyTo(HollyHall._latlng, 18)
            previousClick = HollyHall
            HollyHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Juniper Hall":
            map.flyTo(JuniperHall._latlng, 18)
            previousClick = JuniperHall
            JuniperHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Resident Hall Parking":
            map.flyTo(ResidentHallParking._latlng, 18)
            previousClick = ResidentHallParking
            ResidentHallParking.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Fig Hall":
            map.flyTo(FigHall._latlng, 18)
            previousClick = FigHall
            FigHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Acacia Hall":
            map.flyTo(AcaciaHall._latlng, 18)
            previousClick = AcaciaHall
            AcaciaHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Manzanita Hall":
            map.flyTo(MazanitaHall._latlng, 18)
            previousClick = MazanitaHall
            MazanitaHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Oak Hall":
            map.flyTo(OakHall._latlng, 18)
            previousClick = OakHall
            OakHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Willow Hall":
            map.flyTo(WillowHall._latlng, 18)
            previousClick = WillowHall
            WillowHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Elm Hall":
            map.flyTo(ElmHall._latlng, 18)
            previousClick = ElmHall
            ElmHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Cypress Hall":
            map.flyTo(CypressHall._latlng, 18)
            previousClick = CypressHall
            CypressHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Sycamore/Valencia Hall":
            map.flyTo(SycamoreValencia._latlng, 18)
            previousClick = SycamoreValencia
            SycamoreValencia.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Environmental Health and Safety":
            map.flyTo(EnvironmentalHealth._latlng, 18)
            previousClick = EnvironmentalHealth
            EnvironmentalHealth.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Arboretum Museum":
            map.flyTo(ArboretumMuseum._latlng, 18)
            previousClick = ArboretumMuseum
            ArboretumMuseum.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Fullerton Arboretum Parking":
            map.flyTo(FullertonArboretumParking._latlng, 18)
            previousClick = FullertonArboretumParking
            FullertonArboretumParking.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break
        case "Birch Hall":
            map.flyTo(BirchHall._latlng, 18)
            previousClick = BirchHall
            BirchHall.setStyle({ color: "#00FF00", fillColor: "#00FF00" })
            break

    }
}