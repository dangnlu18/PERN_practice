import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import restaurantFinder from '../apis/restaurantFinder'
import {useHistory} from 'react-router-dom'




const UpdateRestaurant = (props) =>{
    let history = useHistory()
    const {id} = useParams()
    const [payload, setPayload] = useState({
        name:1,
        location:1,
        price_range:1 
    })

    useEffect( ()=>{

        const fetchData = async () =>{
            try{
                const results = await restaurantFinder.get(`/${id}`)
                setPayload(results.data.data.restaurants)
            }
            catch(err){
                console.log(err)
            }
        }

        fetchData()
    },[id])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await restaurantFinder.put(`/${id}`, payload)
        history.push('/')
    }

    const handleChange = (e) =>{
        setPayload({
            ...payload,
            [e.target.name] : e.target.value
        })
    }
    
    

    return(
        <div>
            <form>
                <input value={payload.name} name='name' type='text' onChange={handleChange}></input>
                <input value={payload.location} name='location' type='text' onChange={handleChange}></input>
                <select value={payload.price_range} name='price_range' type='number' onChange={handleChange}>
                    <option value='default'></option>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                    <option value='5'>$$$$$</option>
                </select>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UpdateRestaurant