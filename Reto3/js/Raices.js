"use strict";
class Raices {
    //2-Constructor
    constructor(newA, newB, newC) {
        this.a = newA;
        this.b = newB;
        this.c = newC;
    }
    //3-Métodos de la class
    //cálculo del discriminante
    getDiscriminante() {
        return (Math.pow(this.b, 2)) - (4 * this.a * this.c);
    }
    // marcamos como tiene raices si su discriminante es >= 0
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    // marcamos como tiene raiz si su discriminante es == 0
    tieneRaiz() {
        return this.getDiscriminante() == 0;
    }
    //calculamos el resultado: primero obtenemos el discriminante con el método anterior y
    //con if() ponemos la formula/formulas según si tiene una raiz, dos raices o si no tiene solución (que devuelve console.log)
    calcular() {
        const discriminante = this.getDiscriminante();
        if (this.tieneRaiz()) {
            const x = -this.b / (2 * this.a);
            this.obtenerRaiz(x);
        }
        else if (this.tieneRaices()) {
            const solucionUno = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const solucionDos = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            this.obtenerRaices(solucionUno, solucionDos);
        }
        else {
            console.log("No tiene solución.");
        }
    }
    //según si tiene una o dos soluciones imprimimos por consola obtenerRaices() u obtenerRaiz() del método calcular()
    obtenerRaices(solucionUno, solucionDos) {
        console.log("x1 = ", solucionUno);
        console.log("x2 = ", solucionDos);
    }
    obtenerRaiz(number) {
        console.log("x =", number);
    }
}
