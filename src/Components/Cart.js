import { useEffect, useState } from "react";

export default function Cart({cart, updateCart}){

    const total = cart.reduce(
        (acc, product) => acc + product.price, 0
    )

    useEffect(() => {
        document.title =  total + " $ comme total à payer"
    }, [total])

    return(
        <>

            <div className=" bg-green-500 mr-4 p-4">
                <div className="font-bold text-white">Panier</div>
                <div>
                    <ul>
                        {
                            cart.map(c => <li key={c.id}>{c.title} =  {c.price}</li>)
                        }
                    </ul>

                    <div>Total : {total}</div>
                </div>
                
            </div>
        </>
    );
}