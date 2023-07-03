"use strict";
class Profesor extends Persona {
    //2- Constructor
    constructor(newNombre, newEdad, newSexo, newMateria) {
        super(newNombre, newEdad, newSexo);
        this.materia = newMateria;
    }
    //3- Métodos
    // Determina de manera aleatoria si el profesor esta disponible o no, habiendo un 80% de posibilidades de estar disponible
    disponible() {
        let probabilidad = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
        if (probabilidad == 1) {
            return false;
        }
        else {
            return true;
        }
    }
    getMateria() {
        return this.materia;
    }
    setMateria(newMateria) {
        return this.materia = newMateria;
    }
}
