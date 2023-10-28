// Dev Data Panel
setInterval(updateData, 10);
function updateData(){
  userPosition.innerHTML = numberFormater(window.scrollY, 0, 0) + ' px';
  if (topPla){
    topPlaNAME.innerHTML = topPla.name;
    topPlaDISTANCE.innerHTML = numberFormater(topPla.userDis, 0, 0) + ' px';
  }
  curPlaNAME.innerHTML = curPla.name;
  curPlaTOP.innerHTML = numberFormater(curPla.top, 0, 0) + ' px';
  curPlaBOTTOM.innerHTML = numberFormater(curPla.bottom, 0, 0) + ' px';

  if (botPla){
    botPlaNAME.innerHTML = botPla.name;
    botPlaDISTANCE.innerHTML = numberFormater(botPla.userDis, 0, 0) + ' px';
  }

  // starData2.innerHTML = numberFormater(canvas5.dots.length, 0, 0);
  // starData3.innerHTML = canvas5.density;
  // starData4.innerHTML = Math.round(canvas5.totalDots);
}

// Click Function
dev.addEventListener('click', () => {
  panel.classList.toggle("hidden");
}, false);