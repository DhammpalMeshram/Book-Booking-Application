import './Header.css';
import React,{useState, useContext, useRef, useEffect} from 'react';

// material ui imports
import {AppBar, Toolbar, styled, List, ListItem, Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//global state imports
import { useSelector} from 'react-redux';
import { MyContext } from '../../context/DataProvider';

//components imports
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

//roting imports 
import {Link, useNavigate} from 'react-router-dom';

//heading styles
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
`

const Header =()=>{
    const {products} = useSelector(state=> state.getProducts);
    const {cartItems} = useSelector(state=> state.cart)
    const myContext = useContext(MyContext);
    const InputRef = useRef(null);
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [productId, setProductId] = useState('');
    const [open, setOpen] = useState(false);

    const logoUrl = "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const plusIconUrl ="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    
    useEffect(()=>{
        let isUserId = sessionStorage.getItem("flipcartUser");
        if(isUserId && isUserId.length >4){
            myContext.setLoggedIn(true);
            myContext.setUserName(isUserId);
        }
        // eslint-disable-next-line
    },[])

    // function to open the login window
    const onLoginCLick =()=>{ setOpen(true);}

    // function to display list when text is typed in input
    const onSerchClick =()=>{
        if(InputRef.current.value ==='' && productId === "") return;
        navigate(`/product/${productId}`)
    }

    //on input change
    const onInputChanged =()=>{ setText(InputRef.current.value); }

    //function to open the deails page when item in list is clicked
    const openDetail=(e,id)=>{
        InputRef.current.value = e.target.innerText;
        setProductId(id)
        navigate(`/product/${id}`);
        setText('');
    }

    //function to clear input filed when home is rendered
    const clearInput = ()=>{
        myContext.setCheckout(false);

        if(InputRef.current) InputRef.current.value = "";
        setProductId('');
    }

    
    return (
        <StyledHeader style={{boxShadow: 'none'}}>
        <Toolbar  style={{minHeight:55,}}>
            
            <div className='header_1'>
                <Link to='/' style={{textDecoration:'none'}}>
                    <img src ={logoUrl} alt={"filpcartLogo"} onClick={clearInput}/>
                </Link>
                <p>Expore
                    <span>Plus</span>
                    <img width={'12px'} src={plusIconUrl} alt="icon"/>
                </p>
            </div>
           
            {   !myContext.checkout && 
                <div className='header_2'>
                    <input id={'inputField'} type={"text"} placeholder={"Search for products, brands, and more"} ref={InputRef}  onChange={onInputChanged}/>
                    <SearchIcon onClick={onSerchClick}/>
                </div>
            }
            {   text &&  
                <List className={'listStyles'} style={{position:'absolute',top:'45px',left:"265px", color:"black", backgroundColor :"white", maxHeight:"300px", width:"478px", overflow: 'auto', fontSize:"14px", zIndex:"100"}}>
                    {
                        products.filter(product=>product.title.longTitle.toLowerCase().includes(InputRef.current.value.toLowerCase()))
                        .map(product=>(<ListItem key={product.id} onClick={(e)=>openDetail(e,product.id)} style={{cursor:'pointer'}}>{product.title.longTitle}</ListItem>))
                    }
                </List>
            }
            {   !myContext.checkout &&
                <div className={'header_3'}>
                    { myContext.loggedin ? <Profile/>:<button onClick={onLoginCLick}>Login</button> }
                </div>
            }
            {   !myContext.checkout &&
                <div className='header_4'>
                    <p>Become a Seller</p>
                </div>
            }
            {   !myContext.checkout &&
                <div className='header_5'>
                    <span>More</span>
                    <ExpandMoreIcon/>
                </div>
            }
            {   !myContext.checkout &&
                <div className='header_6' onClick={()=>navigate('/cart')}>
                    <ShoppingCartIcon/>
                    <Badge badgeContent={cartItems.length} color='secondary'>
                        <span>Cart</span>
                    </Badge>
                </div>
            }

        </Toolbar>

        {<Login open={open} setOpen={setOpen}/>}
      </StyledHeader>
    )
}

export default Header;