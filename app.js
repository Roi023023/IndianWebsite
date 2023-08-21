const imagesRouter = require('./routes/images')
const productsInfo = require('./models/products')
const express = require('express')

const app = express()

app.get('/', function(req, res){//return the cards 
    const cards = getCards()

    let divs = ''
    for (let i = 0; i < cards.length; i++){//sum of all cards
        const product = productsInfo.getProductsInfo()
        divs += product
    }
    
    // res.end(`<html>
    //         <body>
    //         ${divs}
    //         </body>
    //     <html>`)
    res.render('products.ejs', {})
})

app.use(express.static('public'))

app.use('/', imagesRouter)

app.listen(8800)