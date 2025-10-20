import {ProductList} from "./components/ProductList.tsx";

export const App = () => {

    const products = [
        { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
        { id: 2, name: "Молоко", price: 60, category: "Молочные" },
        { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
    ]

    return <div className={'container'}>
        <ProductList items = {products} />
    </div>
}


