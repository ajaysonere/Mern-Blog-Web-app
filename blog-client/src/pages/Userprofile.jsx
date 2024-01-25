import { Link } from "react-router-dom";
import Avatar from "/images/avatar12.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Userprofile = () => {
  const [avatar, setAvatar] = useState(Avatar);  
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [currentPassword , setCurrentPassword] = useState('');
  const [newPassword , setNewPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdsd`} className="btn ">
          My Posts
        </Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} />
            </div>
            {/* form update avatar */}
            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                accept="png , jpeg , jpg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
            <button className="profile__avatar-btn">
              <FaCheck />
            </button>
          </div>
          <h1>Ernest Achiever</h1>

          {/* form for update the profile data */}

          <form className="form profile__form">
            <p className="form__error-message">This is an Error Message</p>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn primary">Update Details </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Userprofile;
