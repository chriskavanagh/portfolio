import React from "react";
import styled from "styled-components";
import Caro from "./Caro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Styleddiv = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin: 50px auto;
  max-width: 70%;

  p {
    margin: 15px;
    padding: 15px;
    line-height: 1.6;
    font-size: 19px;
    max-width: 80%;
  }

  .first {
    float: left;
    font-size: 3.96em;
    line-height: 0.5;
    margin: 0.205em 0.1em 0 0;
    color: #f51963;
    font-family: "Times New Roman", Times, serif;
    line-height: 30px;
  }

  .first + span {
    margin-left: -0.7em;
  }

  @media (max-width: 968px) {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 95%;
    margin: 0 auto 0 auto;

    p {
      margin: auto;
      padding: 30px;
    }
  }
`;

const Toph1 = styled.h1`
  text-align: center;
  font-family: Oxygen;
  font-size: 4rem;
`;

const Styledli = styled.li`
  color: #fa5738;
  margin-bottom: 40px;
  border-bottom: 1px dotted blue;
  padding-bottom: 10px;
`;

const Styledul = styled.ul`
  list-style: none;
  margin-top: 40px;
  padding: 0px;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  justify-content: center;
  height: 240px;
  color: #dcdcdc;
  border: 1px solid #f51963;
  margin: 110px 15% 0 15%;
  border-radius: 10px;
  box-shadow: inset 0 0 10px #000000;
`;

const AsideDiv = styled.div`
  margin-top: 8em;
  background: #f6f6f6;
  border-radius: 20px;

  ul {
    margin-bottom: 2em;
    list-style: none;
    margin: 0 0 2em 0;
  }

  li {
    line-height: 1.4;
    font-size: 20px;
    padding: 10px 15px;
  }
`;

const Main = props => {
  return (
    <>
      <Caro />
      <TopDiv>
        <Toph1>Webworx Development</Toph1>
      </TopDiv>

      <Styleddiv>
        <div>
          <p>
            <span className="first">L</span>orem, ipsum dolor sit amet
            consectetur adipisicing elit. Ad asperiores eos necessitatibus,
            corporis maxime animi! Fuga odio, dicta ex explicabo quaerat facilis
            officiis. Nostrum odit, magnam harum doloribus quisquam velit!
            Reprehenderit odio ex quasi tempore incidunt ut ducimus suscipit
            unde ipsum sed in laboriosam reiciendis cum saepe veritatis eaque,
            cumque delectus recusandae porro. Neque blanditiis similique nulla
            quam consequuntur ea. Totam sit odit illum minus in molestiae eius
            voluptas culpa porro esse quos qui deserunt dolorem unde possimus
            laborum ipsa, ex vel consequatur? Ipsam deleniti at, totam saepe
            obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            asperiores eos necessitatibus, corporis maxime animi! Fuga odio,
            dicta ex explicabo quaerat facilis officiis. Nostrum odit, magnam
            harum doloribus quisquam velit! Reprehenderit odio ex quasi tempore
            incidunt ut ducimus suscipit unde ipsum sed in laboriosam reiciendis
            cum saepe veritatis eaque, cumque delectus recusandae porro. Neque
            blanditiis similique nulla quam consequuntur ea. Totam sit odit
            illum minus in molestiae eius voluptas culpa porro esse quos qui
            deserunt dolorem unde possimus laborum ipsa, ex vel consequatur?
            Ipsam deleniti at, totam saepe obcaecati nihil.
          </p>
        </div>

        <div>
          <Styledul>
            <Styledli>Kollektif Typeface</Styledli>
            <Styledli>Noelan Script Font</Styledli>
            <Styledli>Debby Font Family</Styledli>
            <Styledli>Wreath Font Family</Styledli>
            <Styledli>Selima Script Font Free</Styledli>
            <Styledli>Selima Script Font Free</Styledli>
          </Styledul>
          <AsideDiv>
            <ul>
              <li>
                <Link>Coding, Layouts, CSS, Essentials</Link>
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ marginRight: "10px" }}
                  color="dodgerblue"
                />
                <Link>Share on Twitter</Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ marginRight: "10px" }}
                  color="#0077b5"
                />
                <Link>Share on LinkedIn</Link>
              </li>
            </ul>
          </AsideDiv>
        </div>
      </Styleddiv>
    </>
  );
};

export default Main;
