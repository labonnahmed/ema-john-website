import React from 'react';

const Cart = (props) => {

    const total= props.cart.reduce((total, product) => total+ product.price , 0);

    let Shipping= 0;
    if( total > 35){
        Shipping = 0;
    }
    else if( total > 15){
        Shipping= 4.99;
    }
    else if(total > 0){
        Shipping= 12.99
    }

    const tax= (total / 10)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {props.cart.length}</p>
            <p><small>Shipping Cost: {Shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total price: {formatNumber(total + Shipping + tax)}</p>
        </div>
    );
};

export default Cart;