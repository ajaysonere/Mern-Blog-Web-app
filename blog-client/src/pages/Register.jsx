import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [userData, setUserData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
    const changeInputHandler = (e) => {
    
       setUserData(prevState => {
           return {...prevState , [e.target.name] : [e.target.value]};
       })
    }
    
  return (
    <section className="register">
      <div className="container">
        <h2>Sign up </h2>
        <form className="form register__form">
          <p className="form__error-message">This is an Error Message </p>
          <input
            type="text"
            placeholder="full name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
          />
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
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={changeInputHandler}
            autoFocus
          />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Already have an account ? <Link to="/login">sing in</Link></small>
      </div>
    </section>
  );
}

export default Register