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
}

