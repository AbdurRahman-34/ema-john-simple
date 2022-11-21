import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({product, handelAddToCart}) => {
    // const {product, handelAddToCart} = props;
    const  {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>

            
            <img src={img ? img : 'https://pleper.com/html/assets/img/no-image-found.jpg'}  alt=""/> 



            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Ratings : {ratings} Star</small></p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;