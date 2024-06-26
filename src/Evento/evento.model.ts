import mongoose from "mongoose";


export const EventoSchema = new mongoose.Schema({
    Nombre: String,
    Fecha: Date,
    Proyecto: String,
    Ficha:String,   
    Evaluador:String,
    Creatividad: Number,
    RSA: Number,
    PyC: Number,
    EyC: Number
})

export interface IEvento extends mongoose.Document{
    Nombre: string,
    Fecha: Date,
    Proyecto: string,
    Ficha:string,
    Evaluador:string,
    Creatividad: number,
    RSA: number,
    PyC: number,
    EyC: number
}