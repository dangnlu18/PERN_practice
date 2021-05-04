import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as fullStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'

let stars = []



const AddReview =() =>{
    return(
        <div>
            <form>
                <input type='text' placeholder='Name'></input>
                <select type='number'>
                    <option disabled>Rating</option>
                    <option value='1'></option>
                    <option value='2'></option>
                    <option value='3'></option>
                    <option value='4'></option>
                    <option value='5'></option>
                </select>
                <input type='text' placeholder='Review'></input>
            </form>
        </div>
    )
}

export default AddReview