// Functions to locate the user's position when first loading
async function searchPlanets(planet) {
  let a = planet.getBoundingClientRect(); // Get Planet Position
  if (a.bottom <= window.innerHeight){ // If Planet Exits from Above
    return false;
  } else if (a.top >= window.innerHeight){ // If Planet Exits from Below
    let index = planetsData.findIndex(name => name.name === planet.id);
    botPla = planetsData[index];
    topPla = planetsData[index - 1];
    return true;
  }
};
async function checkPlanets() {
  for (let planet of image) {
    let isBelowViewport = await searchPlanets(planet);
    if (isBelowViewport) {
      break; // Stop the loop when a planet is detected below the viewport
    }
  }
}
checkPlanets();

// Functions to update the current planet data
function handlePlanetEnter(entry) {
  let index = planetsData.findIndex(planet => planet.name === entry.target.id);
  curPla = planetsData[index];
  curPla.top = curPla.img.getBoundingClientRect().top;
  curPla.bottom = curPla.img.getBoundingClientRect().bottom;

  if (curPla.name === 'Sun') {
      topPla = { ...template }; // Clear topPla properties using the template
  } else {
      topPla = planetsData[index - 1];
  }
  if (curPla.name === 'Neptune') {
    botPla = { ...template }; // Clear topPla properties using the template
  } else {
    botPla = planetsData[index + 1];
  }
}
function handlePlanetExit(entry) {
    curPla = template; // Clear Current Planet Data
    let rect = entry.target.getBoundingClientRect();
    
    let index = planetsData.findIndex(planet => planet.name === entry.target.id);
    
    if (rect.bottom <= window.innerHeight) {
      topPla = planetsData[index];
      botPla = planetsData[index + 1];
      
    } else if (rect.top >= window.innerHeight) {
      botPla = planetsData[index];
      topPla = planetsData[index - 1];
    }
}
function planetObserverCallback(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          handlePlanetEnter(entry);
      } else {
          handlePlanetExit(entry);
      }
  });
}
let planetObserver = new IntersectionObserver(planetObserverCallback, { threshold: 0 });

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Event Listeners

function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0);
}
image.forEach(planet => {
  if (isPartiallyInViewport(planet)) {
    planetObserver.observe(planet);
  }
})
document.addEventListener('scroll', () => {
  image.forEach(planet => {
    if (isPartiallyInViewport(planet)) {
      planetObserver.observe(planet);
    }
  });
  space.forEach(space => {
    if (isPartiallyInViewport(space) && !curPla.name) {
      let index = planetsData.findIndex(planet => planet.name === space.id);
      topPla = planetsData[index];
      botPla = planetsData[index + 1];
    }
  });
});

function updateViewportDis() {
  if (topPla && topPla.img && curPla.name !== "Sun") {
      topPla.userDis = topPla.img.getBoundingClientRect().bottom * -1;
  }
  if (botPla && botPla.img && curPla.name !== "Neptune") {
      botPla.userDis = botPla.img.getBoundingClientRect().top;
  }
  if (curPla && curPla.name) {
      let a = curPla.img.getBoundingClientRect();
      curPla.top = a.top;
      curPla.bottom = a.bottom;
  }
}

// Distance Updating
window.addEventListener("scroll", updateViewportDis);