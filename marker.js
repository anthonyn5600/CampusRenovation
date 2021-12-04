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

// function waypoint(point) {
//     //event.target.setOpacity(1);
//     point.setOpacity(1);
// }

var LotA = L.circleMarker([33.88739670088401, -117.88914531469347], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotA.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotA.setStyle({ opacity: 0 });
    })
});

var LotS = L.circleMarker([33.888228886602846, -117.88657844066621], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotS.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotS.setStyle({ opacity: 0 });
    })
});

/*
To Do:
-Need to set all of these area VARS to empty ones
-Map to hold all the long/lat coordinates and associate with the area VARS
-Iterate through to add the circleMarker properties and .addTo(map) to each one
    -This will resolve not having to manually add the properties one by one
*/

var LotG = L.circleMarker([33.88489786727004, -117.88873493671419], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotG.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotG.setStyle({ opacity: 0 });
    })
});
var TitanStadium = L.circleMarker([33.88667917748236, -117.88701295852663], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TitanStadium.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TitanStadium.setStyle({ opacity: 0 });
    })
});
var GoodwinField = L.circleMarker([33.88674152265657, -117.88546800613405], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    GoodwinField.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        GoodwinField.setStyle({ opacity: 0 });
    })
});
var AndersonField = L.circleMarker([33.88598948108825, -117.8851354122162], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    AndersonField.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        AndersonField.setStyle({ opacity: 0 });
    })
});
var TrackField = L.circleMarker([33.88515616006058, -117.8862512111664], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TrackField.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TrackField.setStyle({ opacity: 0 });
    })
});
var LotD = L.circleMarker([33.884122985837244, -117.8878176212311], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotD.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotD.setStyle({ opacity: 0 });
    })
});
// var TennisCt = L.circleMarker([33.884122985837244, -117.8878176212311], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
//     LotS.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
//         LotS.setStyle({ opacity: 0 });
//     })
// });
var StateParking = L.circleMarker([33.88307198598094, -117.88857936859132], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    StateParking.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        StateParking.setStyle({ opacity: 0 });
    })
});
var StudentRec = L.circleMarker([33.88312542723584, -117.88763523101808], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    StudentRec.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        StudentRec.setStyle({ opacity: 0 });
    })
});
var LotR = L.circleMarker([33.88243570170432, -117.88880467414857], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotR.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotR.setStyle({ opacity: 0 });
    })
});
var UnivPolice = L.circleMarker([33.88304136900779, -117.88939476029556], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    UnivPolice.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        UnivPolice.setStyle({ opacity: 0 });
    })
});
var Golleher = L.circleMarker([33.88167861214047, -117.88944840447586], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Golleher.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Golleher.setStyle({ opacity: 0 });
    })
});
var TitanGym = L.circleMarker([33.88305472926149, -117.886412143871], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TitanGym.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TitanGym.setStyle({ opacity: 0 });
    })
});
var Kinesiology = L.circleMarker([33.882694001677216, -117.8859078885762], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Kinesiology.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Kinesiology.setStyle({ opacity: 0 });
    })
});
var TitanUnion = L.circleMarker([33.88177157868061, -117.88864374160768], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TitanUnion.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TitanUnion.setStyle({ opacity: 0 });
    })
});
var Bookstore = L.circleMarker([33.88182502047821, -117.88684129714967], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Bookstore.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Bookstore.setStyle({ opacity: 0 });
    })
});
var VisualArt = L.circleMarker([33.88039098730793, -117.88849353790285], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    VisualArt.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        VisualArt.setStyle({ opacity: 0 });
    })
});
var StudentHealth = L.circleMarker([33.88299683481367, -117.88429856300355], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    StudentHealth.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        StudentHealth.setStyle({ opacity: 0 });
    })
});
var PollakLibrary = L.circleMarker([33.88142420618036, -117.88534998893739], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    PollakLibrary.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        PollackLibrary.setStyle({ opacity: 0 });
    })
});
var EducationClassroom = L.circleMarker([33.881352950108074, -117.8842878341675], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EducationClassroom.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EducationClassroom.setStyle({ opacity: 0 });
    })
});
var McCarthy = L.circleMarker([33.87966060090187, -117.8854787349701], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    McCarthy.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        McCarthy.setStyle({ opacity: 0 });
    })
});
var Clayes = L.circleMarker([33.880569129385435, -117.88666963577272], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Clayes.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Clayes.setStyle({ opacity: 0 });
    })
});
var Nutwood = L.circleMarker([33.879015383929314, -117.888520359993], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Nutwood.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Nutwood.setStyle({ opacity: 0 });
    })
});
var LotC = L.circleMarker([33.878324512029835, -117.88885831832887], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotC.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotC.setStyle({ opacity: 0 });
    })
});
var LotCE = L.circleMarker([33.87857391687398, -117.88717389106752], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotCE.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotCE.setStyle({ opacity: 0 });
    })
});
var DBH = L.circleMarker([33.87909053887517, -117.88583278656007], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    DBH.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        DBH.setStyle({ opacity: 0 });
    })
});
var Langsdorg = L.circleMarker([33.87901037359725, -117.88448095321657], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Langsdorg.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Langsdorg.setStyle({ opacity: 0 });
    })
});
var Gordon = L.circleMarker([33.87961606494317, -117.88416981697083], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Gordon.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Gordon.setStyle({ opacity: 0 });
    })
});
var Humanities = L.circleMarker([33.88040880153244, -117.88415908813478], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Humanities.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Humanities.setStyle({ opacity: 0 });
    })
});
var TitanHouse = L.circleMarker([33.88382962039666, -117.88415908813478], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TitanHouse.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TitanHouse.setStyle({ opacity: 0 });
    })
});
var CollegeParkWest = L.circleMarker([33.88122435501452, -117.89058029651643], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    CollegeParkWest.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        CollegeParkWest.setStyle({ opacity: 0 });
    })
});
var Mihaylo = L.circleMarker([33.879072724375476, -117.88348317146301], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Mihaylo.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Mihaylo.setStyle({ opacity: 0 });
    })
});
var LotF = L.circleMarker([33.88019503059313, -117.8830111026764], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotF.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotF.setStyle({ opacity: 0 });
    })
});
var LotI = L.circleMarker([33.881513276187036, -117.88304328918458], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotI.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotI.setStyle({ opacity: 0 });
    })
});
var EastsideParking1 = L.circleMarker([33.88032863749295, -117.88177728652956], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EastsideParking1.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EastsideParking1.setStyle({ opacity: 0 });
    })
});
var EastsideParking2 = L.circleMarker([33.8812549729115, -117.88164854049684], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EastsideParking2.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EastsideParking2.setStyle({ opacity: 0 });
    })
});
var EngineeringNW = L.circleMarker([33.88270290854949, -117.88323640823366], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EngineeringNW.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EngineeringNW.setStyle({ opacity: 0 });
    })
});
var Engineering = L.circleMarker([33.882324365656906, -117.88324177265169], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Engineering.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Engineering.setStyle({ opacity: 0 });
    })
});
var EngineeringSW = L.circleMarker([33.88195027456017, -117.88324177265169], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EngineeringSW.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EngineeringSW.setStyle({ opacity: 0 });
    })
});
var EngineeringSE = L.circleMarker([33.8819591815101, -117.88268923759462], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EngineeringSE.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EngineeringSE.setStyle({ opacity: 0 });
    })
});
var CS = L.circleMarker([33.88231100528884, -117.88264095783235], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    CS.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        CS.setStyle({ opacity: 0 });
    })
});
var EngineeringNE = L.circleMarker([33.8826717344924, -117.88273215293886], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EngineeringNE.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EngineeringNE.setStyle({ opacity: 0 });
    })
});
var RubyGerontology = L.circleMarker([33.88327739984853, -117.88324713706972], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    RubyGerontology.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        RubyGerontology.setStyle({ opacity: 0 });
    })
});
var LotH = L.circleMarker([33.88389196765335, -117.88363873958588], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotH.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotH.setStyle({ opacity: 0 });
    })
});
var LotJ = L.circleMarker([33.884301677063824, -117.88288772106172], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    LotJ.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        LotJ.setStyle({ opacity: 0 });
    })
});
var Gastronome = L.circleMarker([33.88314825097883, -117.88232982158662], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    Gastronome.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        Gastronome.setStyle({ opacity: 0 });
    })
});
var PineHall = L.circleMarker([33.88359359108361, -117.88278043270113], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    PineHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        PineHall.setStyle({ opacity: 0 });
    })
});
var GreenhouseComplex = L.circleMarker([33.879451838394594, -117.88695931434631], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    GreenhouseComplex.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        GreenhouseComplex.setStyle({ opacity: 0 });
    })
});
var HollyHall = L.circleMarker([33.88385188727928, -117.88163244724275], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    HollyHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        HollyHall.setStyle({ opacity: 0 });
    })
});
var JuniperHall = L.circleMarker([33.88412799614093, -117.88234591484071], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    JuniperHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        JuniperHall.setStyle({ opacity: 0 });
    })
});
var ResidentHallParking = L.circleMarker([33.88429722371123, -117.88131058216096], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    ResidentHallParking.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        ResidentHallParking.setStyle({ opacity: 0 });
    })
});
var FigHall = L.circleMarker([33.88449317100487, -117.88165390491487], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    FigHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        FigHall.setStyle({ opacity: 0 });
    })
});
var AcaciaHall = L.circleMarker([33.88458223780776, -117.88253366947175], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    AcaciaHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        AcaciaHall.setStyle({ opacity: 0 });
    })
});
var MazanitaHall = L.circleMarker([33.88504093037007, -117.88263559341432], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    MazanitaHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        MazanitaHall.setStyle({ opacity: 0 });
    })
});
var OakHall = L.circleMarker([33.88506765024913, -117.8821635246277], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    OakHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        OakHall.setStyle({ opacity: 0 });
    })
});
var WillowHall = L.circleMarker([33.885415007915526, -117.88243174552917], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    WillowHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        WillowHall.setStyle({ opacity: 0 });
    })
});
var ElmHall = L.circleMarker([33.88513890321907, -117.8816592693329], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    ElmHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        ElmHall.setStyle({ opacity: 0 });
    })
});
var CypressHall = L.circleMarker([33.8857668174437, -117.88237273693086], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    CypressHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        CypressHall.setStyle({ opacity: 0 });
    })
});
var SycamoreValencia = L.circleMarker([33.886074092933264, -117.88169682025911], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    SycamoreValencia.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        SycamoreValencia.setStyle({ opacity: 0 });
    })
});
var EnvironmentalHealth = L.circleMarker([33.88504928033317, -117.88942694664001], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    EnvironmentalHealth.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        EnvironmentalHealth.setStyle({ opacity: 0 });
    })
});
var ArboretumMuseum = L.circleMarker([33.8881487296391, -117.8841269016266], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    ArboretumMuseum.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        ArboretumMuseum.setStyle({ opacity: 0 });
    })
});
var FullertonArboretumParking = L.circleMarker([33.88802459849032, -117.88519442081453], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    FullertonArboretumParking.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        FullertonArboretumParking.setStyle({ opacity: 0 });
    })
});
var BirchHall = L.circleMarker([33.884542157757956, -117.88215011358264], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    BirchHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        BirchHall.setStyle({ opacity: 0 });
    })
});
var TitanHall = L.circleMarker([33.880872526755084, -117.89009749889375], { opacity: 0.0, radius: 50 }).addTo(map).on('mouseover', function (e) {
    TitanHall.setStyle({ opacity: 1.0 }).on('mouseout', function (e) {
        TitanHall.setStyle({ opacity: 0 });
    })
});

