
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

    tieneRaiz(): boolean {
        const discriminante = this.getDiscriminante();
        return discriminante == 0;
    }

    calcular(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante > 0) {
            const solucionUno = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const solucionDos = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log("x1 = ", solucionUno);
            console.log("x2 = ", solucionDos);
        } else if (discriminante == 0) {
            const x = -this.b / (2 * this.a);
            console.log("x =", x);
        } else {
            console.log("No tiene solución.");
        }
    }
}