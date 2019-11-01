import React, { useState, useEffect } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import unsplash1 from "../unsplach.jpg";
import unsplash2 from "../unsplash-2.jpg";
import unsplash3 from "../unsplash-3.jpg";
import RevealImg from "./RevealImg";

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

const Container = styled.div`
  width: 100%;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const CarosouelExample = () => {
  const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);
  const [index, setindex] = useState(0);
  /* useEffect(
    // modulus will give the index back until last index gives 0
    () => void setInterval(() => setindex(index => (index + 1) % 3), 5000),
    []
  ); */

  return (
    <Carousel defaultWait={12000} maxTurns={500}>
      <Slide right>
        <div>
          <RevealImg url={slides[1].url} />;
        </div>
      </Slide>
      <Slide right>
        <div>
          <RevealImg url={slides[2].url} />;
        </div>
      </Slide>
    </Carousel>
  );
};

export default CarosouelExample;
