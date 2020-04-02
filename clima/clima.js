const axios = require('axios');

const getClima = async(lat, long) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=65c32d443d4f3edb41c18664dc82c9ca&units=metric`)
    return respuesta.data.main.temp
}

module.exports = {
    getClima
}