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
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </Styleddiv>
  );
};

export default MyNav;
