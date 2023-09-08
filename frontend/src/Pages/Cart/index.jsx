
import { formatPrice} from '../../utils/currency';

import {Header} from "../../Components/Header";
import {useCart} from "../../hooks/useCart";
import {ItemCart} from "../../Components/ItemCart";

import styles from './styles.module.css';
import {useState} from "react";

export function Cart() {
    const { cartItems, sendEmail } = useCart();

    const [emailInput, setEmailInput] = useState("");
    const totalPrice = () =>{if (cartItems.collection){
        return cartItems?.collection?.reduce((acc, item) => (item.price * item.quantity) + acc, 0)
    }else {
        return 0;
    }};

    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
    };

    function handleSendEmail() {
        sendEmail(emailInput, formatPrice(totalPrice(), 'BRL'))
    }

    return(
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.cartItems}>
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan="2" >Produto</th>
                            <th rowSpan="1">Preço</th>
                            <th rowSpan="1">Quantidade</th>
                            <th rowSpan="1">Total</th>

                        </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems?.collection?.map((cartItem) => <ItemCart key={cartItem.product_id} data={cartItem} />)
                            }
                        </tbody>
                    </table>

                </div>
                <section className={ styles.cartResume }>
                    <h1 className={ styles.cartResumeTitle}>Resumo Do Pedido </h1>
                    <div className={ styles.cartResumeValue}>
                        <p>Total</p>
                        <p className={ styles.cartResumeTotal} >{formatPrice(totalPrice(), 'BRL') }</p>
                    </div>
                    <div>
                        <label>Digite um email válido para confirmar compra:</label>
                        <input
                            type="text"
                            className={styles.inputEmail}
                            data-testid="product-amount"
                            onChange={handleEmailChange}
                        />
                        <button
                            type="button"
                            className={styles.btnBuy}
                            data-testid="increment-product"
                            onClick={() => handleSendEmail()}
                        >
                            Comprar Agora
                        </button>

                    </div>
                </section>

            </section>
        </>
    )
}