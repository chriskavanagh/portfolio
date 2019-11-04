import React from "react";
import styled from "styled-components";
import MaterialIcon, { colorPalette } from "material-icons-react";

const Cards = styled.div`
    margin: 0 auto;
    max-width: 1000px
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-family: sans-serif;
    grid-column-gap: 20px;

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
    }

    .card__link {
        color: #64968c;
        text-decoration: none;
    }

    .card__link:hover {
        text-decoration: underline;
    }

    
`;

const Card = () => {
  return (
    <Cards className="cards">
      <div className="card">
        <img
          src="https://fakeimg.pl/400x300/009578/fff/"
          className="card__image"
          alt=""
        />
        <div className="card_content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
            omnis fugiat repudiandae quis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
            omnis fugiat repudiandae quis?
          </p>
        </div>
        <div className="card__info">
          <div>
            <MaterialIcon icon="thumb_up" size="tiny" />
          </div>
          <div>
            <a href="./" className="card__link">
              View Article
            </a>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default Card;
