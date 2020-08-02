import React from "react";
import CartItems from "./CartItems/CartItems";
import ShowItems from "../X_Generals/ShowItems/ShowItems";

const Cart = (props) => {

    const renderCartList = (data) => data.map(item => {
        if (item.isAccessories === false) {
            return <CartItems id={item.id}
                              img={item.img}
                              name={item.name}
                              amount={item.amount}
                              color={item.color}
                              size={item.size}
                              price={item.price}
                              count={item.count}
                              totalPrice={item.count * item.price}
            />
        } else {
            return <p>{item.name} - ACC</p>
        }
    })

    return (
        <div>
            {renderCartList(props.cartData)}
        </div>
    )
}

export default Cart;