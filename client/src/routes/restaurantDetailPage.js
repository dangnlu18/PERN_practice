import React, {useState, useEffect} from 'react'
import restaurantFinder from '../apis/restaurantFinder'
import { useParams } from 'react-router-dom'

const RestaurantDetailPage = () =>{
    const [payload, setPayload] = useState({
        name: '',
        location: '',
        price_range: ''
    })

    const {id} = useParams()

    useEffect(() =>{
        const fetchData = async () =>{
            const results = await restaurantFinder.get(`/${id}`)
            setPayload(results.data.data.restaurants)
        }
        fetchData()
    },[id])

    

    return(
        <div>
            <h1>{payload.name} </h1>
            <h2>{payload.location}</h2>
            <h3>{"$".repeat(payload.price_range)}</h3>
        </div>
    )
}

export default RestaurantDetailPage