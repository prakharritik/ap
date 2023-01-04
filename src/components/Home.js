import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        <Link to="about">Click to view our about page</Link>
      </p>
      <p>
        <Link to="contact">Click to view our contact page</Link>
      </p>
      <p>
        <Link to="/user/profile">Click to view our user profile page</Link>
      </p>
      <p>
        <Link to="/user/account">Click to view our user account page</Link>
      </p>
      <p>Home page</p>
    </div>
  );
};

export default Home;
