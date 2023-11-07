// Constants
const SCROLL_BEHAVIOR = 'smooth';
const nav = [topnav, bottomnav];
const OPACITY_100 = "100%";
const OPACITY_50 = "50%";
const OPACITY_25 = "25%";
const OPACITY_0 = "0%";

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Navigation Buttons Functions

function getCenter(element) {
  const rect = element.getBoundingClientRect();
  const elementCenter = rect.top + document.documentElement.scrollTop + (rect.bottom - rect.top) / 2;
  const targetScrollPosition = elementCenter - window.innerHeight / 2;

  return(targetScrollPosition);
};
function handleTopNavClick() {
  topnav.style.opacity = OPACITY_100;
  topnav.isScrolling = true;
  scrollToTarget(topPla);
};
function handleBottomNavClick() {
  bottomnav.style.opacity = OPACITY_100;
  bottomnav.isScrolling = true;
  scrollToTarget(botPla);
};
function scrollToTarget(element) {
  let start;
  let isUserScrolling = false;
  let duration = 10000;
  let initialValue = window.scrollY;
  let finalValue = getCenter(element.img);

  if (element.name === 'Sun') {
    finalValue = getCenter(element.info);
  };

  function easeInOutCubic(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1);
  }
  function checkUserScroll() {
    isUserScrolling = true;
    nav.forEach(element => {element.isScrolling = false;});
    window.removeEventListener('wheel', checkUserScroll);
  }
  window.addEventListener('wheel', checkUserScroll);

  function animate(timestamp) {
    if (!start) start = timestamp;
    let elapsed = timestamp - start;

    if (elapsed < duration && !isUserScrolling) {
      let progress = easeInOutCubic(elapsed / duration);
      let currentValue = initialValue + (finalValue - initialValue) * progress;
      window.scrollTo(0, currentValue);
      if (curPla.name === element.name) {
        nav.forEach(element => {element.isScrolling = false;});
        // nav.forEach(element => {element.style.opacity = OPACITY_50;});
      }
      if (curPla.name === element.name) {
        var a = sidebaricon.findIndex(element => element.id === curPla.name);
        sidebaricon[a].target = false;
      }
      requestAnimationFrame(animate);
    } else if(!isUserScrolling){
      window.scrollTo(0, finalValue);
    }
  }
  requestAnimationFrame(animate);
};
sidebaricon.forEach(element => {element.addEventListener('click', scrollToPla, false);});
function scrollToPla(){
  var a = planetsData[planetsData.findIndex(element => element.name === event.target.id)];
  scrollToTarget(a);
}
sidebaricon.forEach(element => {
  element.addEventListener('click', () => {
    setOpacity(element, OPACITY_100);
    element.target = true;
  }
)});

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

function setSidebarIconOpacity(element) {
  if ((curPla && element.id === curPla.name) || (element.target)) {
    element.style.opacity = OPACITY_100;
  } else if (topPla && element.id === topPla.name) {
    element.style.opacity = OPACITY_50;
  } else if (botPla && element.id === botPla.name) {
    element.style.opacity = OPACITY_50;
  } else {
    element.style.opacity = OPACITY_25;
  }
}
function setInfoOpacity(element) {
  if (element.getBoundingClientRect().top >= tnavBND.bottom && 
      element.getBoundingClientRect().bottom <= bnavBND.top) {
    element.style.opacity = OPACITY_100;
  } else {
    element.style.opacity = OPACITY_0;
  }
}

function isTopNav(element) {
  return element === topnav;
}

function isBottomNav(element) {
  return element === bottomnav;
}

function setOpacity(element, value) {
  element.style.opacity = value;
}

function setNavigationOpacity(element) {
  if ((isTopNav(element) 
    && (curPla.bottom > 0 && curPla.top <= tnavBND.bottom || curPla.name === 'Sun')) ||
    (isTopNav(element) && topPla.name === 'Neptune')) {
      setOpacity(element, OPACITY_0);
      element.intersecting = true;

  } else if (isBottomNav(element) && (
    (curPla.bottom > bnavBND.top && curPla.top <= window.innerHeight) ||
    (curPla.name === 'Sun' && curPla.bottom >= bnavBND.top) ||
    curPla.name === 'Neptune' ||
    (topPla.name === 'Neptune' && curPla.top <= bnavBND.bottom)
  )) {
      setOpacity(element, OPACITY_0);
      element.intersecting = true;

  } else if (!element.isScrolling) {
      setOpacity(element, OPACITY_50);
      element.intersecting = false;
  }
}

// Navigation functions

function updateDistanceSpans() {
  // Update spans
  if (curPla && curPla.name !== "Sun" && topPla){
    topNam.textContent = topPla.name;
    topDis.textContent = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(topPla.userDis);
  }
  if (curPla && curPla.name !== "Neptune" && botPla){
    botNam.textContent = botPla.name;
    botDis.textContent = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(botPla.userDis);
  }
}

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Event listeners

window.addEventListener("load", () => {
  updateDistanceSpans();
  info.forEach(element => {setInfoOpacity(element)});
  sidebaricon.forEach(element => {setSidebarIconOpacity(element)});
  nav.forEach(element => {setNavigationOpacity(element)});
});
window.addEventListener("scroll", () => {
  updateDistanceSpans();
  info.forEach(element => {setInfoOpacity(element)});
  sidebaricon.forEach(element => {setSidebarIconOpacity(element)});
  nav.forEach(element => {setNavigationOpacity(element)});
  scrollDownSign.style.opacity = OPACITY_0;
});

topnav.addEventListener('click', () => {
  if (!topnav.intersecting) {handleTopNavClick();}
});
bottomnav.addEventListener('click', () => {
  if (!bottomnav.intersecting) {handleBottomNavClick();}
});
// sidebaricon.forEach.addEventListener('click', () => {
//   handleIconClick();
// });
