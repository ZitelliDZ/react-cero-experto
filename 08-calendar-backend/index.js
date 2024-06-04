
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();



app.get('/saludo', (req, res) => {
    res.send({
        mensaje: 'Hola Mundo'
    });
    }
);

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    }
);