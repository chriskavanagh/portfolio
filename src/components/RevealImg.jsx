import React from "react";
import styled from "styled-components";

const Imgdiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 16px solid gray;
`;

const Overlaydiv = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.6;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
`;

const RevealImg = ({ url }) => {
  console.log(url);
  return (
    <>
      <Imgdiv style={{ backgroundImage: `url(${url})` }}>
        <h1 className="slideShow__h1">Webworx Development</h1>
        <div className="slideShow__address">
          <p className="slideShow__p">3357 Kelly Ln Roanoke, VA 24018</p>
          <p className="slideShow__p">Website Design & Developent</p>
          <div className="cover"></div>
        </div>
        <Overlaydiv></Overlaydiv>
      </Imgdiv>
    </>
  );
};

export default RevealImg;
