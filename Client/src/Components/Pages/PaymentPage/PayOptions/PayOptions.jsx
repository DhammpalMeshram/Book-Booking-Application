import React,{useState, useContext} from 'react';
import './PayOptions.css';

// import { MyContext } from '../../../../context/DataProvider';
import { useNavigate} from 'react-router';

//material ui options
import { TextField } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const PayOptions = ({setPayment, payParams ,setPayParams, summary, payment})=> {
    const navigate = useNavigate();
    // const myContext = useContext(MyContext);

    const paytm_img_url = "https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png?q=100"

    const upi_wallet = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif";

    const wallet_img_url = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif";


    const [upiParams, setUPIParmas] = useState(false);
    const [sec, setSec] = useState({btn1: false, btn2: false});
    const [wallet, setWallet] = useState(false);
    const [card ,setCard] = useState(false);
    const [cash, setCash] = useState(false);
    const [netBank, setNetBank] = useState(false);
    

    const onPaymetBtnClick = ()=>{
        alert("Your Order is Placed");
        // myContext.setCheckout(false);
        navigate("/");
    }


    const onPayClick = (e)=>{
        setPayParams(true);
        setUPIParmas(false);
        setWallet(false);
        setCard(false);
        setCash(false);
        setNetBank(false);
        setSec({btn1:false, btn2:false});

    }
    const onUPIClick = (e)=>{
        setUPIParmas(true);
        setPayParams(false);
        setWallet(false);
        setCard(false);
        setCash(false);
        setNetBank(false);
    }
    const onSecClicked = (e)=>{
        if(e.target.id === "upi1"){
            setSec({btn1:true, btn2:false});
        }
        else{
            setSec({btn1:false, btn2:true});
        }
    }
    const onWalletClick =()=>{
        setWallet(true);

        setPayParams(false);
        setUPIParmas(false);
        setCard(false);
        setCash(false);
        setNetBank(false);
        setSec({btn1:false, btn2:false});
    }
    const onCardClick =()=>{
        setCard(true);
        setPayParams(false);
        setUPIParmas(false);
        setWallet(false);
        setCash(false);
        setNetBank(false);
        setSec({btn1:false, btn2:false});
    }

    const onNetBankClick = ()=>{
        setNetBank(true);
        setPayParams(false);
        setUPIParmas(false);
        setWallet(false);
        setCard(false);
        setCash(false);
        setSec({btn1:false, btn2:false});
    }
    const onCashClick =()=>{
        setCash(true); 
        setPayParams(false);
        setUPIParmas(false);
        setWallet(false);
        setCard(false);
        setNetBank(false);    
        setSec({btn1:false, btn2:false});    
    }


    return (
        <div id="pay_option">
        <div className="head">
            <span className='num'>4</span>
            <span className='title'>PAYMENT OPTIONS</span>
        </div>
        {
            !summary && payment &&
        
        <>
        <div className="pay" id="paytm">
            <input type="radio"name="payment" onClick={onPayClick} id="pay"/>
            <img src={paytm_img_url} alt="paytm" width={'24px'} height={"24px"}/>
            <p>Paytm Wallet</p>
            {payParams &&
                <button className="btn" onClick={onPaymetBtnClick}>CONTINUE</button>
            }
        </div>

        <div className="pay" id="upi">
            <input type="radio" name="payment" id="wallet" onClick={onUPIClick}/>
            <img src={upi_wallet} alt="upi" />
            <p>UPI</p>
            {
                upiParams &&
            
            <div id="upi_container">
                <p style={{fontWeight:"bold",padding:'0px', marginTop:'0px'}}>Choose an Option</p>
                <div className='sec'>
                <input type="radio" name="upi2" id="upi1" onClick={onSecClicked}/>
                <label htmlFor="upi1">PhonePay</label>
                {
                    upiParams && sec.btn1 && 

                <button className="btn" onClick={onPaymetBtnClick}>CONTINUE</button>
                }
                </div>
                <div className='sec'>
                <input type="radio" name="upi2" id="upi2" onClick={onSecClicked}/>
                <label htmlFor="upi2">Your UPI ID</label>
                
                {
                upiParams && sec.btn2 &&
                <div style={{padding:'2px 5px', border:'2px solid #ece0e0', marginLeft:'40px'}}>
                <TextField  style={{marginBottom:'5px', width:'300px'}} variant='standard' label={"Enter UPI ID"}/>
                </div>
                }
                {
                upiParams && sec.btn2 &&
                <button className="btn" onClick={onPaymetBtnClick}>CONTINUE</button>
                }
                </div>
            </div>  
            }
        </div>

        <div className="pay" id="wallet">
            <input type="radio" name="payment" onClick={onWalletClick}/>
            <img src={wallet_img_url} alt="wallet" />
            <p>Wallets</p>
            {
                wallet &&
                <div id='wallet_container'>
                    <div className='sec'>
                        <input type="radio" name="upi" checked='checked'/>
                        <label htmlFor="upi2">Paytm Wallet</label>
                        <button className="btn" onClick={onPaymetBtnClick}>CONTINUE</button>
                    </div>
                    <div className='sec'>
                        <input type="radio" name="upi" disabled/>
                        <label htmlFor="upi2" style={{color:'gray'}}>Phone Pay Wallet</label>
                        <p>Comming Soon...</p>
                    </div>
            </div>
            }    
        </div>

        <div className="pay" id="card">
            <input type="radio" name="payment" onClick={onCardClick}/>
            <p>Credit / Debit / Atm card</p>
            { card &&
                <div id="card_container">
                    <div >
                        <TextField  style={{marginBottom:'5px', width:'250px', marginLeft:'10px'}} variant='standard' label={"Enter Card Number"} />
                    </div>
                    <div id="select_div">
                        <span>Valid Upto</span>
                        <select>
                            <option>MM</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select>
                            <option>YY</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                            <option>32</option>
                            <option>33</option>
                            <option>34</option>
                            <option>35</option>
                        </select>
                        
                    </div>
                    <div id="cvv">
                        <TextField  style={{marginBottom:'5px', width:'100px', marginLeft:'10px'}} variant='standard' label={"CVV"} />
                    </div>
                    <p></p>
                    <button onClick={onPaymetBtnClick}>PAY</button>
                </div>
            }
        </div>

        <div className="pay" id="netBank">
        <input type="radio" name="payment" onClick={onNetBankClick}/>
            <p>Net Banking</p>
            {
                netBank &&
                <div id="netBanking">
                    <p>Popular Banks</p>
                    <div id="bank_container">
                        
                        <p>
                            <span>
                        <input type='radio' name="bank" id="b1"/>
                        <img src="https://seeklogo.com/images/H/hdfc-bank-logo-07B3BA2F47-seeklogo.com.png" alt="hdfc"/>
                        <label htmlFor="b1">HDFC Bank</label>
                        </span>

                        <span>
                        <input type='radio' name="bank" id="b2"/>
                        <img src="https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607" alt="icici" />
                        <label htmlFor="b2">ICICI Bank</label>
                        </span>                                
                        </p>

                        <p>
                            <span>
                        <input type='radio' name="bank" id="b3"/>
                        <img src="https://seeklogo.com/images/S/sbi-logo-744E8B0C10-seeklogo.com.png" alt="sbi" />
                        <label htmlFor="b3">State Bank of India</label>
                        </span>

                        <span>
                        <input type='radio' name="bank" id="b4"/>
                        <img src="https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1672905040" alt="axis" />
                        <label htmlFor="b4">Axis Bank</label>
                        </span>
                        </p>

                        <p>
                            <span>
                        <input type='radio' name="bank" id="b5"/>
                        <img src="https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1593960269" alt="kmb"/>
                        <label htmlFor="kmb">Kotak Mahindra Bank</label>
                        </span>
                        </p>
                    </div>
                    <p>Other Banks</p>
                    <select>
                        <option>Bank of India</option>
                        <option>City Bank</option>
                        <option>Central Bank</option>
                        <option>City Union Bank</option>
                        <option>Canara Bank</option>
                    </select>
                    <button onClick={onPaymetBtnClick}>PAY</button>
                </div>
            }
        </div>

        <div className="pay" id="cash">
        <input type="radio" name="payment" onClick={onCashClick}/>
            <p>Cash on Delivery</p>
            {  
                cash && <button onClick={onPaymetBtnClick}>CONTINUE</button>
            }
        </div>

        <div className="pay" id="emi">
            <input type="radio" name="payment" disabled/>
            <p>EMI (Easy Installment) </p>
            <span>Not Applicable <HelpOutlineIcon/></span>
        </div>
        </>
        }
    </div>
    )
}

export default PayOptions;