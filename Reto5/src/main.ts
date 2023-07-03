//Creamos objetos de pelicula, cine y un array de espectadores
const pelicula = new Peliculas('Five Nights at Freddy', 120, 12, 'Abraham Mateo');
const cine = new Cine(pelicula, 8);

const espectadores: Espectador[] = [
    new Espectador("Antonio", 30, 500),
    new Espectador("Maria", 15, 20),
    new Espectador("Alberto", 2, 7000),
    new Espectador("Lucas", 12, 15),
    new Espectador("Laura", 32, 30),
    new Espectador("Nuria", 17, 70),
    new Espectador("Óscar", 5, 56),
    new Espectador("Víctor", 82, 182),
    new Espectador("Nico", 41, 0),
    new Espectador("Fausto", 14, 18),
    new Espectador("Roberto", 27, 3),
    new Espectador("Esther", 21, 2),
    new Espectador("Agustín", 84, 10),
    new Espectador("Juanjo", 32, 81),
    new Espectador("Jose Miguel", 10, 23),
    new Espectador("Blitzcrank", 7, 8),
    new Espectador("Miss Fortune", 38, 2),
    new Espectador("Master Yi", 29, 1),
    new Espectador("Garen", 19, 89),
    new Espectador("Steve", 27, 30),
    new Espectador("Nancy", 38, 7),
    new Espectador("Marta", 48, 1),
    new Espectador("Abdul", 66, 3),
    new Espectador("Vladimir", 71, 19),
];

let asientos = cine.getAsientos();

for (let i = 0; i < espectadores.length; i++) {

    let asientoOcupado: boolean = true;
    
    //Comprobamos si el espectador tiene el dinero suficiente y si tiene la edad minima para ver la película.
    if (espectadores[i].getDinero() >= cine.getPrecioEntrada() && espectadores[i].getEdad() >= pelicula.getEdadMin()) {

        while (asientoOcupado) {
             //Calcula un asiento de forma aleatoria.
            let fil = Math.floor((Math.random() * (asientos.length)));
            let col = Math.floor((Math.random() * (asientos[0].length)));

            //Comprobamos si el asiento esta libre, si lo esta lo sentamos, sino le buscamos otro
            if (!asientos[fil][col].getOcupado()) {
                asientos[fil][col].setOcupado(true);
                console.log(`El asiento ${asientos[fil][col].getNombre()} a sido asignado al espectador ${espectadores[i].getNombre()}`);
                asientoOcupado = false; 
            }
        }
        
    }
    
}