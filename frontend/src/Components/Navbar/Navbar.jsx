import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext.jsx';
import nav_dropdown from '../Assets/nav_dropdown_icon.png'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
}
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOEbay</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown}alt="" />
      

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop"); }}>
          <Link to='/'>HOME</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens"); }}>
          <Link to='/mens'>MEN</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens"); }}>
          <Link to='/women'>WOMEN</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids"); }}>
          <Link to='/kids'>KIDS</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token');window.location.replace('./')}}>Logout</button>:
        <Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
