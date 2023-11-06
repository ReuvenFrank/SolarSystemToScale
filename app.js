const image = Array.from(document.querySelectorAll(".image"));
const planetsdiv = Array.from(document.querySelectorAll(".planetdiv"));
const space = Array.from(document.querySelectorAll(".space"));
const perihelion = Array.from(document.querySelectorAll(".perihelion"));
const aphelion = Array.from(document.querySelectorAll(".aphelion"));

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Dynamic elements

// Buttons
const topnav = document.querySelector(".topnav");
const bottomnav = document.querySelector(".bottomnav");
const sidebaricon = Array.from(document.querySelectorAll(".sidebaricon"));
// Elements
const title = Array.from(document.querySelectorAll(".title"));
const info = Array.from(document.querySelectorAll(".info"));
const scrollDownSign = document.getElementById("scroll");

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

var tnavBND = topnav.getBoundingClientRect();
var bnavBND = bottomnav.getBoundingClientRect();

const dev = document.querySelector('#dev');
const panel = document.querySelector('.data');

var curTime = {date: null, time: null}
var nexTime = {date: null, time: null}

let planetsData = [
  { name: "Sun",
    userDis: null,
    img: info[0], 
    div: info[0],
    info: info[0],
    top: null,
    bottom: null,
    sidebar: sidebaricon[0]
  },
  {name: "Mercury", 
    command: 199, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 46001,
    aphe: 69816,
    disSpa: disSpa1, 
    img: image[1], 
    div: planetsdiv[1],
    info: info[1],
    sidebar: sidebaricon[1],
    periDiv: perihelion[0],
    apheDiv: aphelion[0]
  },
  {name: "Venus", 
    command: 299, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 107477,
    aphe: 108939,
    disSpa: disSpa2,
    img: image[2], 
    div: planetsdiv[2], 
    info: info[2],
    sidebar: sidebaricon[2],
    periDiv: perihelion[1],
    apheDiv: aphelion[1]
  },
  {name: "Earth", 
    command: 399, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 147098,
    aphe: 152097,
    disSpa: disSpa3,
    img: image[3], 
    div: planetsdiv[3], 
    info: info[3],
    sidebar: sidebaricon[3],
    periDiv: perihelion[2],
    apheDiv: aphelion[2]
  },
  {name: "Mars", 
    command: 499, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 206650,
    aphe: 249261,
    disSpa: disSpa4,
    img: image[4], 
    div: planetsdiv[4], 
    info: info[4],
    sidebar: sidebaricon[4],
    periDiv: perihelion[3],
    apheDiv: aphelion[3]
  },
  {name: "Jupiter", 
    command: 599, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 740595,
    aphe: 816363,
    disSpa: disSpa5,
    img: image[5], 
    div: planetsdiv[5], 
    info: info[5],
    sidebar: sidebaricon[5],
    periDiv: perihelion[4],
    apheDiv: aphelion[4]
  },
  {name: "Saturn", 
    command: 699, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 1349467,
    aphe: 1503983,
    disSpa: disSpa6,
    img: image[6], 
    div: planetsdiv[6], 
    info: info[6],
    sidebar: sidebaricon[6],
    periDiv: perihelion[5],
    apheDiv: aphelion[5]
  },
  {name: "Uranus", 
    command: 799, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 2735555,
    aphe: 3006389,
    disSpa: disSpa7,
    img: image[7], 
    div: planetsdiv[7], 
    info: info[7],
    sidebar: sidebaricon[7],
    periDiv: perihelion[6],
    apheDiv: aphelion[6]
  },
  {name: "Neptune", 
    command: 899, 
    sunDis: null, 
    inc: null, 
    userDis: null, 
    top: null,
    bottom: null,
    peri: 4459631,
    aphe: 4536874,
    disSpa: disSpa8,
    img: image[8], 
    div: planetsdiv[8], 
    info: info[8],
    sidebar: sidebaricon[8],
    periDiv: perihelion[7],
    apheDiv: aphelion[7]
  },
];

const template = {name: null, top: null, bottom: null, userDis: null, img: null, div: null, info: null, sidebar: null, topSpa: null, botSpace: null};

// Global Planetary Variables
let topPla = template;
let curPla = template;
let botPla = template;

function numberFormater(number, min, max) {
  return new Intl.NumberFormat('en-US', {minimumFractionDigits: min, maximumFractionDigits: max}).format(number)
}
