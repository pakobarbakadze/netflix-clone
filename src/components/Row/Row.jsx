import React from "react";

import classes from './Row.module.css'

const Row = ({ title, fetch, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { data } = fetch();

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.posters}>
        {data?.results.map(
          (item) =>
            ((isLargeRow && item.poster_path) || (!isLargeRow && item.backdrop_path)) && (
              <img
                className={`${classes.poster} ${isLargeRow && classes['poster-large']}`}
                key={item.id}
                src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`}
                alt={item.name || item.title}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
