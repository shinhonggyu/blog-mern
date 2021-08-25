import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';
import { Context } from '../../context/Context';
import axios from 'axios';
import {
  UpdateStart,
  UpdateSuccess,
  UpdateFailure,
} from '../../context/Actions';

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const PF = 'http://localhost:5000/images/';

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(UpdateStart());
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post('/upload', data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch(UpdateSuccess(res.data));
    } catch (error) {
      dispatch(UpdateFailure());
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={submitHandler}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic
                  ? PF + user.profilePic
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHmoZMKGtMCmxQjSStsw7Y19l_IauV_3-6g&usqp=CAU'
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="settingsSubmit">
            Update
          </button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
