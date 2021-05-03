import React from 'react'


const AddRestaurant = () =>{
    return(
        <div >
            <form>
            <input type='text' placeholder='name'></input>
            <input></input>
            <select>
                <option disabled>Price Range</option>
                <option value='1'>$</option>
                <option value='2'>$$</option>
                <option value='3'>$$$</option>
                <option value='4'>$$$$</option>
                <option value='5'>$$$$$</option>
            </select>
            <button> Add </button>
            </form>
        </div>
    )
}

export default AddRestaurant