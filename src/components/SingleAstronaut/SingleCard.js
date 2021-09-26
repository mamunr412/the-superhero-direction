import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleCard.css'
const SingleCard = (props) => {

    //destructuring all data 
    const { name, salary, img, age, Education, Country } = props.astronaut;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        //show single data
        <div className="single-card">

            <div className="card">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3>Name: {name}</h3>
                <h5>Age: {age}</h5>
                <h5>Country: {Country}</h5>
                <h5>University:  {Education} </h5>
                <h5>Salary: $ {salary}</h5>
                <button className="regular-btn" onClick={() => props.handelCart(props.astronaut)}>{shoppingCart} Add to Cart</button>
            </div>
            <div>

            </div>

        </div>

    );
};

export default SingleCard;