import axois from "axios";
import * as actionTypes from "../constants/productConstants";

const url = "http://localhost:8000";


// middleware to get all product initially
export const getAllProducts =()=> async(dispatch)=>{
    try{
        const {data} = await axois.get(`${url}/product`);
        
        dispatch({
            type:actionTypes.GET_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch(err){
        dispatch({
            type:actionTypes.GET_PRODUCTS_FAIL,
            payload:err.message
        })
    }
}

// middleware to get product with id
export const getProductDetails =(id)=> async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQ});

        const {data} = await axois.get(`${url}/product/${id}`);
        
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    }
    catch(err){
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAIL_FAIL,
            payload:err.message
        })
    }
}