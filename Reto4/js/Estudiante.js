"use strict";
class Estudiante extends Persona {
    // Constructor
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }
    // Métodos
    // Determina de manera aleatoria si el estudiante esta disponible o no, habiendo un 50% de posibilidades de estar disponible
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
