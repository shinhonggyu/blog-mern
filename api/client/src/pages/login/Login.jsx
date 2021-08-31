import { Link } from 'react-router-dom';
import './login.css';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import { LoginStart, LoginSuccess, LoginFailure } from '../../context/Actions';
import { axiosInstance } from '../../config';

const Login = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const { isFetching, dispatch, isError } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    try {
      const res = await axiosInstance.post('/auth/login', {
        username: nameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(LoginSuccess(res.data));
    } catch (error) {
      dispatch(LoginFailure());
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={nameRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button type="submit" className="loginButton" disabled={isFetching}>
          Login
        </button>
      </form>
      {isError && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong!!
        </span>
      )}
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
