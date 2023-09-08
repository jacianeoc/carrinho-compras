import React from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.css';
import {ButtonCart} from "../ButtonCart";

export function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.linkCart} to="/">
                <h1 className={styles.list}>Lista de Compras</h1>
            </Link>

            <Link className={styles.linkCart} to="/cart">
                <ButtonCart />
            </Link>
        </header>
    )
}