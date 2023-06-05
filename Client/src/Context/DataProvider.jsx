import React,{createContext, useState} from 'react';

export const MyContext = createContext();
 
const DataProvider =(props)=>{
    //const to check wheather the user is logged in or not globally
    const [loggedin, setLoggedIn] = useState(false); 
    //const to make the header containt vanish if the user proceed to chekcout
    const [checkout, setCheckout] = useState(false);
    // constatnt to check weather user is comming fro buy now button.
    const [buyNow, setBuyNow] = useState(false);
    // constant to maintain username 
    const [userName, setUserName] = useState("");

    
    return (
        <MyContext.Provider value={{loggedin, setLoggedIn, checkout,
            setCheckout, buyNow, setBuyNow, userName, setUserName}}>
            {props.children}    
        </MyContext.Provider>
    )
}

export default DataProvider;
