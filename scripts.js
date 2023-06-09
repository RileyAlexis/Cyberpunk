import {generatePlanets, planetClass, factions, planets} from './planets.js';

const mainMenu = [
    "Spacedock" , 
    "Carnival" , 
    "Supplier" ,
    "Mechanic",
    "Quarks",
    "Promenade",
    "Bridge",
    "Gardens",
    "Shuttlebay",
    "Ore Processing",
    "Security Office",
    "Hospital",
    "Airlock",
    "Stellar Cartography 2",
    "Holodeck Trainer"
]
let menuOptions = new Array();

const headerGraphic = {
    Main: '',
    Spacedock: "./art/bx25a0QeKkKYCPrn6uMo--1--b4856.jpg",
    Carnival: "",
    Supplier: "",
    Mechanic: "",
}

//Display Header Graphic
function displayHeader(graphic) {
    const header = document.querySelector('.headerGraphic');
    const img = document.createElement('img');
    img.setAttribute('src', graphic);
    header.append(img);
}

//Call functions for places
function gotoPlace(placeName) {
    switch (placeName) {
    case 'Spacedock': window.location.href = "./Spacedock.html"; break
    case mainMenu[1]: console.log(mainMenu[1]); break;
    case mainMenu[2]: console.log(mainMenu[2]); break;
    case mainMenu[3]: console.log(mainMenu[3]); break;
    case mainMenu[4]: console.log(mainMenu[4]); break;
    case mainMenu[5]: console.log(mainMenu[5]); break;
    case mainMenu[6]: console.log(mainMenu[6]); break;
    case mainMenu[7]: console.log(mainMenu[7]); break;
    case mainMenu[8]: console.log(mainMenu[8]); break;
    case mainMenu[9]: console.log(mainMenu[9]); break;
    case mainMenu[10]: console.log(mainMenu[10]); break;
    case mainMenu[11]: console.log(mainMenu[11]); break;
    case mainMenu[12]: console.log(mainMenu[12]); break;
    case 'Stellar Cartography 2': window.location.href = "./StellarCart2.html"; break;
    case 'Holodeck Trainer': window.location.href = "./holotrainer.html"; break;
    default: return "Error not found";
    }
    }

    //Dynamic Main Menu Generator
function makeMenu(menuOptions) {

//Creates first 7 options in first column
    for (let i = 0; i<7 && mainMenu[i] != undefined; i++) {

const container = document.querySelector('.menuMain');
const div = document.createElement('div');
div.classList.add('menuPanel');
div.textContent = mainMenu.at([menuOptions[i]]);
container.appendChild(div);
div.addEventListener('mouseover', function() {
    div.classList.add('menuActive');
});
div.addEventListener('mouseleave', function() {
    div.classList.remove('menuActive');
});
div.addEventListener('click', function() {
    gotoPlace(mainMenu[menuOptions[i]]);
    
});
}


//Create second column after 7 options
if(menuOptions.length>7) {

    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('menuMain');
    div.classList.add('2ndCol');
    container.appendChild(div);

    //console.log(container);


for (let i=7; i<menuOptions.length && mainMenu[i] !=undefined; i++) {
    const container = document.querySelector('.container').lastElementChild;
    const div = document.createElement('div');
    div.classList.add('menuPanel');
    div.textContent = mainMenu.at([menuOptions[i]]);
    container.appendChild(div);
    div.addEventListener('mouseover', function() {
        div.classList.add('menuActive');
        document.body.style.cursor = "pointer";
    });
    div.addEventListener('mouseleave', function() {
        div.classList.remove('menuActive');
        document.body.style.cursor = "auto";
    });
    div.addEventListener('click', function() {
        
        gotoPlace(mainMenu[menuOptions[i]]);
        //console.log(mainMenu[options[i]]);
    });

}

}


} //End of makeMenu function




displayHeader(headerGraphic.Spacedock);

menuOptions = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14];
makeMenu(menuOptions);
