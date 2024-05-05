import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const HandlNav = () => {
    let nav = document.getElementById("nav");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };
  return (
    <>
      <span className="icon iconhead">
        <i className="fa-solid fa-caret-down" onClick={HandlNav}></i>
      </span>
      <nav className="menu" id="nav">
        <Link className="nav-item p-5" to="/MyHome">
          Home
          <span className="nav-item active">
            <span className="icon">
              <i className="fa-solid fa-house-user"></i>
            </span>
          </span>
        </Link>

        <Link className="nav-item p-5" to={"/AddBlog"}>
          Add Blog
          <span className="nav-item">
            <span className="icon">
              <i className="fa-solid fa-pen"></i>
            </span>
          </span>
        </Link>

        <Link className="nav-item p-5" to="AddStorey">
          Add Story
          <span className="nav-item">
            <span className="icon">
              <i className="fa-solid fa-pen"></i>
            </span>
          </span>
        </Link>

        <Link className="nav-item p-5" to="/Blog">
          Blogs
          <span className="nav-item">
            <span className="icon">
              <i className="fa-solid fa-blog"></i>
            </span>
          </span>
        </Link>

        <Link className="nav-item p-5" to="storey">
          Story
          <span className="nav-item">
            <span className="icon">
              <i className="fa-solid fa-book-open"></i>
            </span>
          </span>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
