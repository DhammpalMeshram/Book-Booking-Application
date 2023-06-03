import './Home.css';
import React, {useEffect} from 'react';

//component import 
// import Navbar from './Navbar/Navber';
// import Banner from './Banner/Banner';
// import Slide from './Slide/Slide';

//redux imports
// import { getAllProducts } from '../../redux/actions/productActions';
// import { useDispatch, useSelector } from 'react-redux';

//import of requred images
import elect from './electronics.png';
import tedy from './teddy.png';
import style from './style.png';
import furniture from './furniture.png'


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
        <>
            {/* <Navbar/> */}
            <div className="container">
                {/* <Banner />
                <Slide 
                    heading = "Best of Electronics"
                    img={elect}
                    products={electonicsCollection}                
                />
                <Slide 
                    heading = "Beauty, Food, Toys & more"
                    img={tedy}
                    products={sportsCollection}                
                />
                <Slide 
                    heading = "Home & Kitchen Essentials"
                    img={furniture}
                    products={homeCollection}                
                />
                <Slide 
                    heading = "Fashion Top Deals"
                    img={style}
                    products={styleCollection}                
                />
                <Slide 
                    heading = "Sports, Healthecare & more"
                    img={tedy}
                    products={sportsCollection}                
                />
                <Slide 
                    heading = "Top Deals"
                    img={style}
                    products={electonicsCollection}                
                />
                <Slide 
                    heading = "Books, Toys & more"
                    img={tedy}
                    products={styleCollection}                
                /> */}
            </div>
        </>
    )
}

export default Home;