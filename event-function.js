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
            LotA.setIcon(greenIcon)
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

// var LotA = L.marker([33.88739670088401,-117.88914531469347])
// var LotS = L.marker([33.888228886602846,-117.88657844066621])
// var LotG = L.marker([33.88489786727004,-117.88873493671419])
// var TitanStadium = L.marker([33.88667917748236,-117.88701295852663])
// var GoodwinField = L.marker([33.88674152265657,-117.88546800613405])
// var AndersonField = L.marker([33.88598948108825,-117.8851354122162])
// var TrackField = L.marker([33.88515616006058,-117.8862512111664])
// var LotD = L.marker([33.884122985837244,-117.8878176212311])
// var TennisCt = L.marker([33.884122985837244,-117.8878176212311])
// var StateParking = L.marker([33.88307198598094,-117.88857936859132])
// var StudentRec = L.marker([33.88312542723584,-117.88763523101808])
// var LotR = L.marker([33.88243570170432,-117.88880467414857])
// var UnivPolice = L.marker([33.88304136900779,-117.88939476029556])
// var Golleher = L.marker([33.88167861214047,-117.88944840447586])
// var TitanGym = L.marker([33.88305472926149,-117.886412143871])
// var Kinesiology = L.marker([33.882694001677216,-117.8859078885762])
// var TitanUnion = L.marker([33.88177157868061,-117.88864374160768])
// var Bookstore = L.marker([33.88182502047821,-117.88684129714967])
// var VisualArt = L.marker([33.88039098730793,-117.88849353790285])
// var StudentHealth = L.marker([33.88299683481367,-117.88429856300355])
// var PollakLibrary = L.marker([33.88142420618036,-117.88534998893739])
// var EducationClassroom = L.marker([33.881352950108074,-117.8842878341675])
// var McCarthy = L.marker([33.87966060090187,-117.8854787349701])
// var Clayes = L.marker([33.880569129385435,-117.88666963577272])
// var Nutwood = L.marker([33.879015383929314,-117.888520359993])
// var LotC = L.marker([33.878324512029835,-117.88885831832887])
// var LotCE = L.marker([33.87857391687398,-117.88717389106752])
// var DBH = L.marker([33.87909053887517,-117.88583278656007])
// var Langsdorg = L.marker([33.87901037359725,-117.88448095321657])
// var Gordon = L.marker([33.87961606494317,-117.88416981697083])
// var Humanities = L.marker([33.88040880153244,-117.88415908813478])
// var TitanHouse = L.marker([33.88382962039666,-117.88415908813478])
// var Military = L.marker([33.88414135622448,-117.88416981697083])
// var TitanHall = L.marker([33.880872526755084,-117.89009749889375])
// var CollegeParkWest = L.marker([33.88122435501452,-117.89058029651643])
// var Mihaylo = L.marker([33.879072724375476,-117.88348317146301])
// var LotF = L.marker([33.88019503059313,-117.8830111026764])
// var LotI = L.marker([33.881513276187036,-117.88304328918458])
// var EastsideParking1 = L.marker([33.88032863749295,-117.88177728652956])
// var EastsideParking2 = L.marker([33.8812549729115,-117.88164854049684])
// var EngineeringNW = L.marker([33.88270290854949,-117.88323640823366])
// var Engineering = L.marker([33.882324365656906,-117.88324177265169])
// var EngineeringSW = L.marker([33.88195027456017,-117.88324177265169])
// var EngineeringSE = L.marker([33.8819591815101,-117.88268923759462])
// var CS = L.marker([33.88231100528884,-117.88264095783235])
// var EngineeringNE = L.marker([33.8826717344924,-117.88273215293886])
// var RubyGerontology = L.marker([33.88327739984853,-117.88324713706972])
// var LotH = L.marker([33.88389196765335,-117.88363873958588])
// var LotJ = L.marker([33.884301677063824,-117.88288772106172])
// var Gastronome = L.marker([33.88314825097883,-117.88232982158662])
// var PineHall = L.marker([33.88359359108361,-117.88278043270113])
// var GreenhouseComplex = L.marker([33.879451838394594,-117.88695931434631])
// var HollyHall = L.marker([33.88385188727928,-117.88163244724275])
// var JuniperHall = L.marker([33.88412799614093,-117.88234591484071])
// var ResidentHallParking = L.marker([33.88429722371123,-117.88131058216096])
// var FigHall = L.marker([33.88449317100487,-117.88165390491487])
// var AcaciaHall = L.marker([33.88458223780776,-117.88253366947175])
// var MazanitaHall = L.marker([33.88504093037007,-117.88263559341432])
// var OakHall = L.marker([33.88506765024913,-117.8821635246277])
// var WillowHall = L.marker([33.885415007915526,-117.88243174552917])
// var ElmHall = L.marker([33.88513890321907,-117.8816592693329])
// var CypressHall = L.marker([33.8857668174437,-117.88237273693086])
// var SycamoreValencia = L.marker([33.886074092933264,-117.88169682025911])
// var EnvironmentalHealth = L.marker([33.88504928033317,-117.88942694664001])
// var ArboretumMuseum = L.marker([33.8881487296391,-117.8841269016266])
// var FullertonArboretumParking = L.marker([33.88802459849032,-117.88519442081453])
// var BirchHall = L.marker([33.884542157757956,-117.88215011358264])