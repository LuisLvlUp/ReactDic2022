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

app.use(express.json());

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
    console.log(req.body)

    let { nombre, peso, img } = req.body

    let tmpPaquete = {
        id: paquetes.length == 0 ? 1 : paquetes[paquetes.length - 1 ].id + 1,
        nombre,
        peso,
        img,
    }

    paquetes.push(tmpPaquete)

    res.json(tmpPaquete)
})

app.put('/paquetes/:id', (req, res) => {

    let { id } = req.params
    let { nombre, peso, img } = req.body
    let tmpPaquete

    try {
        for (let [index, item] of paquetes.entries()) {
            if(id == item.id){
                tmpPaquete = {
                    ...item,
                    nombre, peso, img
                }
                paquetes[index] = tmpPaquete
            }
        }
    
        if(tmpPaquete){
            console.log()
            res.status(200).json(tmpPaquete)
        }else{
            res.status(404).json({response: 'ID not found'})
        }
    } catch (error) {
        res.status(500).json({ response: error.message })
    }
})

app.delete('/paquetes/:id', (req, res) => {
    let id = req.params.id
    paquetes = paquetes.filter( (item) => item.id != id )
    res.json(paquetes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})