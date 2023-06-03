import "./Filter.css";

import { authorsArray, sellerArray } from '../../../Constants/Data';

const Filter = ()=>{
    return(
        <div  id="filterContainer">
            <span>Sort By : </span>
            <select >
                <option value="">Autor</option>
                {
                    authorsArray.map(item=><option  key={item} value={item}>{item}</option>)
                }

            </select>
                <select >
                <option value="">Store</option>
                {
                    sellerArray.map(item=><option  key={item} value={item}>{item}</option>)
                }
            </select>
        </div>

    )
}

export default Filter;
