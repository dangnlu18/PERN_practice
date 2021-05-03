import React, {useEffect, useContext} from 'react'
import restaurantFinder from '../apis/restaurantFinder'
import {RestaurantsContext} from '../context/RestaurantsContext'
import {useHistory} from 'react-router-dom'

const RestaurantList = (props) =>{
    const {restaurants, setRestaurants } = useContext(RestaurantsContext)
    let history = useHistory()


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
    },[restaurants, setRestaurants])


    const deleteHandler = async(id) =>{
        try{
            await restaurantFinder.delete(`/${id}`)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleUpdate = (id) =>{
        try{
            history.push(`/restaurants/${id}/update`)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleRestaurantClick = (id) =>{
        try{
            history.push(`/restaurants/${id}`)
        }
        catch(err){
            console.log(err)
        }
    }

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
                        <tr key={rest.id} onClick={() => handleRestaurantClick(rest.id)}>
                            <td>{rest.name}</td>
                            <td>{rest.location}</td>
                            <td>{"$".repeat(rest.price_range)}</td>
                            <td>reviews</td>
                            <td><button onClick={()=>handleUpdate(rest.id)}>Edit</button></td>
                            <td><button onClick={()=>deleteHandler(rest.id)}> Delete</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default RestaurantList