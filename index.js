const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const libros = require('./routers/libros')

// Constante del port para ayudarnos a no tener que reescribir todo el codigo
const port = 4000

const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

// Añadir siempre Prefijo
app.use('/libros', libros)

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando en el localhost:${port}`)
})