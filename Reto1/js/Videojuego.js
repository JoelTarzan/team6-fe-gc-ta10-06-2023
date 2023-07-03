"use strict";
const defHoras = 10;
class Videojuego {
    //2- Constructor de la class
    constructor(newTitulo, newHorasEst, newGenero, newCompañia) {
        this.titulo = newTitulo;
        this.horasEstimadas = newHorasEst;
        this.entregado = false;
        this.genero = newGenero;
        this.compañia = newCompañia;
    }
    //3- Métodos de la class
    getTitulo() {
        return this.titulo;
    }
    setTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    setHorasEstimadas(newHorasEst) {
        this.horasEstimadas = newHorasEst;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(newGenero) {
        this.genero = newGenero;
    }
    getCompañia() {
        return this.compañia;
    }
    setCompañia(newCompañia) {
        this.compañia = newCompañia;
    }
    // Metodos de la interfaz entregable
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    // Método para comparar 2 objetos del tipo Videojuego utilizando sus horas estimadas de juego.
    compareTo(obj) {
        const videojuego = obj;
        if (this.horasEstimadas >= videojuego.horasEstimadas) {
            return this;
        }
        else {
            return videojuego;
        }
    }
    // Método toString
    toString() {
        return (`El título del videojuego es: ${this.titulo}, horas estimadas de juego: ${this.horasEstimadas}, es del genero ${this.genero} y producido por la compañía ${this.compañia}`);
    }
}
