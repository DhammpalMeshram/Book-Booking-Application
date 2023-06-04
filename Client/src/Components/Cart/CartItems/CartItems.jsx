// import React, { useContext } from 'react';
import './CartItem.css';

// import { MyContext } from '../../../context/DataProvider';
import {useNavigate} from 'react-router-dom';

//component imports
import ButtonsGroup from '../ButtonGroup/ButtonGroup';

// redux imports 
import { useDispatch } from 'react-redux';
import { removeFromCart, removeAllFromCart } from '../../../Redux/actions/cartActions';

const CartItem =({cartProducts})=>{
    // const {setCheckout} = useContext(MyContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    // function to add elipsis in the title
     const addElipsis = (title)=>{
        if(title.length > 50) return `${title.substring(0,50)}...`
         else return title 
    }

    // function to remove item from cart
    const removeItemFromCart =(id)=>{    
        dispatch(removeFromCart(id));
    }

    // function to navigate to payment
    const onOrderPlaced = ()=>{
        // setCheckout(true);
        // navigate("/payment");
    }


    const clearAllCart = ()=>{
        dispatch(removeFromCart("all"));
        navigate("/emptyCart");
    }


    return (
        cartProducts.length>0?
        <div className='cart_left'>
            <div className='header1'>
                <button autoFocus>Flipcart ({cartProducts.length})</button>
                <button>Grocery</button>
            </div>
            <div className='header2'>
                <p>From Saved Addresses</p>
                <button>Enter Delivery Pincode</button>
            </div>
            
            {
                cartProducts.map(item=>{
                    return(
                        <div className='items_container' key={item.id}>
                            <div className='image'>
                                <img src ={item.url} alt={'item'}/>
                                <ButtonsGroup/>
                            </div>
                            <div className='p_details'>
                                <p className="title">{addElipsis(item.title.longTitle)}</p>
                                <p className='seller'>Seller : {item.seller} 
                                    
                                </p>
                                <span className='mpr'>₹{item.price.mrp}</span>
                                <span className='cost'>₹{item.price.cost}</span>
                                <span className='off'>{item.price.discount} off</span>
                                <button onClick={()=>removeItemFromCart(item.id)} id={item.id}>REMOVE</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='place_container'>
                <button 
                    onClick={clearAllCart}
                    style={{backgroundColor:"red", color:"white"}}
                >
                    CLEAR CART
                </button>
                <button onClick={onOrderPlaced}>PLACE ORDER</button>
            </div>
        </div>
        :navigate('/emptyCart')
    )
}

export default CartItem;
