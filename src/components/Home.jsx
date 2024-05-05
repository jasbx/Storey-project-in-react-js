import React from "react";
import { BiBookHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home"
      classNameName="container   h-96  mt-5 bg-danger d-flex justify-content-center "
    >
      <div>
        <div className="icon  text-center">
          <Link className="icon">
            Share youre <BiBookHeart className=" icon" /> Storey
          </Link>

          <div className="text"></div>
          <Link className="btn  fs-5 mt-5 " to={"/AddStorey"}>
            <button className="btn">
              <div className="wrapper">
                <p className="text">Share</p>

                <div className="flower flower1">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
                <div className="flower flower2">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
                <div className="flower flower3">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
                <div className="flower flower4">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
                <div className="flower flower5">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
                <div className="flower flower6">
                  <div className="petal one"></div>
                  <div className="petal two"></div>
                  <div className="petal three"></div>
                  <div className="petal four"></div>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
