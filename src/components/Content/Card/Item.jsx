import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Card.css'
const Item = ({product, handleClick}) => {
  const { id, img, name, price, ratings } = product;
  return(
    <div className='item'>
      <img className='item-image' src={img} />
      <div className="info">
        <h4>{name}</h4>
        <p> Price: <strong>${price} </strong> </p>
        <p> Ratings: <strong>{ratings} </strong></p>
      </div>
      <button onClick={() => handleClick(price)}className='cart-btn'><span>Add to Cart</span> <span><ShoppingCartIcon/></span></button>
    </div>
  )
}


export default Item;