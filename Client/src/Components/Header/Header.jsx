import './Header.css';
import React,{useState, useContext, useRef, useEffect} from 'react';

// material ui imports
import {AppBar, Toolbar, styled, List, ListItem, Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

//Context api imports
import { MyContext } from '../../Context/DataProvider';

//redux imports
import { useSelector} from 'react-redux';

//components imports
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

//roting imports 
import {Link, useNavigate} from 'react-router-dom';

//heading styles
const StyledHeader = styled(AppBar)`
  background: #19c33f;
  height:55px;
`

//List style Object
const ListStyleObj = { position:'absolute',top:'45px',left:"268px", 
    color:"black", backgroundColor :"white", maxHeight:"300px", 
    width:"478px", overflow: 'auto', fontSize:"14px", zIndex:"100" };


const Header =()=>{
    const {products} = useSelector(state=> state.getProducts);
    const {cartItems} = useSelector(state=> state.cart)
    const myContext = useContext(MyContext);
    const InputRef = useRef(null);
    const navigate = useNavigate();

    const [text, setText] = useState(null);
    const [productId, setProductId] = useState('');
    const [open, setOpen] = useState(false);

    // to keep loged in user logged in if he is already logged in
    useEffect(()=>{
        let isUserId = sessionStorage.getItem("WishBookUser");
        if(isUserId && isUserId.length >4){
            myContext.setLoggedIn(true);
            myContext.setUserName(isUserId);
        }
        // eslint-disable-next-line
    },[])

    // function to open the login window
    const onLoginCLick =()=>{ setOpen(true); }

    // function to navigate user to product details page
    // if user clicks on search icon
    const onSerchClick =()=>{
        if(InputRef.current.value ==='' && productId === "") return;
        navigate(`/product/${productId}`)
    }

    //function to update input value
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
        setText("");
        setProductId('');
    }

    
    return (
       <StyledHeader style={{boxShadow: 'none'}}>
        <Toolbar style={{minHeight:55,}}>
                <Link 
                    to='/' 
                    className='header_1' 
                    style={{textDecoration:'none'}}
                    onClick={clearInput} 
                >
                    <MenuBookIcon/>
                    WishBook.Com
                </Link>
           
            {   
            !myContext.checkout && 
                <div className='header_2'>
                    <input 
                     id={'inputField'}
                     type={"text"} 
                     placeholder={"Search for books"} 
                     ref={InputRef}  
                     onChange={onInputChanged}
                    />
                    <SearchIcon onClick={onSerchClick}/>
                </div>
            }
            {   text && 
                <List className={'listStyles'} style={ListStyleObj}>
                    {
                        products?.filter(product=>product.title.longTitle.toLowerCase().includes(InputRef.current.value.toLowerCase()))
                        .map(product=>(<ListItem key={product.id} onClick={(e)=>openDetail(e,product.id)} style={{cursor:'pointer'}}>{product.title.longTitle}</ListItem>))
                    }
                </List>
            } 
            {   
            !myContext.checkout && 
                <div className={'header_3'}>
                    { myContext.loggedin ? <Profile/>:<button onClick={onLoginCLick}>Login</button> }
                </div>
            }
            {   
            !myContext.checkout && 
                <div className='header_4'>
                    <AttachMoneyIcon/>
                    <p>Sell Your Books</p>
                </div>
            }
            {  
             !myContext.checkout && 
                <div className='header_5'>
                    <span>More</span>
                    <ExpandMoreIcon/>
                </div>
            }
            {   
            !myContext.checkout && 
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