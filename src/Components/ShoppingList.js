import ProductItem from "./ProductItem";

export default function ShoppingList({products, cart, updateCart}){
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {
                products.map(product => 
                    <ProductItem 
                        cart={cart} updateCart={updateCart} 
                        product={product} 
                        key={product.id}
                        />
                        )
            }

            </div>
        </>
    )
}