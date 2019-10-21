import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  background: gray;
  padding: 2.5rem;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const Styledh1 = styled.h1`
  font-size: 3rem;
`;

const TopNav = props => {
  return (
    <Styleddiv className="topNav">
      <Styledh1>The Brand</Styledh1>
    </Styleddiv>
  );
};

export default TopNav;
