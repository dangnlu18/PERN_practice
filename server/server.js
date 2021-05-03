require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db/index.js')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(express.json())



app.get('/api/v1/restaurants', async (req,res)=>{
    try{
        const results = await db.query('select * from restaurants')
        res.status(200).json({
            status: 'success',
            data: {
                restaurants: results.rows
            }
        })
    }
    catch(err){
        console.log(err)
    }
} )

app.get('/api/v1/restaurants/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const results = await db.query('select * from restaurants where id=$1', [id])
        
        res.status(200).json({
            status: 'success',
            data: {
                restaurants: results.rows[0]
            }
        })
        
    }
    catch(err){
        console.log(err)
    }
} )

app.post('/api/v1/restaurants', async (req,res)=>{
    try{
        const {name, location, price_range} = req.body
        const result = await db.query('insert into restaurants (name, location, price_range) values( $1, $2, $3) returning *', [name, location, price_range])
        res.status(201).json({
            status: 'success',
            data:{
                restaurants: result.rows[0]
            }
        })
    }
    catch(err){
        console.log(err)
    }
} )

app.put('/api/v1/restaurants/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const {name, location, price_range} = req.body
        const result = await db.query('update restaurants set name=$1, location=$2, price_range=$3 where id=$4 returning *', [name, location, price_range, id])
        res.status(201).json({
            status: 'success',
            data:{
                restaurant: result.rows[0]
            }
        })
    }
    catch(err){
        console.log(err)
    }
} )

app.delete('/api/v1/restaurants/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const result = await db.query('delete from restaurants where id=$1', [id])
        res.status(204).json({
            status: 'success'
        })
    }
    catch(err){
        console.log(err)
    }
} )


const port = process.env.PORT || 3005
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})