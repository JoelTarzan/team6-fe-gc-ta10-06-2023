class Serie implements Entregable {

    // Atributos
    private titulo: string;
    private numTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    // Constructor
    constructor(newTitulo: string, newCreador: string) {
        this.titulo = newTitulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = '';
        this.creador = newCreador;
    }

    // Métodos
    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(newTitulo: string) {
        this.titulo = newTitulo;
    }

    getNumTemporadas(): number {
        return this.numTemporadas;
    }

    setNumTemporadas(newNumTemporadas: number) {
        this.numTemporadas = newNumTemporadas;
    }

    getGenero(): string {
        return this.genero;
    }

    setGenero(newGenero: string) {
        this.genero = newGenero;
    }

    getCreador(): string {
        return this.creador;
    }

    setCreador(newCreador: string) {
        this.creador = newCreador;
    }

// Devuelve como string los datos (atributos) de la serie serie
    toString(): string {
        return `Título: ${this.titulo} - Núm Temporadas: ${this.numTemporadas} - Entregado: ${this.entregado} - Género: ${this.genero} - Creador: ${this.creador}`;
        
    }

//marca con un booleano si se ha entregado
    entregar(): void {
        this.entregado = true;
    }

//marca con un booleano si se ha devuelto
    devolver(): void {
        this.entregado = false;
    }

//devuelve la serie como entregada
    isEntregado(): boolean {
        return this.entregado;
    }

//usando compareTo toma un objeto y devuelve un objeto serie, compara el numero de temporadas y con retorna
//la de mayor número
    compareTo(obj: Object): Serie {
        
        const serie = obj as Serie;

        if (this.numTemporadas >= serie.numTemporadas) {
            return this;

        } else {
            return serie;
        } 
    }

}