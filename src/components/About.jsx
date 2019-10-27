import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  text-align: center;
  margin: 0px auto;
  margin: 5rem auto 3rem auto;

  h1 {
    font-size: 4rem;
  }

  p {
    padding: 1rem;
    line-height: 1.6;
    max-width: 650px;
    margin: 0 auto;
    font-size: 19px;
  }

  .first {
    float: left;
    font-size: 3.96em;
    line-height: 0.5;
    margin: 0.205em 0.1em 0 0;
    color: #f51963;
    font-family: "Times New Roman", Times, serif;
  }

  .first + span {
    margin-left: -0.2em;
  }
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  justify-content: center;
  height: 240px;
  max-width: 55rem;
  color: #fff8dc;
  border: 1px solid #f51963;
  margin: 110px auto 3rem auto;
  border-radius: 10px;
`;

const About = props => {
  return (
    <Styleddiv>
      <TopDiv>
        <h1>About Us</h1>
      </TopDiv>

      <p>
        <span className="first">L</span>orem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsam, omnis quos? Similique nulla error ratione magni
        unde voluptate temporibus placeat molestiae dolor minus repellendus,
        nisi officia, asperiores laudantium. Rem, harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis
        quos? Similique nulla error ratione magni unde voluptate temporibus
        placeat molestiae dolor minus repellendus, nisi officia, asperiores
        laudantium. Rem, harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis
        quos? Similique nulla error ratione magni unde voluptate temporibus
        placeat molestiae dolor minus repellendus, nisi officia, asperiores
        laudantium. Rem, harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis
        quos? Similique nulla error ratione magni unde voluptate temporibus
        placeat molestiae dolor minus repellendus, nisi officia, asperiores
        laudantium. Rem, harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, omnis
        quos? Similique nulla error ratione magni unde voluptate temporibus
        placeat molestiae dolor minus repellendus, nisi officia, asperiores
        laudantium. Rem, harum!
      </p>
    </Styleddiv>
  );
};

export default About;
