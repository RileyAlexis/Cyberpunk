import {generatePlanets, planetClass, factions, planets} from './planets.js';

let canvas = document.getElementById('stellar'),
    context = canvas.getContext('2d');

let numberOfPlanets = 80;
let mouse = {x:0, y:0};
let clicks = false;

canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    clicks=false;
});

canvas.addEventListener('click', function() {
    clicks=true;
    console.log(clicks + ' event listener');
});

function getLength(str) {

return [...str].length;
}

//Reset on screen resize
function resize() {

canvas.setAttribute('width', window.innerWidth-30);
canvas.setAttribute('height', window.innerHeight-30);
redraw();
}

function drawspot(x,y,radius,startAngle,endAngle, color) 
{
context.beginPath();
context.fillStyle = color;
context.strokeStyle = color;
context.arc(x,y, radius, startAngle, endAngle);
context.stroke();



};

function drawname(x,y,text, color, font) {
    context.font = font;
    context.fillStyle = color;
    context.fillText(text, x-30, y-8);
}

function drawStats(x,y,index) {

let cntr = (x + getLength(planets[index].Pname));
let indent = (x+ getLength(planets[index].Pname)) + 50;

    context.font = "16pt Arial, sans-serif";
    context.strokeStyle = "green";
    context.fillStyle = "rgba(120, 200, 120, 1)";
    context.shadowColor = "green";
    context.shadowBlur = 15;
    context.strokeRect(x,y, 200, 300);
    context.fillRect(x,y,200,300);

    context.fillStyle = "white";
    context.fillText(planets[index].Pname, cntr, y+20);

    context.font = "12pt Arial, sans-serif";
    context.fillText(planets[index].faction, indent, y+60);
    context.fillText(Math.round(planets[index].population)+ 'b', indent, y+80);
    context.fillText(planets[index].Pclass, indent, y+100);
    context.fillText(Math.round(planets[index].techLevel), indent, y+120);
    console.log(planets[index].Pname);
}


function redraw() {
    context.globalCompositeOperation="source-over";

context.clearRect(0,0, canvas.width, canvas.height);  
for (let i=0; i<planets.length; i++) {

//let mouseX = document.addEventListener('clientX', );
//let mouseY = document.addEventListener('clientY');

let mapX = planets[i].PositionX;
let mapY = planets[i].PositionY;

let areaLowX = planets[i].PositionX - 20;
let areaHighX = planets[i].PositionX + 20;
let areaLowY = planets[i].PositionY - 20;
let areaHighY = planets[i].PositionY + 20;



if ((mouse.x > areaLowX && mouse.x <=areaHighX) &&  (mouse.y > areaLowY && mouse.y <=areaHighY)
    && (clicks==true))
{
    drawStats(mapX+40, mapY, i);
    drawspot(mapX, mapY, 6,0, 2*Math.PI, "green");
    drawname(mapX, mapY, planets[i].Pname, "green", "19pt Arial, san-serif");
    console.log(clicks);
}
else if ((mouse.x > areaLowX && mouse.x <=areaHighX) &&  (mouse.y > areaLowY && mouse.y <=areaHighY) && (clicks==false))
 {
        drawspot(mapX, mapY, 6,0, 2*Math.PI, "green");
        drawname(mapX, mapY, planets[i].Pname, "green", "19pt Arial, san-serif");
    }

else {
drawspot(mapX, mapY, 3,0, 2*Math.PI, "white");
drawname(mapX, mapY, planets[i].Pname, "white", "10pt Arial, sans-serif");
}
}
}



    generatePlanets(80);
    canvas.addEventListener('resize', resize());
    //console.table(planets);
    //console.log(planets[0].Pname, '', planets[0].Pclass);

    setInterval(redraw, 10);


