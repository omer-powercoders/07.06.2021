import * as React from "react";


interface ProductInfo {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
}
export function ProductsList(){
    const [products, setProducts] =
    React.useState<ProductInfo[] | null>(null);
    React.useEffect(() => {
        fetch(`http://127.0.0.1:8000/shop/products/`)
            .then((products) => products.json())
            .then(setProducts);
    }, []);

    if (products === null) {
        return <p>Loading…</p>;
    }
    return (
        <main>
            <h1 className="title">Products</h1>
            <section className="all">
                {products.map((product) => (
          <article key={product.id}>
            <h2>{product.title}</h2>
                        <h3>{product.category}</h3>
                        <p>{product.description}</p>
                        <h2>{product.price}</h2>
                        <img src={product.image}/>
          </article>
        ))}
            </section>
        </main>
    )
}