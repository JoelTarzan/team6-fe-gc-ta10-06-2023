class Espectador {
    //1- Atributos de la class
    //private
    private nombre: string;
    private edad: number;
    private dinero: number;

    //2- Constructor de la class
    constructor(newNombre: string, newEdad: number, newDinero: number){
        this.nombre = newNombre;
        this.edad = newEdad;
        this.dinero = newDinero;
    }

    //3- Métodos de la class
    getNombre(){
        return this.nombre;
    }

    setNombre(newNombre: string){
        this.nombre = newNombre;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(newEdad: number){
        this.edad = newEdad;
    }

    getDinero(){
        return this.dinero;
    }

    setDinero(newDinero: number){
        this.dinero = newDinero;
    }
}