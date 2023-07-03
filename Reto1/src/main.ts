// Array de series
const series: Serie[] = [
    new Serie("The Bootcamp", "Joseph Marine"),
    new Serie("Fundation", "Carl Olson"),
    new Serie("I don't like Summer", "Marco Santoro"),
    new Serie("El Brujero", "Dimitri Sanchez"),
    new Serie("Bobobo", "Yoshida Matsumoto")
];

// Array de videojuegos
const videojuegos: Videojuego[] = [
    new Videojuego("War of the God of wars that is god in this war of gods", 60, "Graphic Adventure", "Alcachofasoft"),
    new Videojuego("White Souls", 10, "Romantic Horror", "From Some Software"),
    new Videojuego("Pokámions", 120, "JRP", "Noentiendo"),
    new Videojuego("Legends of The League", 580, "Toxic Korean Horror", "Rito Games Pls"),
    new Videojuego("This Kraft of Mine", 1370, "Sand Box", "Moyank")
];

// Modificamos el número de temporadas de algunas series
series[3].setNumTemporadas(10);
series[0].setNumTemporadas(5);
series[4].setNumTemporadas(8);

// Entregamos algunas series y videojuegos con el método entregar()
series[3].entregar();
series[0].entregar();
series[4].entregar();

videojuegos[0].entregar();
videojuegos[4].entregar();
videojuegos[2].entregar();

// Contamos y mostramos las series y videojuegos entregados
let seriesEntregadas: number = 0;
let videojuegosEntregados: number = 0;

for (let i = 0; i < series.length; i++) {

    if (series[i].isEntregado()) {

        seriesEntregadas++;
        series[i].devolver();
        console.log('Serie: ' + series[i].getTitulo() + ' entregada.');
        
    }

}

console.log('Total de series entregadas: ' + seriesEntregadas);

for (let i = 0; i < videojuegos.length; i++) {

    if (videojuegos[i].isEntregado()) {

        videojuegosEntregados++;
        videojuegos[i].devolver();
        console.log('Videojuego: ' + videojuegos[i].getTitulo() + ' entregado.');
    }

}

console.log('Total de videojuego entregados: ' + videojuegosEntregados);

// Comparamos las series y vamos guardando la que mas temporadas tiene
let serieMasTemporadas = series[0];
let videojuegoMasHoras = videojuegos[0];

series.forEach(serie => {

    serieMasTemporadas = serieMasTemporadas.compareTo(serie);

});

console.log('La serie con mas temporadas es: ' + serieMasTemporadas.toString());
    
videojuegos.forEach(videojuego => {

    videojuegoMasHoras = videojuegoMasHoras.compareTo(videojuego);

});

console.log('El videojuego con mas horas es: ' + videojuegoMasHoras.toString());