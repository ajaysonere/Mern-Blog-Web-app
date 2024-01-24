import { Link } from "react-router-dom";
import avatar1 from "/images/avatar1.jpg";

const Postauthors = () => {
  return (
    <div>
      <Link to={`/posts/users/sdsd`} className="post__author">
        <div className="post__author-avatar">
          <img src={avatar1} />
        </div>
        <div className="post__author-details">
          <h5>By: Ajay Sonere </h5>
          <small>Just Now </small>
        </div>
      </Link>
    </div>
  );
};

export default Postauthors;
