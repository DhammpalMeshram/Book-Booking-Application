import './CategoryPage.css';
import React,{useState, useEffect} from 'react';

//router imports
import { useParams} from 'react-router';
import { Link } from 'react-router-dom';

//component imports
import BookCard from '../../BookCard/BookCard';

// redux imports
import { useSelector } from 'react-redux';

// Material UI imports
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const CategoryPage = ()=>{
    const params = useParams();
    const {products} = useSelector(state=> state.getProducts);
    const [state, setState] = useState([]);

    const getProducts = ()=>{
        let searchTerm = params.serchname;
        let productfound = [];
        
        products?.forEach(item=>{
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
                    <h1><i>We are Sorry, Book you are looking for is not yet available</i></h1><br></br>
                    <Link to="/" className="emptyLink">
                        <HomeIcon/>
                        <h4>Go to Home</h4>
                    </Link>
                    <Link to="/cart" className="emptyLink">
                        <ShoppingCartIcon/>
                        <h4>Go to Cart</h4>
                    </Link>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJRhK21NTMyFsSCKKkfUiXFIA236mvKmLrw&usqp=CAU" alt="commng soon"/>
                </div>
            }
        </div>
    )
}

export default CategoryPage;