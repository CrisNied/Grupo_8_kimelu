/* Entry point */
const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

/* Archivos estaticos */
app.use(express.static(path.resolve(__dirname,'public')));

/* Rutas */
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','index.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalle.html')));
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')));



/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
});