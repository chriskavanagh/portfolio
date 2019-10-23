import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <Carousel className="caro">
            <div>
              <img src="https://source.unsplash.com/400x400?mountain" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://source.unsplash.com/400x400?nature" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://source.unsplash.com/400x400?valley" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </section>

      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        </p>

        <p>
          Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce ultrices
        </p>

        <p>
          Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus
          ornare, id bibendum velit consequat. Fusce posuere risus sollicitudin
        </p>
      </main>
    </>
  );
};

export default MyCarousel;
