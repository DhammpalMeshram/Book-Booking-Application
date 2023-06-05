import axios from "axios"
import * as actionTypes from "../constants/cartConstants";
// const url = "http://localhost:8000";
// const url = "https://wishboookbackend.onrender.com";
const url = "https://flipcartbackend-o3a5.onrender.com";


// middleware to get product data of id received
export const addToCart =(id, qty)=> async(dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/product/${id}`);
        dispatch({type: actionTypes.ADD_TO_CART, payload:{...data, qty}});
    }
    catch(err){
        dispatch({type: actionTypes.ADD_TO_CART_ERROR, payload:err.message});
    }
} 

// middleware to remove item from cart.
export const removeFromCart= (id)=>async (dispatch)=>{
    try{
        dispatch({type:actionTypes.REMOVE_FROM_CART, payload:id})
    }
    catch(err){
        dispatch({type:actionTypes.REMOVE_FROM_CART_FAIL, payload:err.message})
    }
}

