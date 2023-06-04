import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getAllProductsReducer, getProductDetailReducer} from "./reducers/productReducer";
// import {cartReducer} from "./reducers/cartReducer";

// combining all reducers
const reducer = combineReducers({
    getProducts : getAllProductsReducer,
    getProductDetail : getProductDetailReducer,
    // cart : cartReducer
})

//attaching the middelware
const middleware = [thunk];

//creating stote
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;

