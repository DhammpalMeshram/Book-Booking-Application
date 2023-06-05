import './Navbar.css';
import React from 'react';

// router related imports
import { useNavigate } from 'react-router';

// const imports
import { navData } from '../../../Constants/Data';



const Navbar = ()=>{
    const navigate = useNavigate();
    
    // function to naviagate user to category page;
    const onCategoryClick = (e)=>{
        e.stopPropagation();
        let serchname = '';
        //to redirect user from if he cliks on div or image
        if(e.target.name){ serchname = e.target.name; }
        // redirect user if he click on the text
        if(e.target.id){ serchname = e.target.id; }
        navigate(`/${serchname}`);
    }

    return (      
        <div className='nav_bar'>
        {   navData.map(data=>{
                return(
                    <div key={data.text} 
                        className={'nav_item'} 
                        name={data.name} 
                        onClick={onCategoryClick}
                    >
                        <img src={data.url} alt="navImage" 
                            width={75} height={100} name={data.name}/>
                        <p id={data.name}>{data.text}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Navbar;