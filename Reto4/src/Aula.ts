type typeMaterias = 'Matematicas' | 'Filosofia' | 'Fisica';

class Aula {

    // Propiedades
    private id: number;
    private maxEstudiantes: number;
    private materia: typeMaterias;
    private profesor: Profesor;
    private estudiantes: Estudiante[];

    // Constructor
    constructor(id: number, maxEstudiantes: number, materia: typeMaterias, profesor: Profesor, estudiantes: Estudiante[]) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }

    // Métodos
    // Comprueba si el profesor esta disponible, si coincide la materia del profesor con la del aula y comprueba que hayan los estudiantes suficientes para determinar si se puede dar clase o no
    public puedeDarseClase(): boolean {
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
