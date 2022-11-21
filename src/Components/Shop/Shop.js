import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';
import { addToDb, getCartStore} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getCartStore()
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
        }
    },[products])


    const handelAddToCart = (selectedProduct) => {
        let newCart = [];
        const exits =  cart.find(product => product.id === selectedProduct.id);
        // jodi brand new hoy, jodi cart na take product:
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            // jodi cart product take tahole condition / slectedProduct id sara baki gula add hobe
            const rest = cart.filter(products => products.id !== selectedProduct.id);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits]
             
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                     product = {product} 
                     key={product.id}
                     handelAddToCart= {handelAddToCart}
                     ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <Link to='/orders'>
                        <button className='cart-bottom-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;