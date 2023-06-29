"use client";
import { MovieCont } from "@/components/movie/MovieCont";
import ContTitle from "@/components/title/ContTitle";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=37bef2f4ca3f23b3e4f635f2ec51d2a4&language=ko-KR&limit=18"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <>
      <ContTitle title="Movie" />
      <MovieCont movies={movies} />
    </>
  );
};
export default Movie;
