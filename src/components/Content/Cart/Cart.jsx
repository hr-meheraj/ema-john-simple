import React,{useState} from 'react'
import './Cart.css'
const Cart = ({data}) => {
  const price = data.reduce((prev, current) => prev + current, 0);
  const tax = price / 10;
  const total = price + tax;
  return(
    <div className='cart'>

      <h2>Order Summary</h2>
      <p> Selected Item: <strong>${data.length}</strong></p>
      <p> Sub-Total: <strong>${price}</strong> </p>
      <p> Tax: <strong>${tax} </strong></p>
      <hr/>
      <h3> Total: <strong>${total}</strong> </h3>
    </div>
  )
}

export default Cart;