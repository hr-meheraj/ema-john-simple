import React from 'react';
import './Content.css';
import Card from './Card/Card';
import Cart from './Cart/Cart';
const Content = () => {
 const [data,setData] = React.useState([]);
  const addDataByClick = (getData) => {
    setData(getData)
  }
  
  return (
    <div className="content-grid">
      <Card handleData={addDataByClick} />
      <Cart data={data}/>
    </div>
  );
};

export default Content;
