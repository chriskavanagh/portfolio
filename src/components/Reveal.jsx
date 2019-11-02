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

const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  color: #282c34;
  z-index: 100;
  line-height: 12;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;

const handleClick = () => {
  console.log("Next/Previous");
};

const CarosouelExample = () => {
  const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel defaultWait={7000} maxTurns={5}>
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
