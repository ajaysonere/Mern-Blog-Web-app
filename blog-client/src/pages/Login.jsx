/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In </h2>
        <form className="form login__form">
          <p className="form__error-message">This is an Error Message </p>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
            autoFocus
          />
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account ? <Link to="/register">sing up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
