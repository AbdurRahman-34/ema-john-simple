import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {

    
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    
    const navigate = useNavigate()

    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handelRemoveProduct={handelRemoveProduct}/>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='cart-bottom-btn' onClick={() => navigate('/inventory')}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;