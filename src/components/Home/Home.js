const Home = () => {
    return (


        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
           
                <div className="carousel-item active card" style={{"width": "15rem"}}>
                    <img src="https://labordeeditor.com.ar/web/image/product.product/209884/image_1024/PSICOANALISTA%2C%20EL?unique=63c463a" className="d-block w-100 card-img-top" alt="El Psicoanalista" />
                    <div className="card-body">
                        <h5 className="card-title text-center">El Psicoanalista</h5>
                    </div>
                </div>
                <div className="carousel-item card" style={{"width": "15rem"}}>
                    <img src="https://images.cdn1.buscalibre.com/fit-in/360x360/d9/ac/d9ac44103b7a77e3efeccfb5eda7c693.jpg" className="d-block w-100 card-img-top" alt="Divergente" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Divergente</h5>
                    </div>
                </div>
                <div className="carousel-item card" style={{"width": "15rem"}}>
                    <img src="https://images.cdn3.buscalibre.com/fit-in/360x360/60/1f/601fc0c417ad7f30694c0a0dcc445bb9.jpg" className="d-block w-100 card-img-top" alt="Hush Hush" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Hush Hush</h5>
                    </div>
                </div>
                <div className="carousel-item card" style={{"width": "15rem"}}>
                    <img src="https://contentv2.tap-commerce.com//cover/large/9789873820816_1.jpg?id_com=717" className="d-block w-100 card-img-top" alt="Culpa mia" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Culpa mia</h5>
                    </div>
                </div>
                <div className="carousel-item card" style={{"width": "15rem"}}>
                    <img src="https://www.penguinlibros.com/ar/1603358-thickbox_default/trilogia-mi-eleccion-edicion-pack-con-alguien-que-no-soy-alguien-como-tu-alguien-como-yo.jpg" className="d-block w-100 card-img-top" alt="mi eleccion" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Mi eleccion</h5>
                    </div>
                </div>
                {/* <div className="carousel-item card" style="width: 15rem">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title text-center"></h5>
            </div>
        </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Home;