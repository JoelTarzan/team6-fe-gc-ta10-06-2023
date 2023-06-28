const defHoras: number = 10;

class Videojuego{
    //1- Atributos de la class
    //private
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compañia: string;

    //2- Constructor de la class
    constructor(newTitulo: string, newHorasEst: number, newGenero: string, newCompañia: string){
        this.titulo = newTitulo;
        this.horasEstimadas = newHorasEst;
        this.entregado = false;
        this.genero = newGenero;
        this.compañia = newCompañia;
    }

    //3- Métodos de la class
    getTitulo(){
        return this.titulo;
    }

    setTitulo(newTitulo:string){
        return this.titulo = newTitulo;
    }

    getHorasEstimadas(){
        return this.horasEstimadas;
    }

    setHorasEstimadas(newHorasEst:number){
        return this.horasEstimadas = newHorasEst;
    }
    
    getGenero(){
        return this.genero;
    }

    setGenero(newGenero:string){
        return this.genero = newGenero;
    }

    getCompañia(){
        return this.compañia;
    }

    setCompañia(newCompañia:string){
        return this.compañia = newCompañia;
    }

    toString(){
        return (`El título del videojuego es: ${this.titulo}, horas estimadas de juego: ${this.horasEstimadas}, es del genero ${this.genero} y producido por la compañía ${this.compañia}`);
    }
}