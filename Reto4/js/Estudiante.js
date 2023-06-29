"use strict";
class Estudiante extends Persona {
    // Constructor
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }
    // Métodos
    disponible() {
        let resultado = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
        return resultado ? true : false;
    }
    getCalificacion() {
        return this.calificacion;
    }
    setCalificacion(newCalificacion) {
        this.calificacion = newCalificacion;
    }
}
