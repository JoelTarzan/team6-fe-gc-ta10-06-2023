"use strict";
const series = [
    new Serie("The Bootcamp", "Joseph Marine"),
    new Serie("Fundation", "Carl Olson"),
    new Serie("I don't like Summer", "Marco Santoro"),
    new Serie("El Brujero", "Dimitri Sanchez"),
    new Serie("Bobobo", "Yoshida Matsumoto")
];
const videojuegos = [
    new Videojuego("War of the God of wars that is god in this war of gods", 60, "Graphic Adventure", "Alcachofasoft"),
    new Videojuego("White Souls", 10, "Romantic Horror", "From Some Software"),
    new Videojuego("Pokámions", 120, "JRP", "Noentiendo"),
    new Videojuego("Legends of The League", 580, "Toxic Korean Horror", "Rito Games Pls"),
    new Videojuego("This Kraft of Mine", 1370, "Sand Box", "Moyank")
];
series[3].setNumTemporadas(10);
series[0].setNumTemporadas(5);
series[4].setNumTemporadas(8);
series[3].entregar();
series[0].entregar();
series[4].entregar();
videojuegos[0].entregar();
videojuegos[4].entregar();
videojuegos[2].entregar();
let seriesEntregadas = 0;
let videojuegosEntregados = 0;
for (let i = 0; i < series.length; i++) {
    if (series[i].isEntregado()) {
        seriesEntregadas++;
        series[i].devolver();
    }
}
for (let i = 0; i < videojuegos.length; i++) {
    if (videojuegos[i].isEntregado()) {
        videojuegosEntregados++;
        videojuegos[i].devolver();
    }
}
console.log(seriesEntregadas);
console.log(videojuegosEntregados);
let serieMasTemporadas = series[0];
series.forEach(serie => {
    serieMasTemporadas = serieMasTemporadas.compareTo(serie);
});
console.log(serieMasTemporadas.toString());
let videojuegoMasHoras = videojuegos[0];
videojuegos.forEach(videojuego => {
    videojuegoMasHoras = videojuegoMasHoras.compareTo(videojuego);
});
console.log(videojuegoMasHoras.toString());
