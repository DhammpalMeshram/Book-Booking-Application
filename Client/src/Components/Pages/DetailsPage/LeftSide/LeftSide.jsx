import './LeftSide.css';
import React,{ useContext } from 'react';

//router imports
import { useNavigate } from 'react-router';

//context APi imports
import { MyContext } from '../../../../Context/DataProvider';

//redux imports
import {useDispatch} from "react-redux";
import { addToCart } from '../../../../Redux/actions/cartActions';

//material ui imports
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const LeftSide =({product})=>{
    const dispatch = useDispatch();
    const { setCheckout,setBuyNow } = useContext(MyContext)
    const navigate = useNavigate();

    const {id} = product;

    //function to add items to cart
    const addItemsToCart = ()=>{  
        //set the buyNow false globally
        setBuyNow(false);      
        dispatch(addToCart(id,1));
    }

    //function to direct uset to payment page when buy now cicks
    const onByNowClick = ()=>{
        setBuyNow(true);  //this is manadotory to open payment from cart
        setCheckout(true);
        navigate("/payment");
    }

    return (
        <div className='left_side'>
            <img src={product.detailUrl} alt={'product'}/>
            <div className='btn_container'>
                <button className="add" onClick={addItemsToCart}>
                    <ShoppingCartIcon style={{fontSize:'17px', marginRight:"5px"}}/>
                    ADD TO CART
                </button>
                <button className='buy' onClick={onByNowClick}>
                    <FlashOnIcon style={{fontSize:'17px',marginRight:'5px'}}/>
                    BUY NOW
                </button>
            </div>
        </div>
    )
}

export default LeftSide;