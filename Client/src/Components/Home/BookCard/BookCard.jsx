import "./BookCard.css";

import { Link } from "react-router-dom";


const BookCard = ({product})=>{
    return(
        <Link
            className="movieCard"
            key={product.id} 
            // to={`product/${product.id}`} 
            style={{textDecoration:'none'}}
        >
            <div  className={'product_card'}>
            <img src={product.url} alt={'productImage'} />
            <p className='title'>{product.title.shortTitle}</p>
            <p className='discount'>{product.discount}</p>
            <p className='tagline'>{product.tagline}</p>
            </div>
        </Link> 
    )
}

export default BookCard;

        