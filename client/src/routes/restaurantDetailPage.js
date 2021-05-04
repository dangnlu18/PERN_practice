import React, {useState, useEffect} from 'react'
import restaurantFinder from '../apis/restaurantFinder'
import { useParams } from 'react-router-dom'
import StarRating from '../components/starRating'
import Reviews from '../components/reviews'
import AddReview from '../components/addReview'

const RestaurantDetailPage = () =>{
    const [payload, setPayload] = useState({
        name: '',
        location: '',
        price_range: ''
    })

    // const [reviews, setReviews] = useState([])

    const {id} = useParams()

    useEffect(() =>{
        const fetchData = async () =>{
            const results = await restaurantFinder.get(`/${id}`)
            setPayload(results.data.data.restaurants)
        }
        fetchData()
    },[id])

    // useEffect(() =>{
    //     const fetchData = async () =>{
    //         const results = await restaurantFinder.get(`/${id}/reviews`)
    //         setPayload(results.data.data.restaurants)
    //     }
    //     fetchData()
    // },[reviews])
    

    return(   
        <div>
            <h1>{payload.name} </h1>
            <h2>{payload.location}</h2>

            

            <Reviews />

            <AddReview />
        </div>
    )
}

export default RestaurantDetailPage