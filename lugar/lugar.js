const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '94cbf7348bmsh9adc74de176064ep152dc6jsndcbafbd62f46',
            'useQueryString': true
        }
    });

    const resp = await instance.get();
    const data = resp.data;

    if (!data) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const nombre = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        nombre,
        lat,
        lng
    };

};

module.exports = { getLugarLatLng }