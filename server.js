const express = require('express');  //Para incluir el Framework
const app = express(); //Instancia del framework express
const bodyParser = require('body-parser'); //Modulo que permite leer el cuerpo para analizarlo en un objeto JSON
const morgan = require('morgan'); //Información de los servidores

//Validamos que no estemos en ambiente de producción 
if(process.env.NODE_ENV != 'production'){
    //Se carga la configuración del archivo  .env en process.env
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000); //Se setea el puerto 

//Middlewares
app.use(bodyParser.urlencoded({extended:false})); //Recibir datos formulario sencillos 
app.use(bodyParser.json()); //Para recibir json
app.use(morgan('combined'));

//ROUTES
app.use('/api/v1/users',require('./api/v1/routes/users.routes')); //Ruta para Users con la version 1 de la API - Hace lo que este en el archivo require
app.use('/api/v1/articles',require('./api/v1/routes/articles.routes')); //Ruta para Articles con la version 1 de la API
app.use('/api/v1/categories',require('./api/v1/routes/categories.routes')); //Ruta para Articles con la version 1 de la API

app.get('/api/v1/test', (req, res) => {
    res.send('Hello ADSO !!!')
})

//Starting de Server
app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
});  


