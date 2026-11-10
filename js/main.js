class Libro {
    constructor(titulo,autor,isbn,prestado) {
        this.titulo = titulo,
        this.autor = autor,
        this.isbn = isbn,
        this._prestado = prestado
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
