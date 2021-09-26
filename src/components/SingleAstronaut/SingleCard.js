import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleCard.css'
const SingleCard = (props) => {
    const { name, salary, img, age, Education } = props.astronaut;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="single-card">
            <div className="card">
                <img src={img} alt="" />
                <div className="details">
                    <h3>Name: {name}</h3>
                    <h5>Age: {age}</h5>
                    <h5>University:  {Education} </h5>
                    <h5>Salary: $ {salary}</h5>
                    <button className="regular-btn" onClick={() => props.handelCart(props.astronaut)}>{shoppingCart} Add to Cart</button>
                </div>
            </div>
            <div>

            </div>

        </div>

    );
};

export default SingleCard;