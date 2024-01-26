import { useState } from "react"
import { DUMMY_POSTS } from "../data";
import { Link } from "react-router-dom";
 

const Dashboard = () => {
  const [posts , setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
        {
            posts.length > 0 ? <div className="container dashboard__container">
               {
                  posts.map(post => {
                     return (
                       <article key={post.id} className="dashboard__post">
                         <div className="dashboard__post-info">
                           <div className="dashboard__post-thumbnail">
                             <img src={post.thumbnail} />
                           </div>
                           <h5>{post.title}</h5>
                         </div>
                         <div className="dashboard__post-action">
                           <Link to={`/posts/${post.id}`} className="btn sm">
                             View
                           </Link>
                           <Link
                             to={`/posts/${post.id}/edit`}
                             className="btn primary"
                           >
                             Edit
                           </Link>
                           <Link
                             to={`/posts/${post.id}/delete`}
                             className="btn danger"
                           >
                             Delete
                           </Link>
                         </div>
                       </article>
                     );
                  })
               }
            </div> : <h2 className="center">You Hava no Posts </h2>
        }
    </section>
  )
}

export default Dashboard