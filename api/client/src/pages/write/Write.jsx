import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import './write.css';
import { axiosInstance } from '../../config';

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      desc,
      username: user.username,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axiosInstance.post('/upload', data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axiosInstance.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          src={window.URL.createObjectURL(file)}
          alt=""
          className="writeImg"
        />
      )}
      <form className="writeForm" onSubmit={submitHandler}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
