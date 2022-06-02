const express = require('express');
const path = require('path');
const app = express();
const publicFolderPath = path.resolve(__dirname, './public');

//---MIDDLEWARE---
app.use(express.static(publicFolderPath));
app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor corriendo en el puerto 3000 o ' + process.env.PORT);
});

//---RUTAS---
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})