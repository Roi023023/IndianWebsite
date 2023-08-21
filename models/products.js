const products = [
    {id : 57, name : 'bar.jpg'},
    {id : 103, name : '2.png'}
]

exports.getProductsInfo = () => {
    return images
}

exports.getProduct = (id) => {
    return images.filter(function(item){
        return item.id == id
    })[0]
}
