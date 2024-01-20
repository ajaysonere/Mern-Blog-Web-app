import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className="footer__container">
        <li>
          <Link to="/posts/categories/agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/posts/categories/business">Business</Link>
        </li>
        <li>
          <Link to="/posts/categories/education">Education</Link>
        </li>
        <li>
          <Link to="/posts/categories/entertainment">Entertainment</Link>
        </li>{" "}
        <li>
          <Link to="/posts/categories/art">Art</Link>
        </li>{" "}
        <li>
          <Link to="/posts/categories/invesment">Invesment</Link>
        </li>
        <li>
          <Link to="/posts/categories/wheather">Weather</Link>
        </li>
        <li>
          <Link to="/posts/categories/uncategorized">Uncategorized</Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All rights reversed &copy; Copyright , Ajay</small>
      </div>
    </footer>
  );
}

export default Footer;