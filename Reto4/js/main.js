"use strict";
let profesor = new Profesor('Juanjo', 30, 'H', 'Matematicas');
let alumnos = [
    new Estudiante('Marco', 8, 'H', 5),
    new Estudiante('David', 13, 'H', 8),
    new Estudiante('Julian', 10, 'H', 6),
    new Estudiante('Marta', 9, 'M', 3),
    new Estudiante('Mireia', 15, 'M', 5)
];
let aula = new Aula(15, 10, 'Matematicas', profesor, alumnos);
// Si se puede dar clase mostrar cuantos alumnos y alumnas (por separado) están aprobados de
// momento (imaginad que les están entregando las notas).
aula.puedeDarseClase() ? console.log('Se puede dar clase.') : console.log('No se puede dar clase.');
let alumnasM = 0;
let alumnosH = 0;
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].getCalificacion() >= 5) {
        if (alumnos[i].getSexo() == 'M') {
            alumnasM++;
        }
        else {
            alumnosH++;
        }
    }
}
console.log(alumnasM);
console.log(alumnosH);
