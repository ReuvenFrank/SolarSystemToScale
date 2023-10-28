const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Proxy API requests
app.get('/api/proxy', async (req, res) => {
    const planetCommand = req.query.planetCommand;
    const curDate = req.query.curDate;
    const curTime = req.query.curTime;
    const nexDate = req.query.nexDate;
    const nexTime = req.query.nexTime;

    // Construct the API URL using the parameters
    const apiUrl = `https://ssd.jpl.nasa.gov/api/horizons.api?MAKE_EPHEM=YES&COMMAND=${planetCommand}&EPHEM_TYPE=ELEMENTS&CENTER=%27500@10%27&START_TIME=%27${curDate}%20${curTime}%27&STOP_TIME=%27${nexDate}%20${nexTime}%27&STEP_SIZE=%271%20HOURS%27&REF_SYSTEM=%27ICRF%27&REF_PLANE=%27ECLIPTIC%27&CAL_TYPE=%27M%27&OUT_UNITS=%27KM-S%27&ELM_LABELS=%27YES%27&TP_TYPE=%27RELATIVE%27&CSV_FORMAT=%27NO%27&OBJ_DATA=%27YES%27`;

    try {
        const apiResponse = await axios.get(apiUrl);
        res.json(apiResponse.data);
    } catch (error) {
        res.status(500).send('Error proxying the API request.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
