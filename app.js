const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.'
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.nombre} es de ${temp} grados`;
    } catch {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(
    console.log
).catch(
    console.log
);