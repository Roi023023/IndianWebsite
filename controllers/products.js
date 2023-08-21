const productsModel = require('../models/products')

exports.getAllProducts = function(req, res){//return the cards 
    const products = productsModel.getProductsInfo() // array of products

    res.render('products.ejs', {product : products})
}

// let divs = ''
    //for (let i = 0; i < cards.length; i++){//sum of all cards
      //  const product = productsInfo.getProductsInfo()
        // divs += product
    //}
    
    // res.end(`<html>
    //         <body>
    //         ${divs}
    //         </body>
    //     <html>`)