// L.marker([33.88489786727004, -117.88873493671419]).addTo(map)
// var TitanStadium = L.marker([33.88667917748236, -117.88701295852663]).addTo(map)
// var GoodwinField = L.marker([33.88674152265657, -117.88546800613405]).addTo(map)
// var AndersonField = L.marker([33.88598948108825, -117.8851354122162]).addTo(map)
// var TrackField = L.marker([33.88515616006058, -117.8862512111664]).addTo(map)
// var LotD = L.marker([33.884122985837244, -117.8878176212311]).addTo(map)
// var TennisCt = L.marker([33.884122985837244, -117.8878176212311]).addTo(map)
// var StateParking = L.marker([33.88307198598094, -117.88857936859132]).addTo(map)
// var StudentRec = L.marker([33.88312542723584, -117.88763523101808]).addTo(map)
// var LotR = L.marker([33.88243570170432, -117.88880467414857]).addTo(map)
// var UnivPolice = L.marker([33.88304136900779, -117.88939476029556]).addTo(map)
// var Golleher = L.marker([33.88167861214047, -117.88944840447586]).addTo(map)
// var TitanGym = L.marker([33.88305472926149, -117.886412143871]).addTo(map)
// var Kinesiology = L.marker([33.882694001677216, -117.8859078885762]).addTo(map)
// var TitanUnion = L.marker([33.88177157868061, -117.88864374160768]).addTo(map)
// var Bookstore = L.marker([33.88182502047821, -117.88684129714967]).addTo(map)
// var VisualArt = L.marker([33.88039098730793, -117.88849353790285]).addTo(map)
// var StudentHealth = L.marker([33.88299683481367, -117.88429856300355]).addTo(map)
// var PollakLibrary = L.marker([33.88142420618036, -117.88534998893739]).addTo(map)
// var EducationClassroom = L.marker([33.881352950108074, -117.8842878341675]).addTo(map)
// var McCarthy = L.marker([33.87966060090187, -117.8854787349701]).addTo(map)
// var Clayes = L.marker([33.880569129385435, -117.88666963577272]).addTo(map)
// var Nutwood = L.marker([33.879015383929314, -117.888520359993]).addTo(map)
// var LotC = L.marker([33.878324512029835, -117.88885831832887]).addTo(map)
// var LotCE = L.marker([33.87857391687398, -117.88717389106752]).addTo(map)
// var DBH = L.marker([33.87909053887517, -117.88583278656007]).addTo(map)
// var Langsdorg = L.marker([33.87901037359725, -117.88448095321657]).addTo(map)
// var Gordon = L.marker([33.87961606494317, -117.88416981697083]).addTo(map)
// var Humanities = L.marker([33.88040880153244, -117.88415908813478]).addTo(map)
// var TitanHouse = L.marker([33.88382962039666, -117.88415908813478]).addTo(map)
// var Military = L.marker([33.88414135622448, -117.88416981697083]).addTo(map)
// var TitanHall = L.marker([33.880872526755084, -117.89009749889375]).addTo(map)
// var CollegeParkWest = L.marker([33.88122435501452, -117.89058029651643]).addTo(map)
// var Mihaylo = L.marker([33.879072724375476, -117.88348317146301]).addTo(map)
// var LotF = L.marker([33.88019503059313, -117.8830111026764]).addTo(map)
// var LotI = L.marker([33.881513276187036, -117.88304328918458]).addTo(map)
// var EastsideParking1 = L.marker([33.88032863749295, -117.88177728652956]).addTo(map)
// var EastsideParking2 = L.marker([33.8812549729115, -117.88164854049684]).addTo(map)
// var EngineeringNW = L.marker([33.88270290854949, -117.88323640823366]).addTo(map)
// var Engineering = L.marker([33.882324365656906, -117.88324177265169]).addTo(map)
// var EngineeringSW = L.marker([33.88195027456017, -117.88324177265169]).addTo(map)
// var EngineeringSE = L.marker([33.8819591815101, -117.88268923759462]).addTo(map)
// var CS = L.marker([33.88231100528884, -117.88264095783235]).addTo(map)
// var EngineeringNE = L.marker([33.8826717344924, -117.88273215293886]).addTo(map)
// var RubyGerontology = L.marker([33.88327739984853, -117.88324713706972]).addTo(map)
// var LotH = L.marker([33.88389196765335, -117.88363873958588]).addTo(map)
// var LotJ = L.marker([33.884301677063824, -117.88288772106172]).addTo(map)
// var Gastronome = L.marker([33.88314825097883, -117.88232982158662]).addTo(map)
// var PineHall = L.marker([33.88359359108361, -117.88278043270113]).addTo(map)
// var GreenhouseComplex = L.marker([33.879451838394594, -117.88695931434631]).addTo(map)
// var HollyHall = L.marker([33.88385188727928, -117.88163244724275]).addTo(map)
// var JuniperHall = L.marker([33.88412799614093, -117.88234591484071]).addTo(map)
// var ResidentHallParking = L.marker([33.88429722371123, -117.88131058216096]).addTo(map)
// var FigHall = L.marker([33.88449317100487, -117.88165390491487]).addTo(map)
// var AcaciaHall = L.marker([33.88458223780776, -117.88253366947175]).addTo(map)
// var MazanitaHall = L.marker([33.88504093037007, -117.88263559341432]).addTo(map)
// var OakHall = L.marker([33.88506765024913, -117.8821635246277]).addTo(map)
// var WillowHall = L.marker([33.885415007915526, -117.88243174552917]).addTo(map)
// var ElmHall = L.marker([33.88513890321907, -117.8816592693329]).addTo(map)
// var CypressHall = L.marker([33.8857668174437, -117.88237273693086]).addTo(map)
// var SycamoreValencia = L.marker([33.886074092933264, -117.88169682025911]).addTo(map)
// var EnvironmentalHealth = L.marker([33.88504928033317, -117.88942694664001]).addTo(map)
// var ArboretumMuseum = L.marker([33.8881487296391, -117.8841269016266]).addTo(map)
// var FullertonArboretumParking = L.marker([33.88802459849032, -117.88519442081453]).addTo(map)
// var BirchHall = L.marker([33.884542157757956, -117.88215011358264]).addTo(map)
// var TitanHall = L.marker([33.880872526755084, -117.89009749889375]).addTo(map) // Titan Hall