import React from 'react';
import './Header.css';
import Logo from '../../Logo.svg'
const Header = () => {
  return(
    <nav class='nav'>
      <div className="container header-nav">
      <img class='logo' src={Logo} alt=""/>
      <div className="links">
          <a class='hide' href="/order">Order</a>
          <a class='hide' href="/order-inventory">Order Review</a>
          <a class='hide' href="/mangage">Manage Inventory</a>
          <a class='show' href='/'> SHOW </a>
      </div>
      </div>
    </nav>
  )
}

export default Header;