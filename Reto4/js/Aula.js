"use strict";
class Aula {
    constructor(id, maxEstudiantes, materia, profesor, estudiantes) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }
    puedeDarseClase() {
        if (!this.profesor.disponible()) {
            return false;
        }
        if (this.profesor.getMateria() !== this.materia) {
            return false;
        }
        const numEstudiantes = this.estudiantes.length;
        const numEstudiantesPresentes = this.estudiantes.filter(estudiante => estudiante.disponible()).length;
        if (numEstudiantesPresentes / numEstudiantes < 0.5) {
            return false;
        }
        return true;
    }
}
