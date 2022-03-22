import React,{useState, useEffect} from 'react'
import Item from './Item';
import './Card.css'
const Card = ({handleData}) => {
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);
  const handleCartAdd = (getData) => {
      const newProduct = [...data, getData];
      setData(newProduct);
  }
  handleData(data);
  useEffect(() =>{
    fetch('products.json')
    .then( res => res.json())
    .then( data => setProduct(data))
    .catch( err => console.log(err.message))
  } ,[]);
  return(
    <div className='product-grid'> 
      {product.map(eachProduct => <Item key={eachProduct.id} handleClick={handleCartAdd} product={eachProduct}/>)}
    </div>
  )
}


export default Card;