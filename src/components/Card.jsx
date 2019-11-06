import React from "react";
import styled from "styled-components";
import MaterialIcon, { colorPalette } from "material-icons-react";

const Styleddiv = styled.div`
  max-width: 100%;
  background: #e6e6e6;
  padding: 40px 0 10px 0;
  margin: 12rem 0;
  border-bottom: 10px solid #580000;
  border-top: 10px solid #580000;
`;

const StyledH1 = styled.h1`
  text-align: center;
  margin: 0 auto 0 auto;
  font-size: 55px;
  color: #580000;
  font-weight: bold;
  text-decoration: underline;
`;
const Cards = styled.div`
    margin: 5rem auto;
    max-width: 1000px
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: sans-serif;
    grid-column-gap: 80px;

    div.card {
        box-shadow: 0 0 3px rgba(0,0,0,0.1);
    }

    .card__image {
        width: 100%;
        display:block;
    }

    .card_content {
        line-height: 1.5;
        padding:15px;
        font-size: 0.9em;
        background: #fafafa;
    }

    .card_content > p:first-of-type {
        margin-top:0;
    }

    .card_content > p:last-of-type {
        margin-bottom:0;
    }

    .card__info {
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #eeeeee;
        font-size: 0.8em;
        border-bottom: 2px solid #cccccc;
        color: red;
        position: relative;
    }

    .card__link {
        color: #64968c;
        text-decoration: none;
    }

    .card__link:hover {
        text-decoration: underline;
    }
    span {
      position: absolute;
      left: 45px;
      top: 17.2px;
    }
    
`;

const Card = () => {
  return (
    <Styleddiv>
      <StyledH1>Meet Our Employees</StyledH1>
      <Cards className="cards">
        <div className="card">
          <img
            src="https://i.pravatar.cc/300?img=64"
            className="card__image"
            alt=""
          />
          <div className="card_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
          </div>
          <div className="card__info">
            <div>
              <MaterialIcon icon="thumb_up" size="tiny" />
              <span>312</span>
            </div>
            <div>
              <a href="./" className="card__link">
                View Article
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.pravatar.cc/300?img=59"
            className="card__image"
            alt=""
          />
          <div className="card_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
          </div>
          <div className="card__info">
            <div>
              <MaterialIcon icon="thumb_up" size="tiny" />
              <span>312</span>
            </div>
            <div>
              <a href="./" className="card__link">
                View Article
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://i.pravatar.cc/300?img=65"
            className="card__image"
            alt=""
          />
          <div className="card_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              esse omnis fugiat repudiandae quis?
            </p>
          </div>
          <div className="card__info">
            <div>
              <MaterialIcon icon="thumb_up" size="tiny" />
              <span>312</span>
            </div>
            <div>
              <a href="./" className="card__link">
                View Article
              </a>
            </div>
          </div>
        </div>
      </Cards>
    </Styleddiv>
  );
};

export default Card;
