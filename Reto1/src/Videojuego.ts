const defHoras: number = 10;

class Videojuego implements Entregable{
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
        this.titulo = newTitulo;
    }

    getHorasEstimadas(){
        return this.horasEstimadas;
    }

    setHorasEstimadas(newHorasEst:number){
        this.horasEstimadas = newHorasEst;
    }
    
    getGenero(){
        return this.genero;
    }

    setGenero(newGenero:string){
        this.genero = newGenero;
    }

    getCompañia(){
        return this.compañia;
    }

    setCompañia(newCompañia:string){
        this.compañia = newCompañia;
    }

    // Metodos de la interfaz entregable
    entregar(): void {
        this.entregado = true;
    }

    devolver(): void {
        this.entregado = false;
    }

    isEntregado(): boolean {
        return this.entregado;
    }

    // Método para comparar 2 objetos del tipo Videojuego utilizando sus horas estimadas de juego.
    compareTo(obj: Object): Videojuego {
        
        const videojuego = obj as Videojuego;

        if (this.horasEstimadas >= videojuego.horasEstimadas) {
            return this;

        } else {
            return videojuego;
        }
    }

    // Método toString
    toString(){
        return (`El título del videojuego es: ${this.titulo}, horas estimadas de juego: ${this.horasEstimadas}, es del genero ${this.genero} y producido por la compañía ${this.compañia}`);
    }
}