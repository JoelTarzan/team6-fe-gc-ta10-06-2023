class Asiento {

    // Propiedades
    private nombre: string;
    private ocupado: boolean;

    // Constructor
    constructor(newNombre: string, newOcupado: boolean) {
        this.nombre = newNombre;
        this.ocupado = newOcupado;
    }

    // Métodos
    getNombre(): string {
        return this.nombre;
    }

    setNombre(newNombre: string): void {
        this.nombre = newNombre;
    }

    getOcupado(): boolean {
        return this.ocupado;
    }

    setOcupado(newOcupado: boolean): void {
        this.ocupado = newOcupado;
    }
}