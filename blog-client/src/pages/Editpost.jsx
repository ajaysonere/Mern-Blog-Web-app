import { useState , useContext , useEffect} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../contexts/userContext";
import { useNavigate} from 'react-router-dom';

const Editpost = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  
  const token = currentUser?.token;
  
  useEffect(() => {
     if(!token){
         navigate("/login");
     }
  } , []);
  

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];

  return (
    <section className="create-post">
      <div className="container createpost__container">
        <h2>Edit Post </h2>
        <p className="form__error-message">This is an Error Message </p>
        <form className="form create-post__form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => {
              return <option key={cat}>{cat}</option>;
            })}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.value[0])}
            accept="png , jpg ,jpeg"
          />
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default Editpost;
