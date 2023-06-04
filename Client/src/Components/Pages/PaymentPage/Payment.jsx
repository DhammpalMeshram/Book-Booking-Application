import React, {useContext, useEffect, useState} from 'react';
import './Payment.css';

import {useNavigate} from "react-router-dom";
// import { MyContext } from '../../../context/DataProvider';

// componenets import s
import LogInCheck from './LogInCheck/LogInCheck';
import DeliveryAdd from './DeliveryAddress/DeliveryAdd';
import PayOptions from './PayOptions/PayOptions';
import ProductCard from './Summary/ProuctCard';

// redux imports
import {useSelector, useDispatch} from "react-redux"
import { removeFromCart } from '../../../Redux/actions/cartActions';

//material ui imports
import DoneIcon from '@mui/icons-material/Done';

const Payment  = ()=>{
    const {product} = useSelector(state=> state.getProductDetail);
    const {cartItems} = useSelector(state=> state.cart);
    const dispatch= useDispatch();
    // const myContext = useContext(MyContext);
    const navigate = useNavigate();
 
    const [add, setAdd] = useState(false);
    const [summary, setSummary] = useState(false);
    const [closeSummary, setCloseSummary] = useState(false);
    const [payment, setPayment] = useState(false);
    const [payParams, setPayParams] = useState(false);
    const [isBuyNow, setisBuyNow] = useState("");
    

    // useEffect(()=>{
        // if user has entered trough buy now
        // if(myContext.buyNow)  setisBuyNow("true");       
    // },[myContext.buyNow])
    
    // fucntion to show payment when summary confirmed;
    const onSummaryConfirmed = ()=>{
        setSummary(false);
        setCloseSummary(true);
        setPayment(true);
        setisBuyNow("");
    }

    // function to add elipsis in the title
    const addElipsis = (title)=>{
        if(title.length > 50)
            return `${title.substring(0,50)}...`
         else   
            return title 
    }

    // function to remove item from cart
    const removeItemFromCart =(e)=>{
        dispatch(removeFromCart(e.target.id));
    
        //if state.length is zero then show empty cart message and redirect user
        if(cartItems.length === 1){
            setisBuyNow("empty");
        }
    }

    // function to show empty cart when user comes from the buyNow button
    const showEmpty = ()=>{
        setisBuyNow("empty");
    }

    //function to redirect user to the home page when he removes all items
    // from cart
    const onAddClick = ()=>{
        // myContext.setCheckout(false);
        navigate("/");
    }

    return (
        <div id="pay_container">
            <LogInCheck setAdd = {setAdd}/>
            <DeliveryAdd setSummary = {setSummary} add={add} setAdd = {setAdd}/>
            
            <div id="order_sum">
                <div className="head">
                    <span className='num'>3</span>
                    <span className='title'>
                        ORDER SUMMARY
                        {!summary && closeSummary && <DoneIcon style={{color: 'white'}}/>}
                    </span>
                </div>
                {  // when user enters via byNow button click;
                    isBuyNow === "true" && summary &&
                    <ProductCard item={product} removeItemFromCart ={showEmpty} addElipsis ={addElipsis} />
                }
                {  // when user removes byNow item from cart;
                    isBuyNow === "empty" && <>
                    <h2 style={{textAlign:"center"}}>Your cart is Empty</h2>
                    <button onClick={(onAddClick)}>Add items</button>
                    </>
                }

                {  // when user enters via place order button from cart
                    isBuyNow === "" && cartItems.length >0 && summary &&
                    cartItems.map((item) =>                         
                        <ProductCard key={item.id} item={item} removeItemFromCart ={removeItemFromCart} addElipsis ={addElipsis} />
                    )
                }
                 {
                    summary && (cartItems.length >0 || isBuyNow === "true") && 
                    <button onClick={onSummaryConfirmed}>CONTINUE</button>
                }
            </div>

            <PayOptions setPayment={setPayment} payParams ={payParams} setPayParams = {setPayParams} payment= {payment} summary = {summary}/>
        </div>
    )
}

export default Payment;