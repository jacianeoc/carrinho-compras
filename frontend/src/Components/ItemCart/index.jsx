import  styles from './styles.module.css';
import {useCart} from "../../hooks/useCart";
import {formatPrice} from "../../utils/currency";

export function ItemCart({data}) {
    const { removeProduct, updateProductAmount} = useCart();

    const handleRemoveItem = () => {
        removeProduct(data?.product_id);
    };

    function handleProductDecrement(){
        updateProductAmount((data.product_id), (data?.quantity-1));
    }

    function handleProductIncrement(){
        updateProductAmount((data.product_id), (data?.quantity+1));
    }

    return(
        <tr className={styles.cartItem}>
            <td>
                <div className={styles.productInfo}>
                    <img
                        src={data.image}
                        alt="photo product"
                        className={ styles.cartItemImage}
                    />
                    <div>
                        <h3 className={styles.cartItemName}>{data.name}</h3>
                        <button
                            type="button"
                            className={ styles.buttonRemoveItem}
                            onClick={ handleRemoveItem }
                        >
                            <p>excluir</p>
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <p>{formatPrice(data.price, 'BRL')}</p>
            </td>

            <td>
                <div>
                    <button
                        type="button"
                        className={styles.buttonAmount}
                        data-testid="decrement-product"
                         disabled={data.quantity <= 1}
                        onClick={() => handleProductDecrement()}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className={styles.inputAmount}
                        data-testid="product-amount"
                        readOnly
                        value={data.quantity}
                    />
                    <button
                        type="button"
                        className={styles.buttonAmount}
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement()}
                    >
                       +
                    </button>
                </div>
            </td>

            <td>
                <p>{formatPrice(data.price * data.quantity, 'BRL')}</p>
            </td>
        </tr>
    )
    
}