"use client";
import { UnsplashCont } from "@/components/unsplash/UnsplashCont";
import ContTitle from "@/components/title/ContTitle";
import React, { useEffect, useState } from "react";

const Image = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.unsplash.com/photos?client_id=UTTBntve3N_wMf-_VWO7RRnrOt3E4s3L9crRuJtSH1k&per_page=30"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  console.log(images);

  return (
    <>
      <ContTitle title="unsplash" />
      <UnsplashCont images={images} />
    </>
  );
};

export default Image;
