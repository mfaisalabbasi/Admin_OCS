import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginFunc } from "../../store/action/login";
import pic from "../../images/spinner.gif";
import { useAlert } from "react-alert";
const Login = ({ history }) => {
  const alert = useAlert();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);

  const onChangeText = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = user;
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert.show("please check your inputs");
    } else {
      dispatch(LoginFunc(user));
      setTimeout(() => history.push("/"), 3000);
    }
  };
  useEffect(() => {
    <div>{error ? alert.show(error) : null}</div>;
  }, [error]);
  return (
    <div className='login'>
      <div className='box'>
        <div className='title'>
          <h3>Welcome to Adminstration</h3>
        </div>
        <form className='form' onSubmit={loginHandler}>
          {loading ? (
            <div style={{ width: "50px", height: "50px", marginTop: "70px" }}>
              <img src={pic} alt='spinner' width='100%' height='100%' />
            </div>
          ) : null}
          <input
            className='input'
            name='email'
            type='text'
            name='email'
            value={email}
            placeholder='Enter your Email'
            onChange={onChangeText}
          />
          <input
            type='Password'
            className='input'
            name='password'
            value={password}
            placeholder='Enter your Password'
            onChange={onChangeText}
          />
          <input type='submit' className='button' name='log' />
        </form>
      </div>
    </div>
  );
};

export default Login;
