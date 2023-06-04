import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

// redux imports
// import { useSelector, useDispatch } from 'react-redux';
// import { getProductDetails } from '../../../redux/actions/productActions';



import { products } from '../../../Constants/Data';

//component imports
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
// import Loading from '../../Loading/Loading';


const DetailsPage =()=>{
    const params = useParams();
    const id = params.id;
    // const dispatch = useDispatch();
    // const {product} = useSelector(state=> state.getProductDetail);

    // useEffect(()=>{
    //     dispatch(getProductDetails(id));
    // },[dispatch, id])
    const [product, setProduct] = useState({});

    useEffect(()=>{
        let getproduct = products.find(item=> item.id===id);
        setProduct(getproduct);
    },[])


    return (
        <>{
            product && Object.keys(product).length>0 ?
                <div className='details_container' style={{display :'flex'}}> 
                    <LeftSide product={product}/>
                    <RightSide product={product}/>
                </div>
            // :<Loading/>  
            :null 
            }
        </>
    )
}

export default DetailsPage;