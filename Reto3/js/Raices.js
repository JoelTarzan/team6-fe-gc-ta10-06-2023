"use strict";
class Raices {
    //2-Constructor
    constructor(newA, newB, newC) {
        this.a = newA;
        this.b = newB;
        this.c = newC;
    }
    //3-Métodos de la class
    getDiscriminante() {
        return (Math.pow(this.b, 2)) - (4 * this.a * this.c);
    }
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() == 0;
    }
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
    obtenerRaices(solucionUno, solucionDos) {
        console.log("x1 = ", solucionUno);
        console.log("x2 = ", solucionDos);
    }
    obtenerRaiz(number) {
        console.log("x =", number);
    }
}
