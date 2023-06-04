import React from 'react';
import ButtonGroup from "../../../Cart/ButtonGroup/ButtonGroup"

const ProductCard = ({item, addElipsis, removeItemFromCart})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
 
    return (
        <div className='items_container'>
            <div className='image'>
                <img src ={item.url} alt={'item'}/>
                <ButtonGroup/>
            </div>
            <div className='p_details'>
                <p className="title">{addElipsis(item.title.longTitle)}</p>
                <p className='seller'>Seller : RetailNet 
                    <img src={fassured} alt={'assure'}/>
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