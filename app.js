const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.port || 3000

const route = require('./routes/route.js')
app.use(route)
app.use(express.static(path.join(__dirname,"./public")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port=>{
    console.log(`Sunucu http://localhost:${port} portu üzerinde dinleniyor`)
})