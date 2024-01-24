/* eslint-disable react/prop-types */
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

  const shortDescription = desc.length > 145 ? desc.substr(0,145) + "..." : desc; 
  const shortTitle =
    title.length > 30 ? title.substr(0, 30) + "..." : title; 

  return (
      <article className="post">
        <div className="post__thumbnail">
           <img src={thumbnail} alt="image"></img>
        </div>
        <div className="post__content">
           <Link to= {`/posts/${postID}`} >
              <h3>{shortTitle}</h3>
           </Link>
           <p>{shortDescription}</p>
           <div className="post__footer">
              <Postauthors />
              <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
           </div>
        </div>
      </article>
  )
};

export default PostItems;