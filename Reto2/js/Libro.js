"use strict";
class Libro {
    //2- Constructor de la class
    constructor(newISBN, newTitulo, newAutor, newNumPag) {
        this.ISBN = newISBN;
        this.titulo = newTitulo;
        this.autor = newAutor;
        this.numPag = newNumPag;
    }
    //3- Métodos de la class
    getISBN() {
        return this.ISBN;
    }
    setISBN(newISBN) {
        return this.ISBN = newISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(newTitulo) {
        return this.titulo = newTitulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(newAutor) {
        return this.autor = newAutor;
    }
    getNumPag() {
        return this.numPag;
    }
    setNumPag(newNumPag) {
        return this.numPag = newNumPag;
    }
    toString() {
        return (`El libro ${this.titulo} con ISBN: ${this.ISBN}, creado por el autor ${this.autor} y tiene ${this.numPag} páginas.`);
    }
}
