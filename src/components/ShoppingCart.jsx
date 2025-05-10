import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';

export const ShoppingCart = () => {
    const navigate = useNavigate();
    const { dataProducts, dataLoad } = useContext(ProductsContext);
    const { productLis, addProductList } = useContext(CartContext);

    const isInCart = (id) => {
        return productLis.some(product => product.id === id);
    };

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Nuestros Productos</h1>
                <div className="row g-4">
                    {dataLoad ? dataProducts.map(item => (
                        <div className="col-md-4" key={item.id}>
                            <div className="card shadow-sm border-light rounded h-100">
                                <img 
                                    src={item.images?.[0]} 
                                    className="card-img-top" 
                                    alt={item.title} 
                                    style={{ objectFit: 'contain', height: '200px' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text" style={{ fontSize: '14px', color: '#6c757d' }}>{item.category.name}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center">
                                    <small className="text-body-secondary">Precio: ${item.price}</small>
                                    <div className="d-flex gap-2">
                                        {isInCart(item.id) ? (
                                            <button className="btn btn-secondary btn-sm" disabled>
                                                Agregado
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => addProductList(item)}
                                            >
                                                Agregar Carrito
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center w-100">
                            <h3 className="text-muted">Cargando...</h3>
                        </div>
                    )}
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center" style={{ position: 'fixed', bottom: '20px', width: '100%', zIndex: 1000 }}>
                <button 
                    className="btn btn-success"
                    style={{ width: '80%' }} 
                    onClick={() => navigate("/carrito")}
                >
                    Ver Carrito
                </button>
            </div>
        </>
    );
};
