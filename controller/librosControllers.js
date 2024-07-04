let libros = require('../bd')

const getLibros = (req, res) => {
    res.json(libros);
}

// Obtener producto por ID
const getLibrosByID = (req, res) => {

    const idLibros = parseInt(req.params.id);  
    const librosEncontrado = products.find( products => products.id === idLibros)
    if(librosEncontrado) {
        res.json(librosEncontrado)
    } else {
        res.status(404).json({
            mensaje: "El  no se encontro el producto"
        })
    }
}

// Crear producto
const createLibro = (req, res) => {
    const { name, years} = req.body;

    // Validamos que existan los datos en nuestro body
    if (!name || !years ) {
      return res.status(400).send('No se ingreso bien los valores del producto');
    }

    // Validamos que el nombre sea una cadena de texto
    if (typeof name !== "string") {
        return res.status(400).send('El nombre que ingreso no es un String');
    }

    // Parseamos nuestra fecha a una fecha para validar
    const parsedDate = new Date(years);
    
    // Validacion de Fechas    
    if (isNaN(parsedDate.getTime()) || years.length < 10) {
        return res.status(400).send('No ingreso una fecha valida');
    }

    // Generamos un ID
    const newID = new Date().getTime();

    const newLibros = {
        // Colocamos nuestra nueva ID en el nuevo Producto
        id: newID,
        name,
        years
        
    };
    libros.push(newLibros);
    res.status(201).json(newLibros);
  };
  module.exports = {
    getLibros,
    getLibrosByID,
    createLibro,
 }
