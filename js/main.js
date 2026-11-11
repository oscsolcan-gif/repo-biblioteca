// document.querySelector('#nombreBiblioteca')

class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo,
            this.autor = autor,
            this.isbn = isbn,
            this._prestado = false;
    }

    prestar() {
        this._prestado = true
    }
    devolver() {
        this._prestado = false
    }

    getEstado() {
        if (this._prestado) {
            return 'Tu libro está PRESTADO';
        } else {
            return 'DISPONIBLE tu libro';
        }
    }

}

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
libro.getEstado(); // "Disponible"



/*console.log(libro.getEstado());
libro.prestar();                    // cambia el estado de "Prestado" a "Disponible"
console.log(libro.getEstado());
*/

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];               // Array para Añadir libros
    }

    agregarLibro(libro) {
        this.libros.push(libro);        // Para agregar cada vez un libro en la Biblioteca
    }



/*console.log(biblioteca.libros.length);            
console.log(biblioteca.libros[0].titulo);*/         


mostrarLibros() {
        this.libros.forEach(function (libro) {
            console.log(`${libro.titulo} | ${libro.autor} | ${libro.isbn} | ${libro.getEstado()}`);
        });
    }
}

const biblioteca = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblioteca.agregarLibro(libro1);        // 1984 de George Orwell
biblioteca.agregarLibro(libro);         // Cien años de soledad de Gabriel Garcia Marquez
biblioteca.mostrarLibros();



