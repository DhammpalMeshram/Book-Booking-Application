import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//component import
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DataProvider from './Context/DataProvider';
import DetailsPage from './Components/Pages/DetailsPage/DetailsPage';
import Cart from './Components/Cart/Cart';
import EmptyCart from './Components/Cart/EmptyCart/EmptyCart';
import Payment from './Components/Pages/PaymentPage/Payment';
// import NotFound from './Components/NotFound/NotFound';
import CategoryPage from './Components/Pages/CategoryPage/CategoryPage';
import Footer from "./Components/Footer/Footer";

function App() {

  return (
      <DataProvider className = "App">
        <BrowserRouter>
          <Header/>
          <main style={{marginTop:55}}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<DetailsPage/>}/> 
              <Route path= '/cart' element= {<Cart/>}/>
              <Route path ='/emptyCart' element={<EmptyCart/>}/>
              <Route path ="/payment" element={<Payment/>}/>
              <Route path = "/:serchname" element = {<CategoryPage/>}/>
              {/*<Route path='*' element={<NotFound />}/> */}
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </DataProvider>
  );
}

export default App;
