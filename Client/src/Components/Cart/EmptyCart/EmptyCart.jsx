import React from 'react';
import './EmptyCart.css';
import {useNavigate} from "react-router-dom";

const EmptyCart =()=>{
    const navigate = useNavigate();
    const emptyImage = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (
        <div className='empty'>
            <div id="e_container">
            <div className='e_header1'>
                <button autoFocus>Flipcart</button>
                <button>Grocery</button>
            </div>
            <div className='e_header2'>
                <img src = {emptyImage} alt='empty' width={250} />
                <p id="mis">Missing Cart Items</p>
                <p id="direction">Login to see the items you added previously</p>
                <button onClick={()=>navigate("/")}>ADD ITEMS</button>
            </div>
            </div>
        </div>
    )
}

export default EmptyCart;