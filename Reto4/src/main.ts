// Creamos un profesor
let profesor = new Profesor('Juanjo', 30, 'H', 'Matematicas');

// Un array de estudiantes
let alumnos: Estudiante[] = [
    new Estudiante('Marco', 8, 'H', 5),
    new Estudiante('David', 13, 'H', 8),
    new Estudiante('Julian', 10, 'H', 6),
    new Estudiante('Marta', 9, 'M', 3),
    new Estudiante('Mireia', 15, 'M', 5)
];

// Creamos un aula
let aula = new Aula(15, 10, 'Matematicas', profesor, alumnos);

// Comprobamos que se pueda dar clase, y si se puede, miramos cuantos alumnos y alumnas estan aprobados
if (aula.puedeDarseClase()) {

    console.log('Se puede dar clase.');

    let alumnasM = 0;
    let alumnosH = 0;

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].getCalificacion() >= 5) {
            if (alumnos[i].getSexo() == 'M') {
                alumnasM++;
            }else{
                alumnosH++;
            }
        }
        
    }

    console.log(`Las alumnas aprobadas son ${alumnasM}`);
    console.log(`Los alumnos aprobadas son ${alumnosH}`);


} else {
    console.log('No se puede dar clase.');
}