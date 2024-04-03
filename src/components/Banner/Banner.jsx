import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <span className="title">Money</span> <br />
        <span className="title" style={{ lineHeight: "2rem" }}>
          Heist
        </span>
        <div className="banner-btns">
          <button className="btn"><i className="fa-solid fa-play" style={{paddingRight:".5rem"}}></i> Play</button>
          <button className="btn"><i className="fa-solid fa-plus" style={{paddingRight:".5rem"}}></i> My List</button>
        </div>
        <p className="description-one">Watch Part 3 Now</p>
        <p className="description">
          With millions of euros and their lives on the line, nine robbers
          attempt to pull off the greatest heist of all time.
        </p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
