import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  text-align: center;
  margin: 0px auto;
  max-width: 550px;

  p {
    padding: 1rem;
    line-height: 1.6;
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
const About = props => {
  return (
    <Styleddiv>
      <h1>About Page!</h1>
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
