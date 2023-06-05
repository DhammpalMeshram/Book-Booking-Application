import React, {useState, useContext,useEffect} from 'react';
import './LogInCheck.css';

// api function imports
import { authunticateSignIn } from '../../../../service/api';

//context Api imports
import { MyContext } from '../../../../Context/DataProvider';

//matrial ui imports
import { TextField } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/Done';


const LogInCheck = ({setAdd})=>{
    const myContext = useContext(MyContext);
    const [error,setError] = useState({username:'', password:''});
    const [userData,setUserData] = useState({username:'', password:''});

    // if user is already log in then open address terminal
    useEffect(()=>{
        if(myContext.loggedin)
            setAdd(true);
          // eslint-disable-next-line  
    },[])

    // dynamic updation of user information
    const onInputChange = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value});  
    }

    // function to vlidate user information
    const onLoginClick = async ()=>{
        setError({});

        if(userData.username ===''){
            setError({username: "*Email/Mobile number is missing"});
            return;
        }
        if(userData.password ===""){
            setError({password: "*Password is missing"});
            return;
        }

        //sending data to backend for validation
        const data  = await authunticateSignIn(userData);
        if(data.username){   
            sessionStorage.setItem("flipcartUser",`${data.username}`);
            myContext.setLoggedIn(true);
            myContext.setUserName(data.username)
            setAdd("address");
        }
    }


    return (
        <div id="login_check">
            <div className="head">
                <span className='num'>1</span>
                <span className='title'>
                    LOGIN
                    {myContext.loggedin && <DoneIcon style={{color: 'white'}}/>}
                        
                </span>
            </div>
            {   
            !myContext.loggedin &&  
                <div id="log">
                    <div id="log_form">
                        <TextField  
                            style={{marginBottom:'5px', width:'300px'}} 
                            variant='standard' 
                            label={"Enter Email/Mobile number"} 
                            name="username" 
                            onChange={onInputChange}/><br></br>

                        {   error.username? 
                            <p className='username_error'>{error.username}</p>
                            :null
                        }

                        <TextField 
                            style={{marginBottom:'5px', width:'300px'}} 
                            variant='standard' 
                            label={"Enter Password"} 
                            name="password" 
                            onChange={onInputChange}
                        />
                        {   error.password ? 
                            <p className='username_error'>{error.password}</p> 
                            : null
                        }
                        <p className='text'>By continuing, you agree to WishBook's <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                        <button className='login_btn' onClick={onLoginClick}>
                            Login
                        </button>
                    </div>
                    <div id="log_terms">
                        <p style={{color:'gray'}}>Advantages of secure log in</p>
                        <p>
                            <LocalShippingIcon/>
                            Easily track orders, Hassle free return
                        </p>
                        <p>
                            <NotificationsIcon/>
                            Get relevant Alerts and Reccomondation
                        </p>
                        <p>
                            <StarIcon/>
                            Wishlist, Reviews Ratings and More
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default LogInCheck;