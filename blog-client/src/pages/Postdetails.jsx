import { Link } from "react-router-dom";
import Postauthors from "../components/Postauthors";
import Thumbnail from '/images/blog22.jpg';


const Postdetails = () => {
  return (
    <section className="post-details">
      <div className="container post-details__container">
        <div className="post-details__header">
          <Postauthors />
          <div className="post-details__buttons">
            <Link to={`/posts/wewe/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/wewe/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the Post Title ! </h1>
        <div className="post-details__thumbnails">
          <img src={Thumbnail} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima, quia voluptatum. Rem deserunt non, quas
          aspernatur commodi iure explicabo magni in. Modi dolore quod quibusdam
          blanditiis inventore ratione unde aliquam?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima, quia voluptatum. Rem deserunt
          non, quas aspernatur commodi iure explicabo magni in. Modi dolore quod
          quibusdam blanditiis inventore ratione unde aliquam?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Minima, quia voluptatum. Rem
          deserunt non, quas aspernatur commodi iure explicabo magni in. Modi
          dolore quod quibusdam blanditiis inventore ratione unde aliquam?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Minima, quia
          voluptatum. Rem deserunt non, quas aspernatur commodi iure explicabo
          magni in. Modi dolore quod quibusdam blanditiis inventore ratione unde
          aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima, quia voluptatum. Rem deserunt non, quas aspernatur commodi
          iure explicabo magni in. Modi dolore quod quibusdam blanditiis
          inventore ratione unde aliquam?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima, quia voluptatum. Rem deserunt non, quas
          aspernatur commodi iure explicabo magni in. Modi dolore quod quibusdam
          blanditiis inventore ratione unde aliquam?
        </p>
      </div>
    </section>
  );
}

export default Postdetails;