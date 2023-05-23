// Planet Info Paragraphs
var info = document.querySelectorAll(".info");

// Planet Images
let img = document.querySelectorAll(".img")

// Planet Divs
let planet = document.querySelectorAll(".planet");

// Navigation Buttons
let topnav = document.querySelectorAll(".topnav");
let buttomnav = document.querySelectorAll(".buttomnav");
let navicon = document.querySelectorAll(".navicon");

// Space Divs
let spacediv = document.querySelectorAll(".space");

// Navigation Buttons Functionality
var b = innerHeight / 2;

topnav[0].addEventListener('click', navsun, false);
navicon[0].addEventListener('click', navsun, false);
function navsun() {
  window.scroll({top: 0, behavior: 'smooth'});
}
buttomnav[0].addEventListener('click', navmer, false);
topnav[1].addEventListener('click', navmer, false);
navicon[1].addEventListener('click', navmer, false);
function navmer() {
  var i = planet[0].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[1].addEventListener('click', navven, false);
topnav[2].addEventListener('click', navven, false);
navicon[2].addEventListener('click', navven, false);
function navven() {
  var i = planet[1].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[2].addEventListener('click', navear, false);
topnav[3].addEventListener('click', navear, false);
navicon[3].addEventListener('click', navear, false);
function navear() {
  var i = planet[2].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[3].addEventListener('click', navmar, false);
topnav[4].addEventListener('click', navmar, false);
navicon[4].addEventListener('click', navmar, false);
function navmar() {
  var i = planet[3].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[4].addEventListener('click', navcer, false);
topnav[5].addEventListener('click', navcer, false);
navicon[5].addEventListener('click', navcer, false);
function navcer() {
  var i = planet[4].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[5].addEventListener('click', navjup, false);
topnav[6].addEventListener('click', navjup, false);
navicon[6].addEventListener('click', navjup, false);
function navjup() {
  var i = planet[5].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[6].addEventListener('click', navsat, false);
topnav[7].addEventListener('click', navsat, false);
navicon[7].addEventListener('click', navsat, false);
function navsat() {
  var i = planet[6].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[7].addEventListener('click', navura, false);
topnav[8].addEventListener('click', navura, false);
navicon[8].addEventListener('click', navura, false);
function navura() {
  var i = planet[7].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[8].addEventListener('click', navnep, false);
topnav[9].addEventListener('click', navnep, false);
navicon[9].addEventListener('click', navnep, false);
function navnep() {
  var i = planet[8].getBoundingClientRect();
  var a = i.top + document.documentElement.scrollTop;
  var c = (i.bottom - i.top)/2;
  var p = a - b + c;
  window.scroll({top: p, behavior: 'smooth'});
}
buttomnav[9].addEventListener('click', navplu, false);
navicon[10].addEventListener('click', navplu, false);
function navplu() {
    planet[9].scrollIntoView({behavior: "smooth"});
}

window.addEventListener("load", addClassOnScroll);
window.addEventListener("scroll", addClassOnScroll);

function addClassOnScroll() {
  // var audio = document.getElementById("navsound");
  // audio.play();

  var sunBND = img[0].getBoundingClientRect().bottom * -1;
  var sunBottomR = Math.round(sunBND);
  var sunBottomF = sunBottomR.toLocaleString();
  sunSpan.innerHTML = sunBottomF;

  var merBND = img[1].getBoundingClientRect();
  var merTop = merBND.top - window.innerHeight;
  var merBottom = merBND.bottom * -1;
  var merTopR = Math.round(merTop);
  var merBottomR = Math.round(merBottom);
  var merTopF = merTopR.toLocaleString();
  var merBottomF = merBottomR.toLocaleString();
  downToMerSpan.innerHTML = merTopF;
  upToMerSpan.innerHTML = merBottomF;

  var venBND = img[2].getBoundingClientRect();
  var venTop = venBND.top - window.innerHeight;
  var venBottom = venBND.bottom * -1;
  var venTopR = Math.round(venTop);
  var venBottomR = Math.round(venBottom);
  var venTopF = venTopR.toLocaleString();
  var venBottomF = venBottomR.toLocaleString();
  downToVenSpan.innerHTML = venTopF;
  upToVenSpan.innerHTML = venBottomF;

  var earBND = img[3].getBoundingClientRect();
  var earTop = earBND.top - window.innerHeight;
  var earBottom = earBND.bottom * -1;
  var earTopR = Math.round(earTop);
  var earBottomR = Math.round(earBottom);
  var earTopF = earTopR.toLocaleString();
  var earBottomF = earBottomR.toLocaleString();
  downToEarSpan.innerHTML = earTopF;
  upToEarSpan.innerHTML = earBottomF;

  var marBND = img[4].getBoundingClientRect();
  var marTop = marBND.top - window.innerHeight;
  var marBottom = marBND.bottom * -1;
  var marTopR = Math.round(marTop);
  var marBottomR = Math.round(marBottom);
  var marTopF = marTopR.toLocaleString();
  var marBottomF = marBottomR.toLocaleString();
  downToMarSpan.innerHTML = marTopF;
  upToMarSpan.innerHTML = marBottomF;

  var cerBND = img[5].getBoundingClientRect();
  var cerTop = cerBND.top - window.innerHeight;
  var cerBottom = cerBND.bottom * -1;
  var cerTopR = Math.round(cerTop);
  var cerBottomR = Math.round(cerBottom);
  var cerTopF = cerTopR.toLocaleString();
  var cerBottomF = cerBottomR.toLocaleString();
  downToCerSpan.innerHTML = cerTopF;
  upToCerSpan.innerHTML = cerBottomF;

  var jupBND = img[6].getBoundingClientRect();
  var jupTop = jupBND.top - window.innerHeight;
  var jupBottom = jupBND.bottom * -1;
  var jupTopR = Math.round(jupTop);
  var jupBottomR = Math.round(jupBottom);
  var jupTopF = jupTopR.toLocaleString();
  var jupBottomF = jupBottomR.toLocaleString();
  downToJupSpan.innerHTML = jupTopF;
  upToJupSpan.innerHTML = jupBottomF;

  var satBND = img[7].getBoundingClientRect();
  var satTop = satBND.top - window.innerHeight;
  var satBottom = satBND.bottom * -1;
  var satTopR = Math.round(satTop);
  var satBottomR = Math.round(satBottom);
  var satTopF = satTopR.toLocaleString();
  var satBottomF = satBottomR.toLocaleString();
  downToSatSpan.innerHTML = satTopF;
  upToSatSpan.innerHTML = satBottomF;

  var uraBND = img[8].getBoundingClientRect();
  var uraTop = uraBND.top - window.innerHeight;
  var uraBottom = uraBND.bottom * -1;
  var uraTopR = Math.round(uraTop);
  var uraBottomR = Math.round(uraBottom);
  var uraTopF = uraTopR.toLocaleString();
  var uraBottomF = uraBottomR.toLocaleString();
  downToUraSpan.innerHTML = uraTopF;
  upToUraSpan.innerHTML = uraBottomF;

  var nepBND = img[9].getBoundingClientRect();
  var nepTop = nepBND.top - window.innerHeight;
  var nepBottom = nepBND.bottom * -1;
  var nepTopR = Math.round(nepTop);
  var nepBottomR = Math.round(nepBottom);
  var nepTopF = nepTopR.toLocaleString();
  var nepBottomF = nepBottomR.toLocaleString();
  downToNepSpan.innerHTML = nepTopF;
  upToNepSpan.innerHTML = nepBottomF;

  var pluBND = img[10].getBoundingClientRect();
  var pluTop = pluBND.top - window.innerHeight;
  var pluTopR = Math.round(pluTop);
  var pluTopF = pluTopR.toLocaleString();
  downToPluSpan.innerHTML = pluTopF;

// Sidebar icons Display Setting
var rect0 = img[0].getBoundingClientRect();
var rect1 = img[1].getBoundingClientRect();
var rect2 = img[2].getBoundingClientRect();
var rect3 = img[3].getBoundingClientRect();
var rect4 = img[4].getBoundingClientRect();
var rect5 = img[5].getBoundingClientRect();
var rect6 = img[6].getBoundingClientRect();
var rect7 = img[7].getBoundingClientRect();
var rect8 = img[8].getBoundingClientRect();
var rect9 = img[9].getBoundingClientRect();
var rect10 = img[10].getBoundingClientRect();

if (rect0.top >= 0 && rect0.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[0].classList.remove("opacity");
  navicon[1].classList.add("opacity");
} else {
  navicon[0].classList.add("opacity");
};
if (rect1.top >= 0 && rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[0].classList.add("opacity");
  navicon[1].classList.remove("opacity");
  navicon[2].classList.add("opacity");
} else {
  navicon[1].classList.add("opacity");
};
if (rect2.top >= 0 && rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[1].classList.add("opacity");
  navicon[2].classList.remove("opacity");
  navicon[3].classList.add("opacity");
} else {
  navicon[2].classList.add("opacity");
};
if (rect3.top >= 0 && rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[2].classList.add("opacity");
  navicon[3].classList.remove("opacity");
  navicon[4].classList.add("opacity");
} else {
  navicon[3].classList.add("opacity");
};
if (rect4.top >= 0 && rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[3].classList.add("opacity");
  navicon[4].classList.remove("opacity");
  navicon[5].classList.add("opacity");
} else {
  navicon[4].classList.add("opacity");
};
if (rect5.top >= 0 && rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[4].classList.add("opacity");
  navicon[5].classList.remove("opacity");
  navicon[6].classList.add("opacity");
} else {
  navicon[5].classList.add("opacity");
};
if (rect6.top >= 0 && rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[5].classList.add("opacity");
  navicon[6].classList.remove("opacity");
  navicon[7].classList.add("opacity");
} else {
  navicon[6].classList.add("opacity");
};
if (rect7.top >= 0 && rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[6].classList.add("opacity");
  navicon[7].classList.remove("opacity");
  navicon[8].classList.add("opacity");
} else {
  navicon[7].classList.add("opacity");
};
if (rect8.top >= 0 && rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[7].classList.add("opacity");
  navicon[8].classList.remove("opacity");
  navicon[9].classList.add("opacity");
} else {
  navicon[8].classList.add("opacity");
};
if (rect9.top >= 0 && rect9.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[8].classList.add("opacity");
  navicon[9].classList.remove("opacity");
  navicon[10].classList.add("opacity");
} else {
  navicon[10].classList.add("opacity");
};
if (rect10.top >= 0 && rect10.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
  navicon[9].classList.add("opacity");
  navicon[10].classList.remove("opacity");
} else {
  navicon[10].classList.add("opacity");
};
// Planet Information Display Settings

  if (!topnav[0].classList.contains("hidden") && !buttomnav[1].classList.contains("hidden")){
    info[0].classList.remove("hidden");
  } else {
    info[0].classList.add("hidden");
  };
  if (!topnav[1].classList.contains("hidden") && !buttomnav[2].classList.contains("hidden")){
    info[1].classList.remove("hidden");
  } else {
    info[1].classList.add("hidden");
  };
  if (!topnav[2].classList.contains("hidden") && !buttomnav[3].classList.contains("hidden")){
    info[2].classList.remove("hidden");
  } else {
    info[2].classList.add("hidden");
  };
  if (!topnav[3].classList.contains("hidden") && !buttomnav[4].classList.contains("hidden")){
    info[3].classList.remove("hidden");
  } else {
    info[3].classList.add("hidden");
  };
  if (!topnav[4].classList.contains("hidden") && !buttomnav[5].classList.contains("hidden")){
    info[4].classList.remove("hidden");
  } else {
    info[4].classList.add("hidden");
  };
  if (!topnav[5].classList.contains("hidden") && !buttomnav[6].classList.contains("hidden")){
    info[5].classList.remove("hidden");
  } else {
    info[5].classList.add("hidden");
  };
  if (!topnav[6].classList.contains("hidden") && !buttomnav[7].classList.contains("hidden")){
    info[6].classList.remove("hidden");
  } else {
    info[6].classList.add("hidden");
  };
  if (!topnav[7].classList.contains("hidden") && !buttomnav[8].classList.contains("hidden")){
    info[7].classList.remove("hidden");
  } else {
    info[7].classList.add("hidden");
  };
  if (!topnav[8].classList.contains("hidden") && !buttomnav[9].classList.contains("hidden")){
    info[8].classList.remove("hidden");
  } else {
    info[8].classList.add("hidden");
  };
  if (!topnav[9].classList.contains("hidden") && buttomnav[8].classList.contains("hidden")){
    info[9].classList.remove("hidden");
  } else {
    info[9].classList.add("hidden");
  };
  
// Navigation Buttons Display Settings

  var tnavBND = topnav[0].getBoundingClientRect();
  var bnavBND = buttomnav[0].getBoundingClientRect();

  var sunmerBND = spacediv[0].getBoundingClientRect();
  if (sunmerBND.top >= tnavBND.top || sunmerBND.bottom <= tnavBND.bottom) {
    topnav[0].classList.add("hidden");
  } else {
    topnav[0].classList.remove("hidden");
  }
  if (sunmerBND.top >= bnavBND.top || sunmerBND.bottom <= bnavBND.bottom || merTopF <= 0) {
    buttomnav[0].classList.add("hidden");
  } else {
    buttomnav[0].classList.remove("hidden");
  }
  var mervenBND = spacediv[1].getBoundingClientRect();
  if (mervenBND.top >= tnavBND.top || mervenBND.bottom <= tnavBND.bottom || merBottomF <= 0) {
    topnav[1].classList.add("hidden");
  } else {
    topnav[1].classList.remove("hidden");
  }
  if (mervenBND.top >= bnavBND.top || mervenBND.bottom <= bnavBND.bottom || venTopF <= 0) {
    buttomnav[1].classList.add("hidden");
  } else {
    buttomnav[1].classList.remove("hidden");
  }
  var venearBND = spacediv[2].getBoundingClientRect();
  if (venearBND.top >= tnavBND.top || venearBND.bottom <= tnavBND.bottom || venBottomF <= 0) {
    topnav[2].classList.add("hidden");} else {topnav[2].classList.remove("hidden");}

  if (venearBND.top >= bnavBND.top || venearBND.bottom <= bnavBND.bottom || earTopF <= 0) {
    buttomnav[2].classList.add("hidden");
  } else {
    buttomnav[2].classList.remove("hidden");
  }
  var earmarBND = spacediv[3].getBoundingClientRect();
  if (earmarBND.top >= tnavBND.top || earmarBND.bottom <= tnavBND.bottom || earBottomF <= 0) {
    topnav[3].classList.add("hidden");
  } else {
    topnav[3].classList.remove("hidden");
  }
  if (earmarBND.top >= bnavBND.top || earmarBND.bottom <= bnavBND.bottom || marTopF <= 0) {
    buttomnav[3].classList.add("hidden");
  } else {
    buttomnav[3].classList.remove("hidden");
  }
  var marcerBND = spacediv[4].getBoundingClientRect();
  if (marcerBND.top >= tnavBND.top || marcerBND.bottom <= tnavBND.bottom || marBottomF <= 0) {
    topnav[4].classList.add("hidden");
  } else {
    topnav[4].classList.remove("hidden");
  }
  if (marcerBND.top >= bnavBND.top || marcerBND.bottom <= bnavBND.bottom || cerTopF <= 0) {
    buttomnav[4].classList.add("hidden");
  } else {
    buttomnav[4].classList.remove("hidden");
  }
  var carjupBND = spacediv[5].getBoundingClientRect();
  if (carjupBND.top >= tnavBND.top || carjupBND.bottom <= tnavBND.bottom || cerBottomF <= 0) {
    topnav[5].classList.add("hidden");
  } else {
    topnav[5].classList.remove("hidden");
  }
  if (carjupBND.top >= bnavBND.top || carjupBND.bottom <= bnavBND.bottom || jupTopF <= 0) {
    buttomnav[5].classList.add("hidden");
  } else {
    buttomnav[5].classList.remove("hidden");
  }
  var jupsatBND = spacediv[6].getBoundingClientRect();
  if (jupsatBND.top >= tnavBND.top || jupsatBND.bottom <= tnavBND.bottom || jupBottomF <= 0) {
    topnav[6].classList.add("hidden");
  } else {
    topnav[6].classList.remove("hidden");
  }
  if (jupsatBND.top >= bnavBND.top || jupsatBND.bottom <= bnavBND.bottom || satTopF <= 0) {
    buttomnav[6].classList.add("hidden");
  } else {
    buttomnav[6].classList.remove("hidden");
  }
  var saturaBND = spacediv[7].getBoundingClientRect();
  if (saturaBND.top >= tnavBND.top || saturaBND.bottom <= tnavBND.bottom || satBottomF <= 0) {
    topnav[7].classList.add("hidden");
  } else {
    topnav[7].classList.remove("hidden");
  }
  if (saturaBND.top >= bnavBND.top || saturaBND.bottom <= bnavBND.bottom || uraTopF <= 0) {
    buttomnav[7].classList.add("hidden");
  } else {
    buttomnav[7].classList.remove("hidden");
  }
  var uranepBND = spacediv[8].getBoundingClientRect();
  if (uranepBND.top >= tnavBND.top || uranepBND.bottom <= tnavBND.bottom || uraBottomF <= 0) {
    topnav[8].classList.add("hidden");
  } else {
    topnav[8].classList.remove("hidden");
  }
  if (uranepBND.top >= bnavBND.top || uranepBND.bottom <= bnavBND.bottom || nepTopF <= 0) {
    buttomnav[8].classList.add("hidden");
  } else {
    buttomnav[8].classList.remove("hidden");
  }
  var neppluBND = spacediv[9].getBoundingClientRect();
  if (neppluBND.top >= tnavBND.top || neppluBND.bottom <= tnavBND.bottom || nepBottomF <= 0) {
    topnav[9].classList.add("hidden");
  } else {
    topnav[9].classList.remove("hidden");
  }
  if (neppluBND.top >= bnavBND.top || neppluBND.bottom <= bnavBND.bottom || pluTopF <= 0) {
    buttomnav[9].classList.add("hidden");
  } else {
    buttomnav[9].classList.remove("hidden");
  }
}

