"use strict";
class Peliculas {
    constructor(newTitulo, newDuracion, newEdadMin, newDirector) {
        this.titulo = newTitulo;
        this.duracion = newDuracion;
        this.edadMin = newEdadMin;
        this.director = newDirector;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    getDuracion() {
        return this.duracion;
    }
    setDuracion(newDuracion) {
        this.duracion = newDuracion;
    }
    getEdadMin() {
        return this.edadMin;
    }
    setEdadMin(newEdadMin) {
        this.edadMin = newEdadMin;
    }
    getDirector() {
        return this.director;
    }
    setDirector(newDirector) {
        this.director = newDirector;
    }
}
