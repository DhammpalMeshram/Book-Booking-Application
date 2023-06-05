import * as actionTypes from "../constants/cartConstants";

//cart reducer
export const cartReducer = (state={cartItems:[]}, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART :
            const item = action.payload
            const exist = state.cartItems.find(product=> product.id===item.id);
            //if items is already avaliable igonre it
            if(exist){
                return {...state}
            }
            // add new item to cartItems array
            else{
                return {...state, cartItems:[...state.cartItems, item]}
            }

        case actionTypes.REMOVE_FROM_CART :
            //remove all items 
            if(action.payload==="all") return ({cartItems:[]})
            
            else // remove one item by id
                return {...state, cartItems: state.cartItems.filter(product=> product.id !== action.payload)
                }
            
        default: return state;
    }
    
}