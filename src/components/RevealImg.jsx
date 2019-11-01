import React, { useState } from "react";
import styled from "styled-components";

const Imgdiv = styled.div`
  width: 100vw;
  height: 740px;
  object-fit: cover;
  background-position: center;

  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RevealImg = props => {
  return (
    <Imgdiv style={{ backgroundImage: `url(${props.url})` }}>
      <h1 className="slideShow__h1">Webworx Development</h1>
      <div className="slideShow__address">
        <p className="slideShow__p">3357 Kelly Ln Roanoke, VA 24018</p>
        <p className="slideShow__p">Website Design & Developent</p>
        <div className="cover"></div>
      </div>
      <div className="overlay"></div>
    </Imgdiv>
  );
};

export default RevealImg;
