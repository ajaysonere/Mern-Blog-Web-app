import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src="/images/logo.png"></img>
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile/asdfsd">Ajay Sonere</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li> 
            <Link to="/authors" className="authors">Authors</Link>
          </li>
          <li>
            <Link className="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
            <FaBarsStaggered />
        </button>
      </div>
    </nav>
  );
};

export default Header;
