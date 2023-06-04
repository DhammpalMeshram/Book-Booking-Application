// import './LoginForm.css';
import React,{useState, useContext} from 'react';

import { MyContext } from '../../../Context/DataProvider';
// import { authunticateSignIn } from '../../../service/api';
import {TextField} from '@mui/material'

const LoginForm = ({setUser,setOpen})=> {
    const mycontext = useContext(MyContext);

    const [userData, setUserData] = useState({username:"", password:""});
    const [error,setError] = useState({username:'', password:''});
    
    const Styled = {width:'100%', paddingBottom:'5px'};
    
    // function to switch between log in sign up window
    const onCreateAccountClick =()=>{
        setUser(false);
    }

    //fnction to dynamically update user data
    const onInputChange = (e)=>{
        let inputValue = e.target.value.trim();
       setUserData({...userData, [e.target.name]:inputValue}); 
    }

    // function to validate user for sign in
    const onLoginClick = async ()=>{
        setError({});
        if(userData.username ===''){
            setError({username: "*email or mobile number is missing"});
            return;
        }
        if(userData.password ===""){
            setError({password: "*Password is missing"});
            return;
        }
        // send data to backend for validation
        // const data  = await authunticateSignIn(userData);

        // if(data.username){   
        //     sessionStorage.setItem("flipcartUser",`${data.username}`);
            mycontext.setLoggedIn(true);
            // mycontext.setUserName(data.username)
            setOpen(false);
        // }
        return;
    }

    return (
        <div className='login_container'>
                
            <div className='login_left'>
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className='login_right'>            
                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter Email/Mobile number"} 
                    name="username" 
                    onChange={onInputChange}
                    size='small'
                />
                {   error.username? 
                    <p className='username_error'>{error.username}</p>
                    : null
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter Password"} 
                    name="password" 
                    onChange={onInputChange} 
                    type="password"
                    size='small'
                />
                {   error.password ? 
                    <p className='username_error'>{error.password}</p>
                    :null
                }

                <p className='text'>
                    By continuing, you agree to WishBook's <span>Terms of Use</span> and <span>Privacy Policy</span>.
                </p>
                
                <button className='login_btn btn' onClick={onLoginClick}>
                    Login
                </button>
                <p class='or'>OR</p>
                <button className="request_btn btn" onClick={onCreateAccountClick}>
                    Create an account
                </button>
            </div>
        </div>
    )
}

export default LoginForm;