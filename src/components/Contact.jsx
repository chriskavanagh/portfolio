import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Styleddiv = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const Contact = props => {
  return (
    <Styleddiv>
      <h1>Contact Page!</h1>
      <Text />
      <Text />
    </Styleddiv>
  );
};

export default Contact;
