import './RightSide.css';
import React from 'react';

//material ui imports
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarIcon from '@mui/icons-material/Star';
import { Table, TableBody, TableCell, TableRow,styled } from '@mui/material';

const RowOfTable = styled(TableRow)`
    font-size:14px;
    vertical-align : baseline;
    & td {
        font-size:14px;
        margin-top:10px;
        border: none;
        padding-left :0px;
    }`

const RightSide = ({product})=>{
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    const tableCel1Style = {color:'#878787', fontWeight: 600};
    const tableCel2Style = {color:'#2874f0', fontWeight: 600}

    
    return (
        <div className='right_side'>
            <p className="title">{product.title.longTitle}</p>
            <p className='rating'>
                <span id ={'star'}> 4.1 <StarIcon/> </span>
                <span id="review">
                    8 Ratings & 280 Reviews
                </span>    
            </p>

            <div className='price_container'>
                <p id="sp">Special Price</p>
                <span id={'cost'}>₹{product.price.cost}</span>
                <span id='mpr'>₹{product.price.mrp}</span>
                <span id='off'>{product.price.discount} off</span>
            </div>

            <div className={'offers'}>
                <div style={{fontWeight:600, fontSize:'16px'}}> Available offfers</div>
                <div> 
                    <LocalOfferIcon/>
                    <span className={"offerType"}>Bank Offer</span>
                    10% instant discount on SBI Credit Card EMI Transactions, up to ₹1500, on orders of ₹5,000 and above 
                    <span className={'tandc'}>T&C</span>
                </div>
                <div>
                    <LocalOfferIcon/>
                    <span className={"offerType"}>Bank Offer</span> 
                    5% Cashback on Flipkart Axis Bank Card 
                    <span className={'tandc'}>T&C</span>
                </div>
                <div>
                    <LocalOfferIcon/>
                    <span className={"offerType"}>Partner Offer</span> 
                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* 
                    <span className={'tandc'}>T&C</span>
                </div>
                <div>
                    <LocalOfferIcon/>
                    <span className={"offerType"}>Special Price</span> 
                    Get extra 11% off (price inclusive of cashback/coupon) 
                    <span className={'tandc'}>T&C</span>
                </div>
            </div>
            <Table>
                <TableBody>
                    <RowOfTable>
                        <TableCell style={tableCel1Style}> Author </TableCell>
                        <TableCell style={tableCel2Style}>{product.author}</TableCell>
                    </RowOfTable>
                    <RowOfTable>
                        <TableCell style={tableCel1Style}> Delivery </TableCell>
                        <TableCell style={{fontWeight:'600'}}>
                            Delivery by {date.toDateString()} | ₹40
                        </TableCell>
                    </RowOfTable>
                    <RowOfTable>
                        <TableCell style={tableCel1Style}> Warranty </TableCell>
                        <TableCell > No Warranty </TableCell>
                    </RowOfTable>
                    <RowOfTable>
                        <TableCell style={tableCel1Style}> Seller </TableCell>
                        <TableCell>
                            <span style={tableCel2Style}>{product.seller}</span>
                            <li>7 day seller replacement policy/brand assistance for device issues*</li>
                            <li>GST invoice available</li>
                        </TableCell>
                    </RowOfTable>
                    <RowOfTable>
                        <TableCell style={tableCel1Style}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </RowOfTable>
                </TableBody>
            </Table>
        </div>
    )
}

export default RightSide;




