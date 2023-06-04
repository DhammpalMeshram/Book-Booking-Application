import React from 'react';
import './ButtonGroup.css';

import { ButtonGroup } from '@mui/material';

const ButtonsGroup =()=>{
    
    // function to add item
    const addItem = ()=>{}
    
    // function to remove item
    const removeItem = ()=>{ }

    return (
        <ButtonGroup>
            <button onClick={removeItem}>-</button>
            <button>1</button>
            <button onClick={addItem}>+</button>
        </ButtonGroup>
    )
}
export default ButtonsGroup;