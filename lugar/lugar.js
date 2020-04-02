const axios = require("axios");

const getLugarlatLong = async(dir) => {
    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { "x-rapidapi-key": "66a0247381msh2b105be82bbbc1dp10eefejsn04605d316dc1" }
    });
    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    // instance
    //     .get()
    //     .then(resp => {
    //         console.log(resp.data.Results[1]);
    //     })
    //     .catch(err => {
    //         console.log("ERRORR! ", err);
    //     });
    return {
        direccion,
        lat,
        long
    }
}
module.exports = {
    getLugarlatLong
}