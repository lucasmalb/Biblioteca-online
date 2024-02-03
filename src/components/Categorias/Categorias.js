import "./Categorias.css";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Categorias = () => {
  const titles = ['Fantasía','Juvenil', 'Acción', 'Animales', 'Aventuras', 'Ciencia Ficción', 'Policiales', 'Autoconclucivos', 'Historia', 'Guerra', 'Autoayuda', 'Diccionarios', 'Clasicos', 'Biografias'];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {titles.map((title, index) => (
        <div key={index} className="title-slide">
          <button>
            <p>{title}</p>
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default Categorias