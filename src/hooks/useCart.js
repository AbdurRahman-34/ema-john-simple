import { useEffect, useState } from "react"
import { getCartStore } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart =  getCartStore()
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quanity = storedCart[id];
                addedProduct.quantity = quanity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
        }
    },[products]);

    return [cart, setCart];
}
export default useCart;