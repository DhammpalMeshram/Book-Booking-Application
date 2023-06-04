import React, {useState, useContext} from 'react';
import './DeliveryAdd.css';

// material ui imports
import { TextField } from '@mui/material';
import { MyContext } from '../../../../Context/DataProvider';
import DoneIcon from '@mui/icons-material/Done';


const DeliveryAdd = ({setSummary, add, setAdd})=>{
    const myContext = useContext(MyContext);
    const [address, setAddress] = useState({area:"", city:"",state:"", pincode:""});
    const [addError,setAddError] = useState({});

    //dynamic uddation of input values
    const onAddChanged = (e)=>{
        setAddress({...address, [e.target.name] : e.target.value})
    }

    //function to validate address enterd by user
    const onAddClick = ()=>{
        setAddError({});
        if(address.area ===''){
            setAddError({area: "*area is missing"});
            return;
        }
        if(address.city ===""){
            setAddError({city: "*city is missing"});
            return;
        }
        if(address.state ===""){
            setAddError({state: "*state is missing"});
            return;
        }
        if(address.pincode ===""){
            setAddError({pincode: "*pincode is missing"});
            return;
        }
        setAdd(false);
        setSummary(true);
    }

    return (
        <div id="deli_add">
            <div className="head">
                <span className='num'>2</span>
                <span className='title'>
                    DELIVERY ADDRESS
                    {   myContext.loggedin && !add && 
                        <DoneIcon style={{color: 'white'}}/>    
                    }   
                </span>
            </div>
            {    add &&
                <div id="add_form">
                    <TextField  
                        style={{marginBottom:'5px', width:'300px', marginLeft:'10px'}} 
                        variant='standard' 
                        label={"Enter Streat/Area"} 
                        name="area" 
                        onChange={onAddChanged}
                    />
                    {   addError.area? 
                        <p className='add_error'>{addError.area}</p>
                        : null
                    }
                
                    <TextField  
                        style={{marginBottom:'5px', width:'300px',marginLeft:'10px'}} 
                        variant='standard' 
                        label={"Enter City"} 
                        name="city" 
                        onChange={onAddChanged}
                    />
                    {   addError.city? 
                        <p className='add_error'>{addError.city}</p>
                        : null
                    }
                    
                    <TextField  
                        style={{marginBottom:'5px', width:'300px',marginLeft:'10px'}} 
                        variant='standard' 
                        label={"Enter State"}
                        name="state" 
                        onChange={onAddChanged}
                    />
                    {   addError.state? 
                        <p className='add_error'>{addError.state}</p>
                        : null
                    }

                    <TextField  
                        style={{marginBottom:'5px', width:'300px',marginLeft:'10px'}} 
                        variant='standard' 
                        label={"Enter Pincode"}
                        name="pincode" 
                        onChange={onAddChanged}
                    />
                    {   addError.pincode? 
                        <p className='add_error'>{addError.pincode}</p>
                        : null
                    }

                    <button className='add_btn' onClick={onAddClick}>
                        Deliver Here
                    </button>
                </div>
            }
        </div>
    )
}

export default DeliveryAdd;