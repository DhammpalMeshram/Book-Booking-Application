import './Home.css';
import React, {useEffect} from 'react';

//component import 
import Navbar from './Navbar/Navber';
import Banner from './Banner/Banner';
import Filter from "./Filter/Filter"
import BookCard from '../BookCard/BookCard'


//redux imports
import { getAllProducts } from '../../Redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

//import of constant
// import { products } from '../../Constants/Data';


const Home = ()=>{
    const {products} = useSelector(state=> state.getProducts);
    const dispatch = useDispatch();
    
    //dispatch action at component mount for getting data from database
    useEffect(()=>{
        //getting initial data
        dispatch(getAllProducts());
        // eslint-disable-next-line
    },[])

    return (
        <div className='homeContainer'>
            <Navbar/>
            <Banner /> 
            <Filter/>
            <div id='allBooksContainer'>
                {
                    products.map(item=><BookCard product={item} key={item.id} />)
                }

            </div>
        </div>
    )
}

export default Home;