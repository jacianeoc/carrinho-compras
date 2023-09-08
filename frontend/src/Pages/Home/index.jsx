import {Header} from "../../Components/Header";
import {useCart} from "../../hooks/useCart";

import styles from "./styles.module.css";
import {ProductCard} from "../../Components/ProductCard";
export function Home() {
    const { products} = useCart();
    return(
        <>
            <Header/>
            <div className={styles.container}>
                {products?.collection?.map(product =>(
                    <ProductCard key={product.product_id}
                                 id={product.product_id}
                                 name={product.name}
                                 price={product.price}
                                 image={product.image}
                    ></ProductCard>
                ))}
            </div>
        </>
    )
}