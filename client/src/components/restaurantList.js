import React, {useEffect, useContext} from 'react'
import restaurantFinder from '../apis/restaurantFinder'
import {RestaurantsContext} from '../context/RestaurantsContext'

const RestaurantList = (props) =>{
    const {restaurants, setRestaurants } = useContext(RestaurantsContext)


    useEffect( ()=>{

        const fetchData = async () =>{
            try{
                const results = await restaurantFinder.get('/')
                setRestaurants(results.data.data.restaurants)
            }
            catch(err){
                console.log(err)
            }
        }

        fetchData()
    },[])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price Range</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
    
                    {restaurants && restaurants.map(rest => {return(
                        <tr key={rest.id}>
                            <td>{rest.name}</td>
                            <td>{rest.location}</td>
                            <td>{"$".repeat(rest.price_range)}</td>
                            <td>reviews</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default RestaurantList