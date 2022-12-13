import React from "react";

import classes from "./BrowsePage.module.css";

import Nav from "../../components/Nav/Nav";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

import {
  useGetNetflixOriginalsQuery,
  useGetTopRatedQuery,
  useGetActionMoviesQuery,
  useGetComedyMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery,
} from "../../redux/tmdbApi";

const BrowsePage = () => {
  return (
    <div className={classes.container}>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetch={useGetNetflixOriginalsQuery} isLargeRow />
      <Row title="TOP RATED" fetch={useGetTopRatedQuery} isLargeRow />
      <Row title="ACTION MOVIES" fetch={useGetActionMoviesQuery} isLargeRow />
      <Row title="COMEDY MOVIES" fetch={useGetComedyMoviesQuery} isLargeRow />
      <Row title="HORROR MOVIES" fetch={useGetHorrorMoviesQuery} isLargeRow />
      <Row title="ROMANCE MOVIES" fetch={useGetRomanceMoviesQuery} isLargeRow />
      <Row title="DOCUMENTARY MOVEIS" fetch={useGetDocumentariesQuery} isLargeRow />
    </div>
  );
};

export default BrowsePage;
