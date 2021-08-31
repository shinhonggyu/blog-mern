import './post.css';
import { Link } from 'react-router-dom';

const Post = ({ title, createdAt, desc, photo, categories, _id }) => {
  const PF = 'https://lamadevblog.herokuapp.com/images/';

  return (
    <div className="post">
      {photo && <img className="postImg" src={PF + photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${_id}`}>
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
  );
};

export default Post;
