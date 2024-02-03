import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Home = (book) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
 
            <div>
                <Link to={"/Book/" + book.name}> <img src="https://labordeeditor.com.ar/web/image/product.product/209884/image_1024/PSICOANALISTA%2C%20EL?unique=63c463a" alt="El Psicoanalista" /></Link>
                <div>
                    <h5 style={{"padding": "auto"}}>El Psicoanalista</h5>
                </div>
            </div>
            <div>
               <Link to={"/Book/" + book.id}><img src="https://images.cdn1.buscalibre.com/fit-in/360x360/d9/ac/d9ac44103b7a77e3efeccfb5eda7c693.jpg" alt="Divergente" /> </Link>
                <div>
                    <h5 style={{"padding": "auto"}}>Divergente</h5>
                </div>
            </div>
            <div>
            <Link to={"/Book/" + book.id}><img src="https://images.cdn3.buscalibre.com/fit-in/360x360/60/1f/601fc0c417ad7f30694c0a0dcc445bb9.jpg" alt= "Hush Hush" /> </Link>
                <div>
                    <h5 style={{"padding": "auto"}}>Hush Hush</h5>
                </div>
            </div>
            <div>
            <Link to={"/Book/" + book.id}><img src="https://planetadelibrosar0.cdnstatics.com/usuaris/libros/fotos/370/m_libros/370000_portada_playa-soledad_melania-sebastian_202212070731.jpg" alt= "Playa Soledad"/> </Link>
                <div>
                    <h5 style={{"padding": "auto"}}>Playa soledad</h5>
                </div>
            </div>
            <div>
            <Link to={"/Book/" + book.id}><img src="https://images.cdn1.buscalibre.com/fit-in/360x360/3e/d1/3ed17c865085a0e86f93037e16d20257.jpg" alt= "Narnia " /> </Link>
                <div>
                    <h5 style={{"padding": "auto"}}>Narnia</h5>
                </div>
            </div>
        </Slider >
    );
};

export default Home;