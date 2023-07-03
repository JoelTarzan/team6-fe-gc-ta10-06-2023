"use strict";
class Serie {
    // Constructor
    constructor(newTitulo, newCreador) {
        this.titulo = newTitulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = '';
        this.creador = newCreador;
    }
    // Métodos
    getTitulo() {
        return this.titulo;
    }
    setTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    getNumTemporadas() {
        return this.numTemporadas;
    }
    setNumTemporadas(newNumTemporadas) {
        this.numTemporadas = newNumTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    setGenero(newGenero) {
        this.genero = newGenero;
    }
    getCreador() {
        return this.creador;
    }
    setCreador(newCreador) {
        this.creador = newCreador;
    }
    // Devuelve como string los datos (atributos) de la serie serie
    toString() {
        return `Título: ${this.titulo} - Núm Temporadas: ${this.numTemporadas} - Entregado: ${this.entregado} - Género: ${this.genero} - Creador: ${this.creador}`;
    }
    //marca con un booleano si se ha entregado
    entregar() {
        this.entregado = true;
    }
    //marca con un booleano si se ha devuelto
    devolver() {
        this.entregado = false;
    }
    //devuelve la serie como entregada
    isEntregado() {
        return this.entregado;
    }
    //usando compareTo toma un objeto y devuelve un objeto serie, compara el numero de temporadas y con retorna
    //la de mayor número
    compareTo(obj) {
        const serie = obj;
        if (this.numTemporadas >= serie.numTemporadas) {
            return this;
        }
        else {
            return serie;
        }
    }
}
