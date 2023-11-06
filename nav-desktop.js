// Constants
const SCROLL_BEHAVIOR = 'smooth';
const elements = [topnav, bottomnav, ...sidebaricon, ...info, ...title, scrollDownSign];
const OPACITY_100 = "100%";
const OPACITY_50 = "50%";
const OPACITY_0 = "0%";

// Flags
var isScrolled = true;

// Variables for handleMouseMove
let centers;
let corners;
let distances;
let lastKnownCursorPosition = { x: 0, y: 0 };
var cursor = {x: null, y: null};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

// Navigation Buttons Functions

function getCenter(element) {
  const rect = element.getBoundingClientRect();
  const elementCenter = rect.top + document.documentElement.scrollTop + (rect.bottom - rect.top) / 2;
  const targetScrollPosition = elementCenter - window.innerHeight / 2;

  return(targetScrollPosition);
};
function handleClick (element) {
  console.log(element.isDynamic);
}
function handleTopNavClick() {
  topnav.style.opacity = OPACITY_100;
  topnav.isDynamic = false;
  scrollToTarget(topPla);
};
function handleBottomNavClick() {
  bottomnav.style.opacity = OPACITY_100;
  bottomnav.isDynamic = false;
  scrollToTarget(botPla);
};
function scrollToTarget(element) {
  let start;
  let isUserScrolling = false;
  let duration = 10000;
  let initialValue = window.scrollY;
  let finalValue = getCenter(element.img);

  function easeInOutCubic(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (t - 1) * (t - 1) * (t - 1) * (t - 1) * (t - 1);
  }
  function animate(timestamp) {
    if (!start) start = timestamp;
    let elapsed = timestamp - start;

    if (elapsed < duration && !isUserScrolling) {
      let progress = easeInOutCubic(elapsed / duration);
      let currentValue = initialValue + (finalValue - initialValue) * progress;
      window.scrollTo(0, currentValue);
      requestAnimationFrame(animate);
    } else if(!isUserScrolling) {
      window.scrollTo(0, finalValue);
      console.log('Auto-scroll ended')
    }
  }
  function checkUserScroll() {
    isUserScrolling = true;
    // Remove the event listener as soon as user scrolls manually
    window.removeEventListener('wheel', checkUserScroll);
  }

  if (isPartiallyInViewport(element.img)) {
    element.isDynamic = true;
    console.log(element.isDynamic);
  }

  console.log('Auto-scroll Initiated')
  console.log(element)
  requestAnimationFrame(animate);
  window.addEventListener('wheel', checkUserScroll);
};

sidebaricon.forEach(element => {element.addEventListener('click', scrollToPla, false);});
function scrollToPla(){
  var a = planetsData[planetsData.findIndex(element => element.name === event.target.id)];
  scrollToTarget(a);
}

// Dynamic Opacity Functions

function defineVariables() {
  tnavBND = topnav.getBoundingClientRect();
  bnavBND = bottomnav.getBoundingClientRect();
  centers = elements.map(box => getCenterOfElement(box));
  corners = getCornersOfViewport();
  distances = centers.map(center => calculateDistances(center, corners));
}
function getCenterOfElement(elementBox) {
  const box = elementBox.getBoundingClientRect();
  return {
      x: Math.round(((box.right - box.left) / 2 + box.left)),
      y: Math.round(((box.bottom - box.top) / 2 + box.top))
  };
}
function getCornersOfViewport() { // Get the coordinates of all 4 corners of the viewport
  return {
      "top-left": {x: 0, y: 0},
      "top-right": {x: window.innerWidth, y: 0},
      "bottom-left": {x: 0, y: window.innerHeight},
      "bottom-right": {x: window.innerWidth, y: window.innerHeight}
  };
}
function calculateDistances(center, corners) { // Calculate the length of all 4 paths from the box center to the viewport corners
  return {
    "top-left": calculateDistance(center, corners["top-left"]),
    "top-right": calculateDistance(center, corners["top-right"]),
    "bottom-left": calculateDistance(center, corners["bottom-left"]),
    "bottom-right": calculateDistance(center, corners["bottom-right"])
  };
}
  function calculateDistance(point1, point2) { // The Pythagorean theorem equation
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }

