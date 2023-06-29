type typeMaterias = 'Matematicas' | 'Filosofia' | 'Fisica';

class Aula {
    private id: number;
    private maxEstudiantes: number;
    private materia: typeMaterias;
    private profesor: Profesor;
    private estudiantes: Estudiante[];

    constructor(id: number, maxEstudiantes: number, materia: typeMaterias, profesor: Profesor, estudiantes: Estudiante[]) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }

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
