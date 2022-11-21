import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handelRemoveProduct} = props
    const { name, img, price, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className="items-container">
                <div className="review-items-detail">
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price : <span className='price-color'>{price}</span></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delate-container" title='Click Then Item delete'>
                    <button onClick={() => handelRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;