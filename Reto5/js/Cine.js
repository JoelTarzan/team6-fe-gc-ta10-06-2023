"use strict";
class Cine {
    // Constructor
    constructor(newPelicula, newPrecioEntrada) {
        this.pelicula = newPelicula;
        this.precioEntrada = newPrecioEntrada;
        this.asientos = this.rellenarAsientos();
    }
    // Métodos
    getPrecioEntrada() {
        return this.precioEntrada;
    }
    setPrecioEntrada(newPrecioEntrada) {
        this.precioEntrada = newPrecioEntrada;
    }
    getAsientos() {
        return this.asientos;
    }
    rellenarAsientos() {
        let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        let numeros = [8, 7, 6, 5, 4, 3, 2, 1];
        let asientos = [];
        for (let fil = 0; fil < numeros.length; fil++) {
            asientos[fil] = [];
            for (let col = 0; col < letras.length; col++) {
                let nombre = numeros[fil] + letras[col];
                asientos[fil][col] = new Asiento(nombre, false);
            }
        }
        return asientos;
    }
}
