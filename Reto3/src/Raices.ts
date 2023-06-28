
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
        return (this.b**2) - (4 * this.a * this.c); 
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    tieneRaiz(): boolean {
        return this.getDiscriminante() == 0;
    }

    calcular(): void {
        const discriminante = this.getDiscriminante();
        
        if (this.tieneRaiz()) {
            const x = -this.b / (2 * this.a);
            this.obtenerRaiz(x);
        }else if (this.tieneRaices()) {
            const solucionUno = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const solucionDos = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            this.obtenerRaices(solucionUno, solucionDos);
        } else {
            console.log("No tiene solución.");
        }
    }

    obtenerRaices(solucionUno:number, solucionDos:number){
        console.log("x1 = ", solucionUno);
        console.log("x2 = ", solucionDos);
    }

    obtenerRaiz(number:number){
        console.log("x =", number); 
    }
}