import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
//import styled from "styled-components";
// import { Fade } from "react-slideshow-image";
import unsplash1 from "../unsplach.jpg";
import unsplash2 from "../unsplash-2.jpg";
import unsplash3 from "../unsplash-3.jpg";

const slides = [
  {
    id: 0,
    url: unsplash1
  },
  {
    id: 1,
    url: unsplash2
  },
  {
    id: 2,
    url: unsplash3
  }
];

const Slideshow = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useEffect(
    () => void setInterval(() => set(index => (index + 1) % 3), 17000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`
      }}
    >
      <h1 className="slideShow__h1">Webworx Development</h1>
      <div className="slideShow__address">
        <p className="slideShow__p">3357 Kelly Ln Roanoke, VA 24018</p>
        <p className="slideShow__p">Website Design & Developent</p>
        <div className="cover"></div>
      </div>
      <div className="overlay"></div>
    </animated.div>
  ));
};

export default Slideshow;
