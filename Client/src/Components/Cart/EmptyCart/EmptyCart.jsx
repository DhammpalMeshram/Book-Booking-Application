import './EmptyCart.css';
import React from 'react';

//routing imports
import {useNavigate} from "react-router-dom";

//image import from Data.js
import {emptyImage} from "../../../Constants/Data";


const EmptyCart =()=>{
    const navigate = useNavigate();
    
    return (
        <div className='empty'>
            <div id="e_container">
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