import './CreateAccountForm.css';
import React,{useState} from 'react';

import {TextField} from '@mui/material';
// import { signUpFormValidation } from '../../../utils/validateSignIn';
// import { authunticateSignUp } from '../../../service/api';

const CreateAccountForm =({setUser})=>{

    const Styled = {width:'100%', paddingBottom:'5px'};
    
    const [newUser, setNewUser] = useState({
        firstName:'',
        lastName:'',
        email: "",
        mobileNumber:'',
        username:'',
        password: ""
    });
    
    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email: "",
        mobileNumber:'',
        username:'',
        password: "",
      });


    const onFormSubmitHandler = async (e) =>{
        setErrors({...errors, firstName:'',lastName:'', email:'',mobileNumber:'', username:"",password:""})
    
        // frontend validation
        // const validationResult = signUpFormValidation(newUser);
        // if no error is present
        // if(validationResult != null){ setErrors(validationResult); }
    
        // if(validationResult === null){
            //send data to backend for validation
            // await authunticateSignUp(newUser);
            
            setErrors({...errors,firstName:'',lastName:'', email:'',mobileNumber:'', username:"",password:""});
            setNewUser({...newUser,firstName:'',lastName:'', email:'',mobileNumber:'', username:"",password:""});
            setUser(true);  
        // }
    }
    
    // function to toggle form 
    const onExistingAccountClick =()=>{
        setUser(true);
    }

    // function to get value from user
    const onInputChange =(e)=>{
        let inputValue = e.target.value.trim();
        setNewUser({...newUser,[e.target.name]:inputValue});
    }


    return (
        <div className='login_container'>
                
            <div className='login_left'>
                <h1>Looks like you're new here!</h1>
                <p>Sign up with your mobile number to get started</p>
            </div>

            <div className='login_right'>
                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter first name"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='firstName'
                />
                {   errors.firstName?
                    <p className='username_error'>{errors.firstName}</p>
                    :""
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter last name"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='lastName'
                />
                {   errors.lastName?
                    <p className='username_error'>{errors.lastName}</p>
                    :""
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter Email"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='email' 
                    type="email"
                />
                {   errors.email?
                    <p className='username_error'>{errors.email}</p>
                    :""
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter Mobile number"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='mobileNumber' 
                />
                {   errors.mobileNumber?
                    <p className='username_error'>{errors.mobileNumber}</p>
                    :""
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter username"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='username'
                />
                {   errors.username?
                    <p className='username_error'>{errors.username}</p>
                    :""
                }

                <TextField 
                    style={Styled} 
                    variant='standard' 
                    label={"Enter password"} 
                    onChange={(e)=>onInputChange(e)} 
                    name='password' 
                    type="password"
                />
                {   errors.password?
                    <p className='username_error'>{errors.password}</p>
                    :""
                }

                <p className='text'>
                    By continuing, you agree to WishBook's 
                    <span>Terms of Use</span> and 
                    <span>Privacy Policy</span>.
                </p>
                
                <button className='btn login_btn' onClick={onFormSubmitHandler}>
                    Continue
                </button>                      
                
                <button className="btn request_btn" onClick={onExistingAccountClick}>
                    Existing User? Log In
                </button>
            </div>
        </div>
    )
}

export default CreateAccountForm;