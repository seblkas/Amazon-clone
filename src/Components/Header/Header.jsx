import React, {useContext} from 'react'
import classes from './heder.module.css'
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider'
import {auth} from "../../Utility/firebase"
 
const Header = () => {
  const [{ user, basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
},0)
  return (
    
      <section className={classes.fixed}>
        <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* <Link to ="/"/> */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Kenya</span>
            </div>
          </div>
        </div>
        {/* search bar */}
        <div className={ classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" Placeholder="Search Amazon" />

          <BsSearch size={25} />
        </div>
        <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt=""
              /> 
                <select name="id=">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to="auth">
                <div>
                  {
                    user?(
                      <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>sign out</span>
                      </>
                    ):(
                      <>
                      <p> Hello Sign In</p>
                      <span>Account &lists</span>

                      </>

                    )
                  }
                  
                </div>
                
                
              </Link>
              <Link to="/orders">
                <p>returns</p>
                <span>&orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader/>
      
    </section>
  );
}

export default Header