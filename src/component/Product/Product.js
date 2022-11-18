import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, stock}= props.product;

    return (
        <div className='products'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-items'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                    className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;