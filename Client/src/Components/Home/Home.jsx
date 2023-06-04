import './Home.css';
import React, {useEffect} from 'react';

//component import 
import Navbar from './Navbar/Navber';
import Banner from './Banner/Banner';
import Filter from "./Filter/Filter"
import BookCard from '../BookCard/BookCard'


//redux imports
// import { getAllProducts } from '../../redux/actions/productActions';
// import { useDispatch, useSelector } from 'react-redux';

//import of constant
import { products } from '../../Constants/Data';


const Home = ()=>{
    // const dispatch = useDispatch();
    // const {products} = useSelector(state=> state.getProducts);
    
    // const sportsCollection = products.length>0? products.filter(item => item.type.includes('sports')):[];
    
    // const electonicsCollection = products.length>0? products.filter(item => item.type.includes('electronics')):[];
    
    // const homeCollection = products.length>0? products.filter(item => item.type.includes('home')):[];
    
    // const styleCollection = products.length>0? products.filter(item => item.type.includes('style')):[];

    
    // useEffect(()=>{
    //     //getting initial data
    //     dispatch(getAllProducts());
    //     // eslint-disable-next-line
    // },[])

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