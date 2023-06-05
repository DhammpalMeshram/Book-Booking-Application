import React, {useEffect} from 'react';

//router imports
import {useParams} from 'react-router-dom'

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../../Redux/actions/productActions';

//component imports
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Loading from '../../Loading/Loading';


const DetailsPage =()=>{
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    const {product} = useSelector(state=> state.getProductDetail);

    //maek api call for getting product with id.
    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[dispatch, id])

    
    return (
        <>{
            product && Object.keys(product).length>0 ?
                <div className='details_container' style={{display :'flex'}}> 
                    <LeftSide product={product}/>
                    <RightSide product={product}/>
                </div>
                :<Loading/>  
            }
        </>
    )
}

export default DetailsPage;