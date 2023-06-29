// import { Estudiante, Profesor } from "./Persona";

// class Aula {
//     private id: number;
//     private maxEstudiantes: number;
//     private materia: string;
//     private profesor: Profesor;
//     private estudiantes: Estudiante[];

//     constructor(id: number, maxEstudiantes: number, materia: string, profesor: Profesor, estudiantes: Estudiante[]) {
//         this.id = id;
//         this.maxEstudiantes = maxEstudiantes;
//         this.materia = materia;
//         this.profesor = profesor;
//         this.estudiantes = estudiantes;
//     }

//     public puedeDarseClase(): boolean {
//         if (!this.profesor.estaDisponible()) {
//             return false;
//         }
    
//         if (this.profesor.getMateria() !== this.materia) {
//             return false;
//         }

//         if (this.profesor.getMateria() != this.materia) {
//             return false;
//         }

//         const numEstudiantes = this.estudiantes.length;
//         const numEstudiantesPresentes = this.estudiantes.filter(estudiante => !estudiante.hacerNovillos()).length;
    
//         if (numEstudiantesPresentes / numEstudiantes < 0.5) {
//             return false;
//         }
    
//         return true;
//     }

// }  
