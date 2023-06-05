import './Home.css';
import React, {useEffect,useState} from 'react';

//component import 
import Navbar from './Navbar/Navber';
import Banner from './Banner/Banner';
import Filter from "./Filter/Filter"
import BookCard from '../BookCard/BookCard'
import Loading from '../Loading/Loading';

//redux imports
import { getAllProducts } from '../../Redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const Home = ()=>{
    const {products} = useSelector(state=> state.getProducts);
    const dispatch = useDispatch();

    const [isFIlterActive, setIsFIlterActive] = useState(false);
    const [filterBooks, setFIlteredBooks] = useState([]);
    
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
            <Filter 
                setFIlteredBooks={setFIlteredBooks} 
                setIsFIlterActive={setIsFIlterActive}
            />
            {   //This will load data initially to UI
                products?.length>0 && !isFIlterActive?
                <div id='allBooksContainer'>
                {
                    products.map(item=><BookCard product={item} key={item.id} />)
                }

                </div>
                // it will render all matching result as per filter
                :isFIlterActive && filterBooks.length>0 ?
                <div id='allBooksContainer'>
                {
                    filterBooks.map(item=><BookCard product={item} key={item.id} />)

                }
                </div>
                :isFIlterActive && !filterBooks.length>0 ?
                <div id="allBooksContainer">
                    <h2>No Match Found</h2>
                </div>
                :<Loading/>
            }
            
        </div>
    )
}

export default Home;