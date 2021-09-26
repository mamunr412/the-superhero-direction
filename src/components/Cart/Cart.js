import React from 'react';

import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const { cart } = props;
    let total = 0;
    for (const astronaut of cart) {
        total = total + astronaut.salary
    }
    return (
        <div className="cart-main-container">
            <h1>Astronaut Add : {props.cart.length}</h1>
            <h1>Salary: $ {total}</h1>
            {
                cart.map(card => <h3 key={card.id}>Name: {card.name}</h3>)
            }

        </div >
    );
};

export default Cart;