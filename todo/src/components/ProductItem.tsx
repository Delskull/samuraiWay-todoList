import {useState} from "react";
import type {Product} from "../types/products-type.tsx";
interface ProductItem {
    product:Product
}

export const ProductItem = (props:ProductItem) => {
    const [inCart, setInCart] = useState(false)

    const handleChangeInCart = () => {
        setInCart(cur => !cur)
        if (inCart){
            return alert('Товар удалён из корзины')
        }
        else {
            return alert('Товар добавлен в корзину')
        }
    }
    return <ul>
        <li>id:{props.product.id}</li>
        <li>name:{props.product.name}</li>
        <li>price:{props.product.price}</li>
        <li>category:{props.product.category}</li>
        <button style={{
            backgroundColor: inCart ? 'orange' : 'white'
        }}
            onClick={handleChangeInCart}>
            {inCart? 'Удалить из корзины' : 'Добавить в корзину'}

        </button>
    </ul>
}