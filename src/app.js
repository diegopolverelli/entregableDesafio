const express = require('express')
const app = express()
const PORT=3000;

let sw=[
    {
        id:1,
        nombre:"Luke",
        ladoOscuro: "N"
    },
    {
        id:2,
        nombre:"R2D2",
        ladoOscuro: "N"
    },
    {
        id:3,
        nombre:"Darth Vader",
        ladoOscuro: "S"
    },
    {
        id:4,
        nombre:"Emperador",
        ladoOscuro: "S"
    },
    {
        id:5,
        nombre:"Han Solo",
        ladoOscuro: "N"
    },

];

app.get('/saludo/:nombre', function (req, res) {
    let nombre=req.params.nombre;
    res.send('hola, soy '+nombre);
})

app.get('/saludo/:nombre/:apellido', function (req, res) {
    let nombre=req.params.nombre;
    res.send('hola, soy '+nombre+' '+req.params.apellido);
})


app.get('/buscar', function (req, res) {
        res.send(sw);

})


app.get('/buscar/:id', function (req, res) {
    let id=req.params.id;

    let personaje=sw.find(e=>e.id==id);
    if(personaje){
        res.json(personaje)
    }else{
        res.send(`No existe personaje con id ${id}`);
    }

})


app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
})