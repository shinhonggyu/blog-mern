import './singlepost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="/assets/singlePostImg.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          error ut ipsa obcaecati, quas, animi ullam incidunt cumque quia dolor
          autem eaque a repellendus eligendi architecto deleniti esse velit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          error ut ipsa obcaecati, quas, animi ullam incidunt cumque quia dolor
          autem eaque a repellendus eligendi architecto deleniti esse velit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          error ut ipsa obcaecati, quas, animi ullam incidunt cumque quia dolor
          autem eaque a repellendus eligendi architecto deleniti esse velit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          error ut ipsa obcaecati, quas, animi ullam incidunt cumque quia dolor
          autem eaque a repellendus eligendi architecto deleniti esse velit!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          error ut ipsa obcaecati, quas, animi ullam incidunt cumque quia dolor
          autem eaque a repellendus eligendi architecto deleniti esse velit!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
