import { useState } from "react";
import products from "../data/products";
import Cart from "../Components/Cart";
import ShoppingList from "../Components/ShoppingList";

export default function Home(){
    const [cart, updateCart] = useState([])
    
    return(
        <>
            <div className=" text-2xl">
                <div className="grid grid-cols-5 ">
                    <Cart cart={cart} updateCart={updateCart} />
                    <div className="col-span-4 p-4">
                        <ShoppingList products={products}  cart={cart} updateCart={updateCart} />
                    </div>
                </div>
                
            </div>
            
        </>
    );
}