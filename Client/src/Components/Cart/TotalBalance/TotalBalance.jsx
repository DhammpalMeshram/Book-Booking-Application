import React from 'react'
import './TotalBalance.css';


const TotalBalance = ({cartProducts})=>{

    let totalMrp = 0;
    let totalCost = 0;

    cartProducts?.forEach(item=> {
        totalMrp += Number(item.price.mrp);
        totalCost += Number(item.price.cost);
    })
    
    let dis = totalMrp-totalCost;
 
    return (
        <div className='cart_right'> 
            <div id={'p_text'}>PRICE DETAILS</div>
            <div id="container">
                <div>
                    <p>Price ({cartProducts.length} items)</p>
                    <span>₹ {totalMrp}</span>
                </div>
                <div>
                    <p>Discount</p>
                    <span style={{color:'green'}}>-₹{dis}</span>
                </div>
                <div>
                    <p>Delivery Charges</p>
                    <span style={{color:'green'}}>Free</span>
                </div>
            </div>
            <div id='total'>
                <h3>Total Amout</h3>
                <h3>₹{totalCost}</h3>
            </div>
            <div id='discount'>You will save ₹{dis} on this order</div>
        </div>
    )
}

export default TotalBalance;