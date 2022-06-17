import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Nav() {

  const [active, setActive] = useState(false);
  const handleHamburger = () => {
    setActive(!active)
  }

  return (
    <nav className="navbar-bg">
      <div className="navbar-container">
        <h2 className="site-title"><i>EASY BUY</i></h2>

        <ul className={active ? "links active" : "links"}>
          <li className="item"><Link to="/">HOME</Link></li>
          <li className="item"><Link to="Cart">CART</Link></li>
          <li className="item"><Link to="/">CONTACT</Link></li>
          <li className="item"><Link to="/">LOGIN</Link></li>
        </ul>

        <div className={active ? "hamburger active" : "hamburger"} onClick={handleHamburger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    
    </nav>
  )
}

export default Nav