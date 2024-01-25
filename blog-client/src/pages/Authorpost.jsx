import { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItems from "../components/PostItems";

const Authorpost = () => {
  const [posts , setPosts] = useState(DUMMY_POSTS);

  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItems
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">Posts Not Found</h2>
      )}
    </section>
  );
}

export default Authorpost