function calculatePercentage(cursorDistance, furthestCorner, range = {min: 10, max: 50}) { 
  const rawPercentage = Math.round(100 * (1 - (cursorDistance / furthestCorner)));
  const percentage = Math.round(mapValue(rawPercentage, 0, 100, range.min, range.max));
  return percentage;
}
  function mapValue(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

function isHovered(element, cursorPosition) {
  const box = element.getBoundingClientRect();
  return cursorPosition.x >= box.left && cursorPosition.x <= box.right &&
         cursorPosition.y >= box.top && cursorPosition.y <= box.bottom;
}
function setSidebarIconOpacity(element) {
  // You can expand on this function later if needed
  if (curPla && element.id === curPla.name) {
    element.style.opacity = OPACITY_100;
    return true;
  } else if (topPla && element.id === topPla.name) {
    element.style.opacity = OPACITY_50;
    return true;
  } else if (botPla && element.id === botPla.name) {
    element.style.opacity = OPACITY_50;
    return true;
  }
  return false;
}
function setInfoOpacity(element) {
  if (element.getBoundingClientRect().top >= tnavBND.bottom && 
      element.getBoundingClientRect().bottom <= bnavBND.top) {
    element.style.opacity = OPACITY_100;
    return false;
  } else {
    element.style.opacity = OPACITY_0;
    return true;
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
  if ((isTopNav(element) && (curPla.bottom > 0 && curPla.top <= tnavBND.bottom || curPla.name === 'Sun')) ||
  (isTopNav(element) && topPla.name === 'Neptune')) {
      setOpacity(element, OPACITY_0);
      element.isIntersecting = true;
      return true;
  } else if (isBottomNav(element) && (
      (curPla.bottom > bnavBND.top && curPla.top <= window.innerHeight) ||
      (curPla.name === 'Sun' && curPla.bottom >= bnavBND.top) ||
      curPla.name === 'Neptune' ||
      (topPla.name === 'Neptune' && curPla.top <= bnavBND.bottom)
  )) {
      setOpacity(element, OPACITY_0);
      element.isIntersecting = true;
      return true;
  }
  return false;
}

function setDynamicOpacity(element) {
  if (element === scrollDownSign && !isScrolled || !element.isDynamic) {
    return;
  }
  if (!element.isIntersecting && isHovered(element, cursor) && (element === topnav || element === bottomnav || sidebaricon.includes(element))) {
    element.style.opacity = OPACITY_100;
    element.style.cursor = 'pointer';
    return;
  } else {
    element.style.cursor = 'auto';
  }
  if (sidebaricon.includes(element) && setSidebarIconOpacity(element)) {
    return;
  }
  if (info.includes(element) && setInfoOpacity(element)) {
    return;
  } else {
    element.isIntersecting = false;
  }
  if (setNavigationOpacity(element)) {
    return;
  }
  
  const index = elements.indexOf(element);
  const cursorDistance = calculateDistance(centers[index], cursor);
  const furthestCorner = Math.max(...Object.values(distances[index]));
  const percentage = (info.includes(element) || title.includes(element)) ?
    calculatePercentage(cursorDistance, furthestCorner, {min: 10, max: 100}) : 
    calculatePercentage(cursorDistance, furthestCorner);

  element.style.opacity = percentage + "%";
}

function handleMouseMove(event) {
  // Define Variables
  cursor.x = event.clientX;
  cursor.y = event.clientY;

  if (event && event.clientX && event.clientY) {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
    lastKnownCursorPosition = cursor;
  } else {
    cursor = lastKnownCursorPosition;
  }

  elements.forEach(element => {
    if (element !== scrollDownSign || isScrolled || element.isDynamic) {
      setDynamicOpacity(element);
    }
  });
}
function handleScroll() {
  if (isScrolled) {
    scrollDownSign.style.opacity = OPACITY_0;
    isScrolled = false;
  }
  elements.forEach(element => {
    if (element.isDynamic) {
      setDynamicOpacity(element);
    }
  });
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
  // Add Tag Switches
  elements.forEach(element => {element.isDynamic = true;});
  elements.forEach(element => {element.isIntersecting = false;});
  elements.forEach(element => {element.isHovered = false;});

  // Execute Functions
  defineVariables();
  updateDistanceSpans();
  setDynamicOpacity(elements[0]);
  setDynamicOpacity(elements[1]);
});
window.addEventListener("scroll", () => {
  defineVariables();
  updateDistanceSpans();
  handleScroll();
});

// Mouse related events
window.addEventListener('mousemove', handleMouseMove);
// elements.forEach(element => {element.addEventListener('mouseenter', handleHover);});

window.addEventListener('resize', defineVariables);

topnav.addEventListener('click', () => {
  if (!topnav.isIntersecting) {
    handleTopNavClick();
  }
});
bottomnav.addEventListener('click', () => {
  if (!bottomnav.isIntersecting) {
    handleBottomNavClick();
  }
});

function handleHover(event) {
  console.log(event.target)
}