import styles from './styles.module.css';
import shoppingCard from '../../assets/shopping-cart.svg';
export function Header() {
    return (
        <header className={styles.header}>

            <div>
                <h1 className={styles.list}>Lista de Compras</h1>
            </div>
            <div>
                <img src={shoppingCard} alt="shoppingCard"/>
                <span>12
                {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
                 </span>
            </div>
        </header>
    )
}