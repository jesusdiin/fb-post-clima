import { Schema, model } from "mongoose";

const climatSchema = new Schema({
    city: String,
    estado: String,
    pais: String,
    longitud: String,
    latitud: String,
    horalocal: String,
    temperatura: Number
}, {
    timestamps: true,
    versionKey: false
});

export default model('Clima', climatSchema)