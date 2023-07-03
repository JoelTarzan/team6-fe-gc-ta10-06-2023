type typeCalificacion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

class Estudiante extends Persona {

    // Propiedades
    private calificacion: typeCalificacion;

    // Constructor
    constructor(newNombre: string, newEdad: number, newSexo: genero, newCalificacion: typeCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }

    // Métodos
    // Determina de manera aleatoria si el estudiante esta disponible o no, habiendo un 50% de posibilidades de estar disponible
    disponible(): boolean {
        let resultado = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
        return resultado ? true : false;
    }

    getCalificacion(){
        return this.calificacion;
    }

    setCalificacion(newCalificacion: typeCalificacion){
        this.calificacion = newCalificacion;
    }
}