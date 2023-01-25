const express = require('express')
const app = express()
const port = 3000

let paquetes = [
    {
        id: 1,
        nombre: "Paquete 25lb",
        peso: 25,
        img: 'https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506042-stock-photo-wrapped-parcel.jpg'
    },
    {
        id: 2,
        nombre: "Paquete 10lb",
        peso: 10,
        img: 'imagen2'
    },
    {
        id: 3,
        nombre: "Paquete 5lb",
        peso: 5,
        img: 'imagen3'
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/adios', (req, res) => {
    res.send('Bye World!')
})

app.get('/paquetes', (req, res) => {
    res.json(paquetes)
})

app.get('/paquetes/:id', (req, res) => {
    let id = req.params.id
    let paquete = paquetes.find((item) => item.id.toString() === id)
    res.json(paquete)
})

app.post('/paquetes', (req, res) => {
    res.json(paquetes)
})

app.put('/paquetes', (req, res) => {
    res.json(paquetes)
})

app.delete('/paquetes', (req, res) => {
    res.json(paquetes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})