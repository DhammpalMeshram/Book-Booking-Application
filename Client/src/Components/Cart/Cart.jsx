import React from 'react';
import "./Cart.css";

// component imports
import CartItem from './CartItems/CartItems';
import TotalBalance from './TotalBalance/TotalBalance';
import EmptyCart from './EmptyCart/EmptyCart';

import { useSelector } from 'react-redux';

const Cart =()=>{
    const {cartItems} = useSelector(state=> state.cart);
    console.log(cartItems);
    
    return (
        cartItems.length?

        <div className='cart_container' >
            <CartItem cartProducts ={cartItems}/>
            <TotalBalance cartProducts ={cartItems} />
        </div>
        :<EmptyCart/>
    )
}

export default Cart;