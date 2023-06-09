const planets = new Array();

const factions = [
"Federation",
"Union of Jedi",
"Space Hippies",
"Evil Empire"
]

const planetClass = [
    "Gas Giant",
    "Habitable",
    "Desert",
    "Ocean",
    "Arid",
    "Barren",
]

const planetnames = [
"Abol",
"Agouto",
"Albmi",
"Alef",
"Amateru",
"Arber",
"Arion",
"Arkas",
"Asye",
"Aumatex",
"Awasis",
"Babylonia",
"Bagan",
"Baiduri",
"Bambaruush[6]",
"Barajeel",
"Beirut",
"Bendida",
"Bocaprins",
"Boinayel",
"Brahe",
"Bran",
"Buru",
"Bélisama",
"Caleuche",
"Cayahuanca",
"Chura",
"Cruinlagh",
"Cuptor",
"Dagon",
"Dimidium",
"Ditsö̀",
"Dopere",
"Draugr",
"Drukyul",
"Dulcinea",
"Eburonia",
"Eiger",
"Equiano",
"Eyeke",
"Finlay",
"Fold",
"Fortitudo",
"Galileo",
"Ganja",
"Guarani",
"Göktürk",
"Haik",
"Hairu",
"Halla",
"Harriot",
"Hiisi",
"Hypatia",
"Hämarik",
"Ibirapitá",
"Indépendance",
"Iolaus",
"Isagel",
"Isli",
"Ixbalanqué",
"Iztok",
"Janssen",
"Jebus",
"Kavian",
"Kererū",
"Khomsa",
"Koyopa’",
"Krotoa",
"Kráľomoc",
"Laligurans",
"Leklsullun",
"Lete",
"Lipperhey",
"Madalitso",
"Madriu",
"Maeping",
"Magor",
"Majriti",
"Makropulos",
"Mastika",
"Melquíades",
"Meztli",
"Mintome",
"Mulchatna",
"Nachtwacht",
"Nakanbé",
"Naqaỹa",
"Naron",
"Negoiu",
"Neri",
"Noifasui",
"Onasilos",
"Orbitar",
"Peitruss",
"Perwana",
"Phobetor",
"Pipitea",
"Pirx",
"Pollera",
"Poltergeist",
"Quijote",
"Ramajay",
"Riosar",
"Rocinante",
"Saffar",
"Samagiya",
"Samh",
"Sancho",
"Santamasa",
"Sazum",
"Sissi",
"Smertrios",
"Spe",
"Staburags",
"Sumajmajta",
"Surt",
"Tadmor",
"Tanzanite",
"Taphao Kaew",
"Taphao Thong",
"Tassili",
"Teberda",
"Thestias",
"Toge",
"Tondra",
"Trimobe",
"Tryzub",
"Tumearandu",
"Ugarit",
"Umbäässa",
"Veles",
"Victoriapeak",
"Viculus",
"Viriato",
"Vlasina",
"Vytis",
"Wadirum",
"Wangshu",
"Xolotlan",
"Xólotl",
"Yanyan",
"Yvaga",
"Ægir",
"Ġgantija",  
]

function rand(items) {
    // "|" for a kinda "int div"
    return items[items.length * Math.random() | 0];
}

function generatePlanets(number) {
//planet.set(planetAttributes);


//const homePlanet = new planet("Mars", 50,50, "Space Hippies", 50, "Arid", 
//'./art/8zEIezsJ6KAJowJYn1Jw--1--xoyw0.jpg', true, 50, 5);


for (let i=0; i<number; i++) {

let Pname = rand(planetnames);
let PositionX = Math.random() * window.innerWidth;
let PositionY = Math.random()* window.innerHeight;
let faction = rand(factions);
let population = Math.random() * 500;
let Pclass = rand(planetClass);
let priceIndex = Math.random() * 150;
let techLevel = Math.random() * 50;

//console.table(Pname, PositionX, PositionY, faction, population, Pclass, priceIndex, techLevel);

planets.push({Pname, PositionX, PositionY, faction, population, Pclass, priceIndex, techLevel});

/*planet["key_"+i] = {
    "key": +i,
    "name": Pname,
    "PositionX": PositionX,
    "PositionY": PositionY,
    "faction": faction,
    "population": population,
    "class": Pclass,
    "Graphic": '',
    "Starbase": true,
    "PriceIndex": priceIndex,
    "techLevel": techLevel
}*/
}
}

export {generatePlanets, planetClass, factions, planets};
