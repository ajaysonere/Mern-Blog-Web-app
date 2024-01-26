import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const Header = () => {
  
  const [showNavbar , setShowNavbar] = useState(true);
  
  const handleNavbar = () => {
      setShowNavbar(!showNavbar);
  }
  
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={handleNavbar}>
          <img src="/images/logo.png"></img>
        </Link>
        {showNavbar && (
          <ul className="nav__menu">
            <li>
              <Link to="/profile/asdfsd" onClick={handleNavbar}>
                Ajay Sonere
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={handleNavbar}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" className="authors" onClick={handleNavbar}>
                Authors
              </Link>
            </li>
            <li>
              <Link className="/logout" onClick={handleNavbar}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button className="nav__toggle-btn" onClick={() => handleNavbar()}>
          {showNavbar ? <AiOutlineClose /> : <FaBarsStaggered />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
