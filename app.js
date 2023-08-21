const productsRouter = require('./routes/products')
const express = require('express')

const app = express()

//app.use(express.static('public'))

app.use('/', productsRouter) //for every request, use productsRouter

app.listen(8800)