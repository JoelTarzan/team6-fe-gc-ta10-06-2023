"use strict";
class Espectador {
    //2- Constructor de la class
    constructor(newNombre, newEdad, newDinero) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.dinero = newDinero;
    }
    //3- Métodos de la class
    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
        this.edad = newEdad;
    }
    getDinero() {
        return this.dinero;
    }
    setDinero(newDinero) {
        this.dinero = newDinero;
    }
}
