import React from 'react';
import './EmptyCart.css';
import {useNavigate} from "react-router-dom";


const EmptyCart =()=>{
    const navigate = useNavigate();
    const emptyImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZph5-UjBkOIzz6YyK6iTt-_B3lEqdmHQZ7g&usqp=CAU';
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
                <button onClick={()=>navigate("/")}>ADD BOOKS</button>
            </div>
            </div>
        </div>
    )
}

export default EmptyCart;