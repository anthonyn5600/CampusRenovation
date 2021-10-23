var myIcon = L.icon({
    //iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

/*
Brainstorming for hiding the markers and also getting the them to appear when hovered over...
https://stackoverflow.com/questions/33727251/cannot-add-marker-dynamically-with-leaflet

-Define markers with var - DONE

-Add vars into array that is dynamically checked against what the user moused over on map?
-Clarification on what triggers the waypoint to come up
*/

var LotA = L.marker([33.88739670088401,-117.88914531469347])
var LotS = L.marker([33.888228886602846,-117.88657844066621])
var LotG = L.marker([33.88489786727004,-117.88873493671419])
var TitanStadium = L.marker([33.88667917748236,-117.88701295852663])
var GoodwinField = L.marker([33.88674152265657,-117.88546800613405])
var AndersonField = L.marker([33.88598948108825,-117.8851354122162])
var TrackField = L.marker([33.88515616006058,-117.8862512111664])
var LotD = L.marker([33.884122985837244,-117.8878176212311])
var TennisCt = L.marker([33.884122985837244,-117.8878176212311])
var StateParking = L.marker([33.88307198598094,-117.88857936859132])
var StudentRec = L.marker([33.88312542723584,-117.88763523101808])
var LotR = L.marker([33.88243570170432,-117.88880467414857])
var UnivPolice = L.marker([33.88304136900779,-117.88939476029556])
var Golleher = L.marker([33.88167861214047,-117.88944840447586])
var TitanGym = L.marker([33.88305472926149,-117.886412143871])
var Kinesiology = L.marker([33.882694001677216,-117.8859078885762])
var TitanUnion = L.marker([33.88177157868061,-117.88864374160768])
var Bookstore = L.marker([33.88182502047821,-117.88684129714967])
var VisualArt = L.marker([33.88039098730793,-117.88849353790285])
var StudentHealth = L.marker([33.88299683481367,-117.88429856300355])
var PollakLibrary = L.marker([33.88142420618036,-117.88534998893739])
var EducationClassroom = L.marker([33.881352950108074,-117.8842878341675])
var McCarthy = L.marker([33.87966060090187,-117.8854787349701])
var Clayes = L.marker([33.880569129385435,-117.88666963577272])
var Nutwood = L.marker([33.879015383929314,-117.888520359993])
var LotC = L.marker([33.878324512029835,-117.88885831832887])
var LotCE = L.marker([33.87857391687398,-117.88717389106752])
var DBH = L.marker([33.87909053887517,-117.88583278656007])
var Langsdorg = L.marker([33.87901037359725,-117.88448095321657])
var Gordon = L.marker([33.87961606494317,-117.88416981697083])
var Humanities = L.marker([33.88040880153244,-117.88415908813478])
var TitanHouse = L.marker([33.88382962039666,-117.88415908813478])
var Military = L.marker([33.88414135622448,-117.88416981697083])
var TitanHall = L.marker([33.880872526755084,-117.89009749889375])
var CollegeParkWest = L.marker([33.88122435501452,-117.89058029651643])
var Mihaylo = L.marker([33.879072724375476,-117.88348317146301])
var LotF = L.marker([33.88019503059313,-117.8830111026764])
var LotI = L.marker([33.881513276187036,-117.88304328918458])
var EastsideParking1 = L.marker([33.88032863749295,-117.88177728652956])
var EastsideParking2 = L.marker([33.8812549729115,-117.88164854049684])
var EngineeringNW = L.marker([33.88270290854949,-117.88323640823366])
var Engineering = L.marker([33.882324365656906,-117.88324177265169])
var EngineeringSW = L.marker([33.88195027456017,-117.88324177265169])
var EngineeringSE = L.marker([33.8819591815101,-117.88268923759462])
var CS = L.marker([33.88231100528884,-117.88264095783235])
var EngineeringNE = L.marker([33.8826717344924,-117.88273215293886])
var RubyGerontology = L.marker([33.88327739984853,-117.88324713706972])
var LotH = L.marker([33.88389196765335,-117.88363873958588])
var LotJ = L.marker([33.884301677063824,-117.88288772106172])
var Gastronome = L.marker([33.88314825097883,-117.88232982158662])
var PineHall = L.marker([33.88359359108361,-117.88278043270113])
var GreenhouseComplex = L.marker([33.879451838394594,-117.88695931434631])
var HollyHall = L.marker([33.88385188727928,-117.88163244724275])
var JuniperHall = L.marker([33.88412799614093,-117.88234591484071])
var ResidentHallParking = L.marker([33.88429722371123,-117.88131058216096])
var FigHall = L.marker([33.88449317100487,-117.88165390491487])
var AcaciaHall = L.marker([33.88458223780776,-117.88253366947175])
var MazanitaHall = L.marker([33.88504093037007,-117.88263559341432])
var OakHall = L.marker([33.88506765024913,-117.8821635246277])
var WillowHall = L.marker([33.885415007915526,-117.88243174552917])
var ElmHall = L.marker([33.88513890321907,-117.8816592693329])
var CypressHall = L.marker([33.8857668174437,-117.88237273693086])
var SycamoreValencia = L.marker([33.886074092933264,-117.88169682025911])
var EnvironmentalHealth = L.marker([33.88504928033317,-117.88942694664001])
var ArboretumMuseum = L.marker([33.8881487296391,-117.8841269016266])
var FullertonArboretumParking = L.marker([33.88802459849032,-117.88519442081453])
var BirchHall = L.marker([33.884542157757956,-117.88215011358264])



L.marker([33.88739670088401,-117.88914531469347]).addTo(map) // Lot A
L.marker([33.888228886602846,-117.88657844066621]).addTo(map) // Lot A South
L.marker([33.88489786727004,-117.88873493671419]).addTo(map) // Lot G
L.marker([33.88667917748236,-117.88701295852663]).addTo(map) // Titan Stadium
L.marker([33.88674152265657,-117.88546800613405]).addTo(map) // Goodwin Field
L.marker([33.88598948108825,-117.8851354122162]).addTo(map) // Anderson Family Field
L.marker([33.88515616006058,-117.8862512111664]).addTo(map) //Track and Field
L.marker([33.884122985837244,-117.8878176212311]).addTo(map) // Lot D
L.marker([33.884122985837244,-117.8878176212311]).addTo(map) // Tennis Court
L.marker([33.88307198598094,-117.88857936859132]).addTo(map) // State College Parking Structure
L.marker([33.88312542723584,-117.88763523101808]).addTo(map) // Student Recreation Center
L.marker([33.88243570170432,-117.88880467414857]).addTo(map) // Lot R
L.marker([33.88304136900779,-117.88939476029556]).addTo(map) // University Police
L.marker([33.88167861214047,-117.88944840447586]).addTo(map) // Golleher Alumni House
L.marker([33.88305472926149,-117.886412143871]).addTo(map) // Titan Gym
L.marker([33.882694001677216,-117.8859078885762]).addTo(map) //Kinesiology and Health Science
L.marker([33.88177157868061,-117.88864374160768]).addTo(map)//Titan Student Union
L.marker([33.88182502047821,-117.88684129714967]).addTo(map) //Bookstore
L.marker([33.88039098730793,-117.88849353790285]).addTo(map) // Visual Art
L.marker([33.88299683481367,-117.88429856300355]).addTo(map) // Student Health and Counseling Center
L.marker([33.88142420618036,-117.88534998893739]).addTo(map) // Pollak Library
L.marker([33.881352950108074,-117.8842878341675]).addTo(map) // Education Classroom
L.marker([33.87966060090187,-117.8854787349701]).addTo(map) //McCarthy Hall
L.marker([33.880569129385435,-117.88666963577272]).addTo(map) //Clayes Performing Arts Center
L.marker([33.879015383929314,-117.888520359993]).addTo(map) // Nutwood Parking Structure
L.marker([33.878324512029835,-117.88885831832887]).addTo(map) // Lot C West
L.marker([33.87857391687398,-117.88717389106752]).addTo(map) // Lot C East
L.marker([33.87909053887517,-117.88583278656007]).addTo(map) // Dan Black Hall
L.marker([33.87901037359725,-117.88448095321657]).addTo(map) // Langsdorg Hall
L.marker([33.87961606494317,-117.88416981697083]).addTo(map) // Gordon Hall
L.marker([33.88040880153244,-117.88415908813478]).addTo(map) // Humanities and Social Science
L.marker([33.88382962039666,-117.88415908813478]).addTo(map) // Titan House
L.marker([33.88414135622448,-117.88416981697083]).addTo(map) // Military Complex
L.marker([33.880872526755084,-117.89009749889375]).addTo(map) // Titan Hall
L.marker([33.88122435501452,-117.89058029651643]).addTo(map) // College ParkWest
L.marker([33.879072724375476,-117.88348317146301]).addTo(map) // Mihaylo-Hall
L.marker([33.88019503059313,-117.8830111026764]).addTo(map) // Lot F
L.marker([33.881513276187036,-117.88304328918458]).addTo(map)// Lot I
L.marker([33.88032863749295,-117.88177728652956]).addTo(map) // Eastside Parking Structure
L.marker([33.8812549729115,-117.88164854049684]).addTo(map) // Eastside Parking Structure 2
L.marker([33.88270290854949,-117.88323640823366]).addTo(map) // Engineering North West
L.marker([33.882324365656906,-117.88324177265169]).addTo(map) // Engineering
L.marker([33.88195027456017,-117.88324177265169]).addTo(map) // Engineering South West
L.marker([33.8819591815101,-117.88268923759462]).addTo(map) // Engineering South East
L.marker([33.88231100528884,-117.88264095783235]).addTo(map) // Computer Science
L.marker([33.8826717344924,-117.88273215293886]).addTo(map) // Engineering North East
L.marker([33.88327739984853,-117.88324713706972]).addTo(map) // Ruby Gerontology Center
L.marker([33.88389196765335,-117.88363873958588]).addTo(map) // Lot H
L.marker([33.884301677063824,-117.88288772106172]).addTo(map) // Lot J
L.marker([33.88314825097883,-117.88232982158662]).addTo(map) // Gastronome
L.marker([33.88359359108361,-117.88278043270113]).addTo(map) // Pine Hall
L.marker([33.879451838394594,-117.88695931434631]).addTo(map) // Greenhouse Complex
L.marker([33.88385188727928,-117.88163244724275]).addTo(map) // Holly Hall
L.marker([33.88412799614093,-117.88234591484071]).addTo(map) // Juniper Hall
L.marker([33.88429722371123,-117.88131058216096]).addTo(map) // Resident Hall Parking
L.marker([33.88449317100487,-117.88165390491487]).addTo(map) // Fig Hall
L.marker([33.88458223780776,-117.88253366947175]).addTo(map) // Acacia Hall
L.marker([33.88504093037007,-117.88263559341432]).addTo(map) // Manzanita Hall
L.marker([33.88506765024913,-117.8821635246277]).addTo(map) // Oak Hall
L.marker([33.885415007915526,-117.88243174552917]).addTo(map) // Willow Hall
L.marker([33.88513890321907,-117.8816592693329]).addTo(map) // Elm Hall
L.marker([33.8857668174437,-117.88237273693086]).addTo(map) // Cypress Hall
L.marker([33.886074092933264,-117.88169682025911]).addTo(map) // Sycamore/Valencia Hall
L.marker([33.88504928033317,-117.88942694664001]).addTo(map) // Environmental Health and Safety
L.marker([33.8881487296391,-117.8841269016266]).addTo(map) // Arboretum Museum
L.marker([33.88802459849032,-117.88519442081453]).addTo(map) // Fullerton Arboretum Parking
L.marker([33.884542157757956,-117.88215011358264]).addTo(map) //Birch Hall
