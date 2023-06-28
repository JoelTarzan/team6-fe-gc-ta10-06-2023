
class Raices {
    //1-Atributos de la class
    private a:number;
    private b:number;
    private c:number;

    //2-Constructor
    constructor(newA:number,newB:number,newC:number){
        this.a = newA;
        this.b = newB;
        this.c = newC;
    }

    //3-Métodos de la class
    getDiscriminante(): number {
        return (this.b**2) - 4 * this.a * this.c; 
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }
}