class Libro {
    constructor(titulo,autor,isbn,_prestado) {
        this.titulo = titulo,
        this.autor = autor,
        this.isbn = isbn,
        this._prestado = _prestado
    }

    prestar() {
        this._prestado = true
    }
    devolver() {
        this._prestado = false
    }
    getEstado() {
        return (this._prestado)
    }
}

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
            libro.getEstado(); // "Disponible"
            libro.prestar();
            libro.getEstado(); // "Prestado"

console.log(libro.getEstado())
console.log(libro.prestar())



const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros(); // muestra el libro como "Prestado"