class Serie {

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

    toString(): string {
        return `Título: ${this.titulo} - Núm Temporadas: ${this.numTemporadas} - Entregado: ${this.entregado} - Género: ${this.genero} - Creador: ${this.creador}`;
        
    }

}