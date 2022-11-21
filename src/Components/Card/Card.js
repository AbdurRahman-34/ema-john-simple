import React from 'react';

const Card = ({cart}) => {
   console.log(cart.lenght);

    return (
        <div>
            <h2>hello{cart.lenght}</h2>
        </div>
    );
};

export default Card;