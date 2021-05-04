import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar as fullStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'




const StarRating = ({rating}) =>{
    const stars = [];
    for (let i=1; i <=5; i++){
        if (i <= rating){
            stars.push(<FontAwesomeIcon icon={fullStar} />)
        }else if (i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} />)
        }
        
        else{
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
    }


    return(
        <>
        <div>RATING</div>
        {stars}
        </>
    )
}

export default StarRating