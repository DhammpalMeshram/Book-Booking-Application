import "./BookCard.css";

import { Link } from "react-router-dom";


const BookCard = ({product})=>{
    return(
        <Link
            className="bookCard"
            key={product.id} 
            to={`/product/${product.id}`} 
            style={{textDecoration:'none'}}
        >
            <img src={product.url} alt={'productImage'} />
                <h3 className='title'>{product.title.shortTitle}</h3>
            <div className="offers">
                <span className='discount'>{product.discount}</span>
                <span className='tagline'>{product.tagline}</span>
            </div>
        </Link> 
    )
}

export default BookCard;

        