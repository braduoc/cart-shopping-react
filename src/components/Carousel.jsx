import React from 'react';

export const Carousel = () => {
    return (
        <>
            <div
                className="container mt-4 carousel slide"
                id="carouselExampleControls"
                data-bs-ride="carousel"
                data-bs-interval="2000"
                style={{  width: '80%' }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../assets/img-carrusel-1.jpg" className="d-block w-100" height="400px" alt="Imagen 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="../../assets/img-carrusel-2.png" className="d-block w-100" height="400px" alt="Imagen 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="../../assets/img-carrusel-3.png" className="d-block w-100" height="400px" alt="Imagen 3" />
                    </div>
                </div>

                {/* Controles del carrusel */}
                <button 
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};
