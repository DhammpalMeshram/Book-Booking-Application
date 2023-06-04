import React,{useState} from 'react';
//import from material UI
import { Dialog,} from '@mui/material';
//componenet import
import LoginForm from '../Forms/LoginForm/LoginForm';
import CreateAccountForm from '../Forms/CreateAccountForm/CreateAccountForm';


const Login = (props)=>{    
    const [user, setUser] = useState(true);
    
    // function to close the login module
    const handleClose =()=>{
        setUser(true);
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose} PaperProps = {{sx:{maxWidth: 'unset'} }}>
            
            {user?<LoginForm setUser={setUser}  setOpen={props.setOpen}/>
            :<CreateAccountForm setUser={setUser}/>
            }
            
        </Dialog>
    )
}

export default Login;