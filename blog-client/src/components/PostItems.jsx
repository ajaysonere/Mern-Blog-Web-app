import { Link } from "react-router-dom";
import Postauthors from "./Postauthors";

const PostItems = ({
  postID,
  title,
  category,
  desc,
  authorID,
  thumbnail,
}) => {
  return (
      <article className="post">
        <div className="post__thumbnail">
           <img src={thumbnail} alt="image"></img>
        </div>
        <div className="post__content">
           <Link to= {`/posts/${postID}`} >
              <h3>{title}</h3>
           </Link>
           <p>{desc}</p>
           <div className="post__footer">
              <Postauthors />
              <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
           </div>
        </div>
      </article>
  )
};

export default PostItems;