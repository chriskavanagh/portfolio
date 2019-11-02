import React, { useState } from "react";
import styled from "styled-components";

const Imgdiv = styled.div`
  width: 99.2vw;
  height: 740px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlaydiv = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
`;

const RevealImg = ({ url }) => {
  console.log(url);
  return (
    <Imgdiv style={{ backgroundImage: `url(${url})` }}>
      <h1 className="slideShow__h1">Webworx Development</h1>
      <div className="slideShow__address">
        <p className="slideShow__p">3357 Kelly Ln Roanoke, VA 24018</p>
        <p className="slideShow__p">Website Design & Developent</p>
        <div className="cover"></div>
      </div>
      <Overlaydiv></Overlaydiv>
    </Imgdiv>
  );
};

export default RevealImg;
