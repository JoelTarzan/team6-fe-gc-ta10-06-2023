"use strict";
class Persona {
    constructor(newNombre, newEdad, newSexo) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
        this.edad = newEdad;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(newSexo) {
        this.sexo = newSexo;
    }

}
