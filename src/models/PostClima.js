import { Schema, model } from "mongoose";

const climatSchema = new Schema({
    city: String,
    estado: String,
    pais: String,
    longitud: String,
    latitud: String,
    horalocal: String,
    temperatura: Number,
    code: Number,
    description: String,
    velocidadViento: Number,
    gardosViento: Number,
    directionViento: String,
    presion: Number,
    precipitacion: Number,
    humedad: Number,
    nubusidad: Number,
    rayosUv: Number,
    visibilidad: Number,
    isDay: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Clima', climatSchema)