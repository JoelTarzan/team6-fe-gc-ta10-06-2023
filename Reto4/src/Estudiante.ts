type typeCalificacion = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

class Estudiante extends Persona {

    // Propiedades
    private calificacion: typeCalificacion;

    // Constructor
    constructor(newNombre: string, newEdad: number, newSexo: string, newCalificacion: typeCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
    }

    // Métodos
    disponible(): boolean {
        let resultado = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
        return resultado ? true : false;
    }
}