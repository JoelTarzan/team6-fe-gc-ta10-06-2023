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
    toString() {
        return `Título: ${this.titulo} - Núm Temporadas: ${this.numTemporadas} - Entregado: ${this.entregado} - Género: ${this.genero} - Creador: ${this.creador}`;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
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
