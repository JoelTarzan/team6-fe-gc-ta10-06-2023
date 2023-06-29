"use strict";
class Asiento {
    // Constructor
    constructor(newNombre, newOcupado) {
        this.nombre = newNombre;
        this.ocupado = newOcupado;
    }
    // Métodos
    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    getOcupado() {
        return this.ocupado;
    }
    setOcupado(newOcupado) {
        this.ocupado = newOcupado;
    }
}
