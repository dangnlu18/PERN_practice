import React from 'react'
import Header from '../components/header'
import AddRestaurant from '../components/addRestaurant'
import RestaurantList from '../components/restaurantList'

const Home = () =>{
    return(
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    )
}

export default Home