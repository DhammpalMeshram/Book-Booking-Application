import "./Filter.css";
import React,{useState} from "react";

// import from Data.js
import { authorsArray, sellerArray } from '../../../Constants/Data';

// redux imports
import { useSelector } from "react-redux";


const Filter = ({setFIlteredBooks,setIsFIlterActive})=>{
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const {products} = useSelector(state=> state.getProducts);
    const [selected, setSelected] = useState("");


    // function to filter books by author, name or seller
    const filterBySelection = (e)=>{
        setSelected(e.target.value);
         // eslint-disable-next-line
        let findItems = products.filter((item) =>{ 
            if(item.type.includes(e.target.value)) return true;
            
        })
        setFIlteredBooks(findItems);
        setIsFIlterActive(true);
    }

    //function to clear filter
    const resetHome = ()=>{
        setIsFIlterActive(false);
        setFIlteredBooks([]);
        setSelected("");
    }

    return(
        <div  id="filterContainer">
            <span>Filter Books By : </span>
            
            <select  value={selected} onChange = {filterBySelection}>
                <option value="">Autor</option>
                {
                    authorsArray.map(item=><option  key={item} value={item}>{item}</option>)
                }
            </select>

            <select value={selected} onChange = {filterBySelection}>
                <option value="">Store</option>
                {
                    sellerArray.map(item=><option  key={item} value={item}>{item}</option>)
                }
            </select>

            <select value={selected} onChange = {filterBySelection}>
                <option value="">Name</option>
                {
                    alpha.split("").map(item=><option  key={item} value={item}>{item}</option>)
                }
            </select>
            <button id="clearFilter" onClick={resetHome}>Clear All</button>
        </div>

    )
}

export default Filter;
