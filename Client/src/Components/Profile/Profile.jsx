import React,{useState, useContext} from'react';

// material ui import s
import {Menu, MenuItem} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// global state imports
import { MyContext } from '../../Context/DataProvider';


const Profile = ()=>{
    const myContext = useContext(MyContext);
    const [open, setOpen] = useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    // function to logout the user
    const logOut =()=>{
        sessionStorage.setItem("flipcartUser", "");
        myContext.setLoggedIn(false);
    }

    return (
        <>
            <div onClick={handleClick} style={{cursor:'pointer'}}> 
                {myContext.userName}
            </div>
            <Menu 
                style={{marginTop:'5px', padding:'0px'}}
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}  
            >
                <MenuItem onClick={(e)=>{handleClose(e); logOut()}}>
                    <PowerSettingsNewIcon color='primary' fontSize="small"/>
                    <p style={{margin:'0px', padding:'0px 0px 0px 10px', fontSize:'14px'}}>Logout</p>
                </MenuItem>
            </Menu>
        </>
    )
}
export default Profile;