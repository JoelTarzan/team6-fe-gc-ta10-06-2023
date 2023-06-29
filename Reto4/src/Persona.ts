abstract class Persona {

    private nombre:string;
    private edad:number;
    private sexo:string;

    constructor(newNombre:string, newEdad:number, newSexo:string) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }

    abstract disponible(): boolean 
}

