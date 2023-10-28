async function plaAPI(planet) {

    let now = new Date();
    let nowString = now.toISOString();
    curTime.date = nowString.slice(0, 10); // "YYYY-MM-DD"
    curTime.time = nowString.slice(11, 19); // "HH:mm:ss"

    let next = new Date();
    next.setHours(next.getHours() + 1);
    let nextString = next.toISOString();
    nexTime.date = nextString.slice(0, 10); // "YYYY-MM-DD"
    nexTime.time = nextString.slice(11, 19); // "HH:mm:ss"

    try {
        const response = await fetch(`/.netlify/functions/apiProxy?command=${planet.command}&curDate=${curTime.date}&curTime=${curTime.time}&nexDate=${nexTime.date}&nexTime=${nexTime.time}`);
        const data = await response.json();

        function getData(data, start, key) {
            const index = data.result.indexOf(key, start);
            return data.result.substr(index + key.length, 22);
        }
    
        const [ec, a, ta] = ['EC= ', 'A = ', 'TA= '].map(key => getData(data, 0, key));
        const [ec2, a2, ta2] = ['EC= ', 'A = ', 'TA= '].map(key => getData(data, data.result.indexOf(key) + 1, key));
    
        var curDis = (a * (1 - ec ** 2) / (1 + ec * Math.cos(ta * Math.PI / 180)));
        var nexDis = (a2 * (1 - ec2 ** 2) / (1 + ec2 * Math.cos(ta2 * Math.PI / 180)));
        planet.inc = (nexDis - curDis) / 36000;
  
        setInterval(() => { 
            curDis += planet.inc;
            planet.sunDis = curDis;
            planet.disSpa.innerHTML = numberFormater(curDis / 1000, 3, 3);
            setPeriAph(planet);
            planet.sidebar.classList.remove("hidden");
        }, 100);
    } catch (error) {
      setTimeout(() => plaAPI(planet), 1000);
    }
}

async function callAPIsSequentially() {
    for (let planet of planetsData) {
        if (planet.name !== "Sun") {
            await plaAPI(planet);
        }
    }
}

callAPIsSequentially();