import * as actionTypes from "../constants/productConstants";


// reducer for state which store all data initially
export const getAllProductsReducer =(state = {products:[]}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_SUCCESS :
            return { products:action.payload }

        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload };

        default : return state;
    }
}

// reducer for state which maintains unique product of id
export const getProductDetailReducer =(state ={product:{}}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAIL_REQ :
            return { loading: true }

        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { product:action.payload, loading:false }

        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return { error:action.payload, loading:false }

        case actionTypes.GET_PRODUCT_DETAIL_RESET:
            return { product:{} }

        default : return state;
    }
}