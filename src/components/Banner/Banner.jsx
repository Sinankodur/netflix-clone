import React, { useState, useEffect } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
import axios from "../../axios";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(`discover/movie?api_key=${API_KEY}&language=en-US`).then((response) => {
        // console.log(response.data.results[0]);
        setMovie(response.data.results[1]);
      });
  }, []);
  return (
    <div className="banner" style={{backgroundImage: `url(${imageUrl+movie.backdrop_path})`}}>
      <div className="content">
        <div style={{maxWidth:'35rem',lineHeight:'3.3rem'}}>
          <span className="title" >{movie.title}</span>
        </div>
        <div className="banner-btns">
          <button className="btn">
            <i
              className="fa-solid fa-play"
              style={{ paddingRight: ".5rem" }}
            ></i>
            Play
          </button>
          <button className="btn">
            <i
              className="fa-solid fa-plus"
              style={{ paddingRight: ".5rem" }}
            ></i>
            My List
          </button>
        </div>
        <p className="description">
          {movie.overview}
        </p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
