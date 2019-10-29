import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
//import styled from "styled-components";
import { Fade } from "react-slideshow-image";
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
  },
  { id: 3, url: unsplash1 }
];

const Slideshow = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  });

  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 5000),
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
    />
  ));
};

export default Slideshow;
