require('dotenv').config()
const express = require('express')
const db = require('./db/index.js')
const morgan = require('morgan')
const app = express()

app.use(express.json())

app.get('/api/v1/restaurants', async (req, res) =>{
    const results = await db.query('SELECT * FROM restaurants')

    res.status(200).json(
        {
        text: 'this gets all restaurants',
        data: {
            restaurants: results.rows
            }
        }
        
    )

})


app.get('/api/v1/restaurants/:restaurantId', async (req, res) =>{
    const restaurantId = parseInt(req.params.restaurantId)
    const result = await db.query(`SELECT * FROM restaurants where id=${restaurantId}` )
    res.status(200).json(
        {
        text: `this gets the restaurant at restaurantId:${restaurantId}`,
        data: {
            restaurants: result.rows
            }
        }
        
    )

})


app.post('/api/v1/restaurants', (req,res)=>{
    const {name, location, price_range} = req.body
    console.log(name, location, price_range)
    res.status(201).json({
        data: "data is here"
    })
})

app.put('/api/v1/restaurants/:restaurantID', (req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        data: "data is here"
    })
})

app.delete('/api/v1/restaurants/:id', (req,res)=>{
    console.log(req.params.id)
    res.status(204).json({
        status: 'success'
    })
    
})

const port = process.env.PORT || 3005
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})