import React, { useEffect, useState } from "react";

import { useGetNetflixOriginalsQuery } from "../../redux/tmdbApi";

import classes from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState("");
  const { data } = useGetNetflixOriginalsQuery();

  useEffect(() => {
    if (data) setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
  }, [data]);

  const truncateDescription = (str, n) => {
    return ((str?.length > n) ? str.substring(0, n-1) + '...' : str)
}

  return (
    <header
      className={classes.container}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.contents}>
        <h1>{movie?.title || movie?.name || movie?.original_title || movie?.original_name}</h1>
        <div className={classes["banner_buttons"]}>
          <button>Play</button>
          <button>More Info</button>
        </div>
        <p>{truncateDescription(movie?.overview, 200)}</p>
      </div>
      <div className="fadeBottom" />
    </header>
  );
};

export default Banner;
