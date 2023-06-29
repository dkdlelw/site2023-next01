import React from "react";
import UnsplashImg from "./UnsplashImg";
import styles from "./unsplash.module.scss";

const UnsplashCont = ({ images }) => {
  return (
    <div className={`${styles.unsplash__cont} container`}>
      <ul>
        {images.map((image, index) => (
          <UnsplashImg key={index} image={image} />
        ))}
      </ul>
    </div>
  );
};

export default UnsplashCont;
