type typeMateria = 'Matematicas' | 'Filosofia' | 'Fisica';

class Profesor extends Persona{
    //1- Atributos de la class
    //private
    private materia: typeMateria;

    //2- Constructor
    constructor(newNombre:string, newEdad:number, newSexo:genero, newMateria:typeMateria){
        super(newNombre, newEdad, newSexo);
        this.materia = newMateria;
    }

    //3- Métodos
    // Determina de manera aleatoria si el profesor esta disponible o no, habiendo un 80% de posibilidades de estar disponible
    disponible(): boolean {
        let probabilidad = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
        if(probabilidad == 1 ){
            return false;
        }else{
            return true;
        }
    }

    getMateria(){
        return this.materia;
    }

    setMateria(newMateria: typeMateria){
        return this.materia = newMateria;
    }
}