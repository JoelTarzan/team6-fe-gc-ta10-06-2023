//Instanciamos un par de libros.
let libro1: Libro = new Libro('911-71-1821-123-0', 'Teo va al Zoo', 'J.K. Puyol', 300);
let libro2: Libro = new Libro('978-84-6367-741-9', 'Elantris', 'Brandon Sanderson', 700);

//Los mostramos por consola y los comparamos por su número de páginas.
console.log(libro1.toString());
console.log(libro2.toString());
console.log("----------------------------------------");

if (libro1.getNumPag() > libro2.getNumPag()) {
    console.log(`${libro1.getTitulo()} tiene mas páginas que ${libro2.getTitulo()}`);
    
} else if (libro1.getNumPag() < libro2.getNumPag()) {
    console.log(`${libro2.getTitulo()} tiene mas páginas que ${libro1.getTitulo()}`);

} else {
    console.log(`${libro1.getTitulo()} tienen las mismas páginas que ${libro2.getTitulo()}`);

}