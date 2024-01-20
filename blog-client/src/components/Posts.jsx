import blog1 from "/images/blog1.jpg";
import blog2 from "/images/blog2.jpg";
import blog3 from "/images/blog3.jpg";
import blog4 from "/images/blog4.jpg";
import PostItems from "./PostItems";

import { useState } from "react";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: blog1,
    category: "education",
    title: "This is the title of the very first post on the blog",
    desc: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: blog2,
    category: "science",
    title: "This is the title of the second post on the blog",
    desc: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: blog3,
    category: "wheather",
    title: "This is the title of the very third post on the blog",
    desc: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: blog4,
    category: "farming",
    title: "This is the title of the very last post on the blog",
    desc: "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero",
    authorID: 14,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <div className="posts">
      <div className="container posts__container">
        {DUMMY_POSTS.map(
          ({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItems
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Posts;
