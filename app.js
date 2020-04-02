const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la cuidad para obtener el clima',
            demand: true
        }
    }).argv
    //console.log(argv.direccion);

//lugar.getLugarlatLong(argv.direccion).then(console.log)
//clima.getClima(1.910000, -78.550003).then(console.log).catch(err => { console.log(err); })
//getInfo(argv.direccion).then(console.log).catch(err => { console.log(err); })
getInfo = async(direccion) => {
    // el clima de X es de: xxx
    // no se pudo determinar el clima de :xxx
    try {
        const cords = await lugar.getLugarlatLong(direccion);

        const temp = await clima.getClima(cords.lat, cords.long);

        return console.log(`el clima de ${cords.direccion}es de: ${temp}`);
    } catch (e) {
        console.log(`no se pudo determinar el clima de ${direccion}`);

    }
}
getInfo(argv.direccion);