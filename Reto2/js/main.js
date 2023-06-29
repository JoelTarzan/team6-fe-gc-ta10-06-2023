"use strict";
let libro1 = new Libro('911-71-1821-123-0', 'Teo va al Zoo', 'J.K. Puyol', 300);
let libro2 = new Libro('978-84-6367-741-9', 'Elantris', 'Brandon Sanderson', 700);
console.log(libro1.toString());
console.log(libro2.toString());
if (libro1.getNumPag() > libro2.getNumPag()) {
    console.log(`${libro1.getTitulo()} tiene mas páginas que ${libro2.getTitulo()}`);
}
else if (libro1.getNumPag() < libro2.getNumPag()) {
    console.log(`${libro2.getTitulo()} tiene mas páginas que ${libro1.getTitulo()}`);
}
else {
    console.log(`${libro1.getTitulo()} tienen las mismas páginas que ${libro2.getTitulo()}`);
}
