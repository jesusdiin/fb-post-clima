import Clima from "../models/PostClima";

export const createClimaDefault = async () => {

    try {
        const count = await Clima.estimatedDocumentCount();

        if (count > 0) return;
            
        const values = await Promise.all([
            new Clima({
                city: 'Oaxaca',
                estado: 'Oaxaca',
                pais: 'México',
                longitud: 0,
                latitud: 0,
                horalocal: '00:00',
                temperatura: 27,
                code: 113,
                description: 'Claro/Soleado',
                velocidadViento: 5,
                gradosViento: 55,
                directionViento: 'NE',
                presion: 55,
                precipitacion: 10,
                humedad: 56,
                nubusidad: 33,
                rayosUv: 2,
                visibilidad: 4,
                isDay: 'si'
            })
        ])
    
        console.log(values);

    } catch (error) {
        console.error(error);
    }
}