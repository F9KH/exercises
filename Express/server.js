const express = require('express')
const app = express()

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))


const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', (req, res) => {
    const productName = req.params.name;
    const product = store.find(item => item.name === productName);
    res.send(product);
})

// ex4
app.get('/buy/:name', (req, res) => {
    const productName = req.params.name;

    for (const product of store) {
        if (product.name === productName) {
            product.inventory -= 1;
            res.send(product.inventory.toString());
        }
    }
});

// ex6
app.get('/sale', (req, res) => {
    let admin = req.query.admin;

    if (admin) {
        for (let item of store) {
            if (item.inventory > 10) {
                item.price *= 0.5;
               
                
            }
            
        }

        res.send(store);
    }   
    
});


