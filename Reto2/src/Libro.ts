
class Libro{
    //1- Atributos de la class
    //private
    private ISBN: string;
    private titulo: string;
    private autor: string;
    private numPag: number;

    //2- Constructor de la class
    constructor(newISBN: string, newTitulo: string, newAutor: string, newNumPag: number){
        this.ISBN = newISBN;
        this.titulo = newTitulo;
        this.autor = newAutor;
        this.numPag = newNumPag;
    }

    //3- Métodos de la class

    getISBN(){
        return this.ISBN;
    }

    setISBN(newISBN: string){
        return this.ISBN = newISBN;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(newTitulo: string){
        return this.titulo = newTitulo;
    }

    getAutor(){
        return this.autor;
    }

    setAutor(newAutor: string){
        return this.autor = newAutor;
    }   
    
    getNumPag(){
        return this.numPag;
    }

    setNumPag(newNumPag: number){
        return this.numPag = newNumPag;
    }

    toString(){
        return (`El libro ${this.titulo} con ISBN: ${this.ISBN}, creado por el autor ${this.autor} y tiene ${this.numPag} páginas.`)
    }
}
