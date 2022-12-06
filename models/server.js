const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port =  process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //rutas de mi app
        this.routes();
    }

    middlewares() {
        //CORS 
        this.app.use(cors());
        // Parseo y lectura del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        //se llama en postman asi: http://localhost:8080/api/usuarios
        this.app.use(this.usuariosPath, require('../routes/usuarios')); // el path es /api/usuarios y  el segundo es el archivo de routes
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('Corriendo en', this.port);
        });
    }
}

module.exports = Server;
