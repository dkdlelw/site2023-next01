import React from "react";
import Slider from "@/components/slider/Slider";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";
import Movie from "@/components/movie/Movie";

const Home = () => {
  return (
    <>
      <Slider attr="slider__wrap SebangGothic4 section" />
      <Intro attr="intro__wrap SebangGothic4 section bg-blue" />
      <Portfolio attr="port__wrap SebangGothic4 section center bg-blue" />
      <Youtube attr="youtube__wrap SebangGothic4 section" />
      <Unsplash attr="unsplash__wrap SebangGothic4 section bg-blue" />
      <Movie attr="movie__wrap SebangGothic4 section" />
    </>
  );
};

export default Home;
