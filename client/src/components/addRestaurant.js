import React, {useState} from 'react'
import restaurantFinder from '../apis/restaurantFinder'


const AddRestaurant = () =>{
    const [payload, setPayload] = useState({
        name:'',
        location:'',
        price_range: 'Price Range' 
    })

    const changeHandler = e =>{
        setPayload({
            ...payload,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        await restaurantFinder.post('/', payload)
    }


    return(
        <div >
            <form>
            <input name='name' value={payload.name} type='text' placeholder='name' onChange={changeHandler}></input>
            <input name='location' value={payload.location} type='text' placeholder='location' onChange={changeHandler}></input>
            <select name='price_range' value={payload.price_range} onChange={changeHandler}>
                <option disabled>Price Range</option>
                <option value='1'>$</option>
                <option value='2'>$$</option>
                <option value='3'>$$$</option>
                <option value='4'>$$$$</option>
                <option value='5'>$$$$$</option>
            </select>
            <button type='submit' onClick={submitHandler}> Add </button>
            </form>
        </div>
    )
}

export default AddRestaurant