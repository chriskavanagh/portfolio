import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styleddiv = styled.div`
  position: sticky;
  top: 0;
  background: #282c34;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-right: 3rem;
  }

  li {
    padding: 0 25px 0 25px;
    color: #f51963;
  }

  .logo {
    margin-left: 3rem;
    color: #f51963;
    font-size: 23px;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 5px 5px 5px 5px;
  color: #f51963;
  text-decoration: none;
  display: block;
  font-family: Roboto;
  font-size: 19px;

  :hover,
  :active {
    color: #fa923f;
    background: gray;
  }
`;

const MyNav = props => {
  return (
    <Styleddiv className="myNav">
      <div className="logo">
        <h3>The Logo</h3>
      </div>
      <nav>
        <div className="navLinks">
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
          </ul>
        </div>
      </nav>
    </Styleddiv>
  );
};

export default MyNav;
