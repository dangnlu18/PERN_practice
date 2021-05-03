import React from 'react'

const RestaurantList = () =>{
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
                    <tr>
                        <td>Taco Bell</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default RestaurantList