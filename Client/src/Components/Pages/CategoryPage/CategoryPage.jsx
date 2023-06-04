import React,{useState, useEffect} from 'react';
import './CategoryPage.css';
import { useParams} from 'react-router';
import { Link } from 'react-router-dom';

import { products } from '../../../Constants/Data';
import BookCard from '../../BookCard/BookCard';
// import { useSelector } from 'react-redux';

const CategoryPage = ()=>{
    const params = useParams();
    // const {products} = useSelector(state=> state.getProducts);
    const [state, setState] = useState([]);

    const getProducts = ()=>{
        let searchTerm = params.serchname;
        let productfound = [];
        
        products.forEach(item=>{
                if(item.type.includes(searchTerm)){
                    productfound.push(item);
                }     
            })
        setState(productfound);   
    }

    //searching the matching product in all the products
    useEffect(()=>{
        getProducts();
        // eslint-disable-next-line
    },[]);
    
    return (
        <div id="categoryPage">
        
            {   state.length>0?
                <div id='booksContainer'>
                    {state.map(product=> <BookCard product={product}/>)}
                </div>
                :<div id="emptyPage">
                    <h1><i>We are Sorry, product you are looking for is not yet available</i></h1><br></br>
                    <button><Link to="/" ><h3>Go to Home</h3></Link></button>
                {/* <button><Link to="/cart" ><h3>Go to Cart</h3></Link></button> */}
                </div>
            }
        </div>
    )
}

export default CategoryPage;