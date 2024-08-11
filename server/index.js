const express = require('express');
const app = express();
const port = 5000;
const hostname = 'localhost'
require('dotenv').config();
const axios = require('axios')
const cors = require('cors')
const bodyparser = require('body-parser')
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())
const crypto = require('crypto')

const ts = new Date().getTime();
const publicKey  = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY
const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex')

app.listen(port, hostname, ()=>{
    console.log(`Servidor corriendo! en ${hostname} : ${port}`)
})

// Prueba Get para saber si esta bien la peticion con el hash y apiKey
/*app.get('/', async(req, res) => {
    const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=thor&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(info.data)
    console.log(info.data.data.results[0].description)
    
})*/

// Busqueda por nombre
app.post('/', async(req, res) => {
    const {character} = req.body
    const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(info.data)
    console.log(info.data.data)    
})

app.post('/charInfo', async(req, res) => {
    const {id} = req.body
    const infoId = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(infoId.data)
})

