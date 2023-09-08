import styles from './styles.module.css';
import {formatPrice} from '../../utils/currency';
import {useCart} from "../../hooks/useCart";

export  function ProductCard(props) {
    const {addProductOnCart} = useCart();
    function handleAddCart() {
        addProductOnCart(props.id);
    }

    return (
        <section className={styles.productCard}>
            <img
                src={props.image}
                alt="product photo"
                className={styles.cardImage}
            />

            <div className={ styles.cardInfos}>
                <h2 className={styles.cardPrice}>{formatPrice(props.price,'BRL')}</h2>
                <h2 className={styles.cardName}>{props.name}</h2>
            </div>

            <button className={styles.buttonAddCart} onClick={handleAddCart}>
                Adicionar ao carrinho
            </button>

        </section>
    )
}