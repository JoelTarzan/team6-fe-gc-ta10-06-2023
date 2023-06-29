abstract class Persona {

    protected nombre:string;
    protected edad:number;
    protected sexo:string;

    constructor(newNombre:string, newEdad:number, newSexo:string) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }

    abstract disponible(): boolean

    getNombre(): string {
        return this.nombre;
    }

    setNombre(newNombre: string): void {
        this.nombre = newNombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(newEdad: number): void {
        this.edad = newEdad;
    }

    getSexo(): string {
        return this.sexo;
    }

    setSexo(newSexo: string): void {
        this.sexo = newSexo;
    }
}

