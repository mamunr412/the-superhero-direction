import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleCard from '../SingleAstronaut/SingleCard';
import './Main.css'
const Main = () => {
    const [astronauts, setAstronauts] = useState([]);
    const [cart, setCart] = useState([]);

    //load data from JSON file
    useEffect(() => {
        fetch('./astronauts.JSON')
            .then(res => res.json())
            .then(data => setAstronauts(data))
    }, []);

    const handelCart = (astronaut) => {
        const newCart = [...cart, astronaut]
        setCart(newCart);
    }

    return (
        //show data main page
        <div className="main-container">
            <div className="single-astronaut">
                {
                    astronauts.map(astronaut => <SingleCard
                        key={astronaut.id}
                        astronaut={astronaut}
                        handelCart={handelCart}></SingleCard>)
                }
            </div>
            {/* add cart section */}
            <div>

                <Cart

                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;