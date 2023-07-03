
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

    //cálculo del discriminante
    getDiscriminante(): number {
        return (this.b**2) - (4 * this.a * this.c); 
    }

    // marcamos como tiene raices si su discriminante es >= 0
    tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    // marcamos como tiene raiz si su discriminante es == 0
    tieneRaiz(): boolean {
        return this.getDiscriminante() == 0;
    }
    
    //calculamos el resultado: primero obtenemos el discriminante con el método anterior y
    //con if() ponemos la formula/formulas según si tiene una raiz, dos raices o si no tiene solución (que devuelve console.log)
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

    //según si tiene una o dos soluciones imprimimos por consola obtenerRaices() u obtenerRaiz() del método calcular()

    obtenerRaices(solucionUno:number, solucionDos:number){
        console.log("x1 = ", solucionUno);
        console.log("x2 = ", solucionDos);
    }

    obtenerRaiz(number:number){
        console.log("x =", number); 
    }
}