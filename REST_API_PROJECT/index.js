const express = require('express');
const app = express();
const Joi = require('joi')
const { v4: uuidv4 } = require('uuid')



app.get('/', (req, res)=>{
    res.send('Hello world')
})


const products = [
    {
        id: "1",
        name: 'Orange', 
        price: 20,
    },
    {
        id: "2",
        name: 'Apple', 
        price: 30,
    },
    
]

// Show list of products
app.get('/api/products', (req, res)=>{
    res.json(products)
})


// show specific products

app.get('/api/products/:id', (req, res)=>{
    const {id} = req.params
    const product = products.find(prod => prod.id === id)

    if (!product){
        return res.status(404).json({
            error: 'Product not found with this ID'
        })
    }
    return res.json(product)
   
})

// insert a product Data

app.use(express.json())
app.post('/api/products', (req, res)=>{

    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required()
    })

    const {error} = schema.validate(req.body)

    if(error){
        return res.status(400).json({
            messgae: error.details[0].message
        })
    }

    const product = {
        id: uuidv4(),
        name: req.body.name,
        price: req.body.price
    }

    products.push(product)

    return res.json(product)

    // res.send(req.body)
})


// update specific product data (using PUT method)







// update specific product data (using PATCH method)
// delete a specific product data
// delele all products data

app.listen(3000, ()=> console.log('Server is running on port 3000'))