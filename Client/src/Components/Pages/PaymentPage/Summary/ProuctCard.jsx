import React from 'react';
import ButtonGroup from "../../../Cart/ButtonGroup/ButtonGroup"

const ProductCard = ({item, addElipsis, removeItemFromCart})=>{
    
    return (
        <div className='items_container'>
            <div className='image'>
                <img src ={item.url} alt={'item'}/>
                <ButtonGroup/>
            </div>
            <div className='p_details'>
                <p className="title">{addElipsis(item.title.longTitle)}</p>
                <p className='seller'>Seller : RetailNet 
                </p>
                <span className='mpr'>₹{item.price.mrp}</span>
                <span className='cost'>₹{item.price.cost}</span>
                <span className='off'>{item.price.discount} off</span>
                <button onClick={removeItemFromCart} id={item.id}>REMOVE</button>
            </div>
        </div>
    )
}
export default ProductCard;