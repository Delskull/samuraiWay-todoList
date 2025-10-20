import type {ProductType} from "../types/products-type.tsx";
import {ProductItem} from "./ProductItem.tsx";

export const ProductList = (props:ProductType) => {

    return <div>
        {props.items.map(product => (
            <ProductItem key={product.id} product = {product}/>
        ))}
</div>

}

