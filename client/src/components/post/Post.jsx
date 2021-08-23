import './post.css';

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="assets/postImg.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, veritatis
        odio! Animi molestias expedita impedit excepturi rem tempora vitae
        officia, porro magnam vero eius voluptates, dicta aliquid id eligendi
        eaque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
        veritatis odio! Animi molestias expedita impedit excepturi rem tempora
        vitae officia, porro magnam vero eius voluptates, dicta aliquid id
        eligendi eaque?
      </p>
    </div>
  );
};

export default Post;
