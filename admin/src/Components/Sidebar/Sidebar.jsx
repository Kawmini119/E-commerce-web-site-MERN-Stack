import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.png'
import list_product_icon from '../../assets/Product_list_icon.png'

const Sidebar = () => {
    return (
      <div className="sidebar">
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt="" />
                    <p>ADD PRODUCT</p>
                </div>  
            </Link>
            <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt="" />
                    <p>PRODUCT LIST</p>
                </div>  
            </Link>
      </div>
    )
  }
  
  export default Sidebar