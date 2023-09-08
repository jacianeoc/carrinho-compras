import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../Service/api';

const CartContext = createContext({} );
export function CartProvider({ children }) {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const [products, setProduct ] = useState({});

    useEffect(()=> {
        api.get('/cart/1/products')
            .then(response => setCartItems(response.data));
    }, []);

    useEffect(()=> {
        api.get(`/products`)
            .then(response => setProduct(response.data));
    }, []);

    const getProducts = async()=>{
        try {
            const response = await api.get(`/products`);
            return response.data;

        } catch (e){
            throw e;
        }
    }
        const getProduct = async(idProduct)=>{
        try {
            const response = await api.get(`/cart/1/products/${idProduct}`);
            return response.data;

        } catch (e){
            throw e;
        }
    }
    const addProductOnCart = async (productId) => {
        try {
            const response = await api.post(`/cart/1/products`,{"product_id":productId, "quantity":1} );
            await api.get('/cart/1/products')
                .then(response => setCartItems(response.data));
            return response.data;
        } catch (e){
           alert('produto já adicionado!')
        }
    };

    const removeProduct = async (productId) => {
        try {
            const response = await api.delete(`/cart/1/products/${productId}`);
            await api.get('/cart/1/products')
                .then(response => setCartItems(response.data));

            return response.data;
        } catch (e){
            throw e;
        }
    };

    const updateProductAmount = async (productId, amount) => {
        try {
            const response = await api.put(`/cart/1/products/${productId}`,
                                                        {"product_id": productId, "quantity": amount});
            await api.get('/cart/1/products')
                .then(response => setCartItems(response.data));

            return response.data;
        } catch (e){
            throw e;
        }
    };
    const sendEmail = async (email, valor) => {

        try {
            const subject = "Compra realizada!"
            let msg = `Você acabou de realizar uma compra com o valor de ${ valor }`;

            const response = await api.post(`/send-email`, {"to": email,
                                                                "subject": subject,"message": msg});
            return response.data;
        } catch (e){
            throw e;
        }
    };

    return (
        <CartContext.Provider
            value={{ isCartVisible, setIsCartVisible,cartItems, setCartItems,
                products,getProducts, getProduct, addProductOnCart , removeProduct,
                updateProductAmount, sendEmail }}
        >
            { children }
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}