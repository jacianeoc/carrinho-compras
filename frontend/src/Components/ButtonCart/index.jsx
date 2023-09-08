import styles from './styles.module.css';
import React from "react";
import shoppingCart from '../../assets/shopping-cart.svg';
import {useCart} from "../../hooks/useCart";
export function ButtonCart() {
    const { cartItems, isCartVisible, setIsCartVisible } = useCart();

    return (
            <button
                type="button"
                className={styles.cartButton}
                onClick={ () => setIsCartVisible(!isCartVisible) }
            >
                <img src={shoppingCart} alt="shoppingCart"/>
                <span> { cartItems.totalCount}</span>
            </button>
    )
}