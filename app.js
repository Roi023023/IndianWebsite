const imagesRouter = require('./routes/images')

const express = require('express')

const app = express()

function getCards(){
    return [{id: 1, name: 'card 1'}, {id: 2, name: 'card 2'}]
}

app.get('/', function(req, res){//return the cards 
    const cards = getCards()

    let divs = ''
    for (let i = 0; i < cards.length; i++){//sum of all cards
        const card = '<div>card number' +i+ '</div>';
        divs += card
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