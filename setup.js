function setPeriAph(planet) {
    let a = planet.sunDis / 1000;
    let b = planet.aphe - a;
    let c = (planet.peri - a) * -1;
    if (planet.name !== 'Neptune') {
        planet.apheDiv.style.height = b + 'px'
    }
    planet.periDiv.style.height = c + 'px'
}