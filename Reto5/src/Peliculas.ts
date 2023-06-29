class Peliculas {

    private titulo: string;
    private duracion: number;
    private edadMin: number;
    private director: string;

    constructor(newTitulo:string, newDuracion:number, newEdadMin:number, newDirector:string) {
        this.titulo = newTitulo;
        this.duracion= newDuracion;
        this.edadMin = newEdadMin;
        this.director = newDirector;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(newTitulo: string): void {
        this.titulo = newTitulo;
    }

    getDuracion(): number {
        return this.duracion;
    }

    setDuracion(newDuracion: number): void {
        this.duracion = newDuracion;
    }

    getEdadMin(): number {
        return this.edadMin;
    }

    setEdadMin(newEdadMin: number): void {
        this.edadMin = newEdadMin;
    }

    getDirector(): string {
        return this.director;
    }

    setDirector(newDirector: string): void {
        this.director = newDirector;
    }
}