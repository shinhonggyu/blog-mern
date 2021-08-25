import { useLocation } from 'react-router';
import './singlepost.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
  // const params = useParams();
  // console.log(params.postId);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [singlePost, setSinglePost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setSinglePost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchSinglePost();
  }, [path]);

  const deleteHandler = async () => {
    try {
      await axios.delete('/posts/' + path, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  const updateHandler = async () => {
    try {
      await axios.put(`/posts/${singlePost._id}`, {
        title,
        desc,
        username: user.username,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.photo && (
          <img src={PF + singlePost.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {singlePost.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={deleteHandler}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{' '}
            <Link className="link" to={`/?user=${singlePost.username}`}>
              <b>{singlePost.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={updateHandler}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
