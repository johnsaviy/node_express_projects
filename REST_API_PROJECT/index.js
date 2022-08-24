const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send('Hello world')
})


const products = [
    {
        id: 1,
        name: 'Orange', 
        price: 20,
    },
    {
        id: 2,
        name: 'Apple', 
        price: 30,
    },
    
]

// Show list of products
app.get('/api/products', (req, res)=>{
    res.json(products)
})


// show specific products



// insert a product Data
// update specific product data (using PUT method)
// update specific product data (using PATCH method)
// delete a specific product data
// delele all products data

app.listen(3000, ()=> console.log('Server is running on port 3000'))