class Cine {

    // Propiedades
    private pelicula: Peliculas;
    private precioEntrada: number;
    private asientos: Asiento[][];

    // Constructor
    constructor(newPelicula: Peliculas, newPrecioEntrada: number) {
        this.pelicula = newPelicula;
        this.precioEntrada = newPrecioEntrada;
        this.asientos = this.rellenarAsientos();
    }

    // Métodos
    getPrecioEntrada(): number {
        return this.precioEntrada;
    }

    setPrecioEntrada(newPrecioEntrada: number): void {
        this.precioEntrada = newPrecioEntrada;
    }

    getAsientos(): Asiento[][] {
        return this.asientos;
    }

    //Método para rellenar los asientos de forma aleatoria
    rellenarAsientos(): Asiento[][] {
        
        //Inicializamos los datos
        let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        let numeros = [8, 7, 6, 5, 4, 3, 2, 1];
        let asientos: Asiento[][] = [];

        for (let fil = 0; fil < numeros.length; fil++) {

            asientos[fil] = [];
            
            for (let col = 0; col < letras.length; col++) {

                let nombre = numeros[fil] + letras[col];
                asientos[fil][col] = new Asiento(nombre, false);
            }
        }

        return asientos;
    }
}