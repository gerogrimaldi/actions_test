const express = require('express'); 

const app = express(); app.get('/',
    (req, res) => res.send('¡Hola desde Cloud Run!')); 
    
app.listen(8080, () =>
    console.log('Servidor corriendo en el puerto 8080'));