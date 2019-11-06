import React from "react";
import styled from "styled-components";
import Slideshow from "./Slideshow";
import Card from "./Card";
//import CarosouelExample from "./Reveal";

const Containerdiv = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 1fr 200px;
  margin: 0 auto 0rem auto;
  background: #e6e6e6;
  padding: 50px 0 30px 0;
  border-bottom: 10px solid #580000;
  border-top: 10px solid #580000;

  p {
    margin: 15px auto;
    padding: 10px;
    font-size: 19px;
    color: #330000;
    font-family: "Helvetica Neue";
    line-height: 1.5;
  }

  div {
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 38px;
    text-decoration: underline;
    color: #580000;
    font-weight: bold;
    margin: 0 0 40px 0;
  }
`;

const Text = props => {
  return (
    <>
      <Containerdiv style={{ marginTop: "29rem" }}>
        <div></div>
        <div>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            ipsam facilis odio enim iusto, a quaerat, adipisci ut eaque id
            dolorum delectus necessitatibus modi atque, quos vero explicabo
            distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            ipsam facilis odio enim iusto, a quaerat, adipisci ut eaque id
            dolorum delectus necessitatibus modi atque, quos vero explicabo
            distinctio!
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            ipsam facilis odio enim iusto, a quaerat, adipisci ut eaque id
            dolorum delectus necessitatibus modi atque, quos vero explicabo
            distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            ipsam facilis odio enim iusto, a quaerat, adipisci ut eaque id
            dolorum delectus necessitatibus modi atque, quos vero explicabo
            distinctio!
          </p>
        </div>
        <div></div>
      </Containerdiv>
      <Card />
    </>
  );
};

export default Text;
