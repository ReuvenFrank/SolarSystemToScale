const axios = require('axios');

exports.handler = async function(event, context) {
    // Extract parameters from the event object
    const {
        command,
        curDate,
        curTime,
        nexDate,
        nexTime
    } = event.queryStringParameters;

    try {
        const response = await axios.get(`https://ssd.jpl.nasa.gov/api/horizons.api?MAKE_EPHEM=YES&COMMAND=${command}&EPHEM_TYPE=ELEMENTS&CENTER=%27500@10%27&START_TIME=%27${curDate}%20${curTime}%27&STOP_TIME=%27${nexDate}%20${nexTime}%27&STEP_SIZE=%271%20HOURS%27&REF_SYSTEM=%27ICRF%27&REF_PLANE=%27ECLIPTIC%27&CAL_TYPE=%27M%27&OUT_UNITS=%27KM-S%27&ELM_LABELS=%27YES%27&TP_TYPE=%27RELATIVE%27&CSV_FORMAT=%27NO%27&OBJ_DATA=%27YES%27`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: 'Error fetching data'
        };
    }
};