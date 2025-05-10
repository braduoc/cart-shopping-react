import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CartPayContext } from '../context/CartPayContext';
import { NavLink, useNavigate } from 'react-router';

export const Cart = () => {
    const navigate = useNavigate();
    const { productLis, deleteProductList, sumCountProductList, resCountProductList, deleteProductListAll } = useContext(CartContext);
    const { addCartPayProductsList } = useContext(CartPayContext);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    // Calcular el total a pagar
    const totalAPagar = productLis.reduce((acc, item) => {
        return acc + (item.price * item.count);
    }, 0);

    const handlePayCartProducts = (productLis, totalAPagar) => {
        const cartPay = {
            id: Date.now(),
            productLis,
            totalAPagar
        };
        addCartPayProductsList(cartPay);

        // Simulación de proceso de pago
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(!isProcessing);
            setIsCompleted(!isCompleted); // Cambio de estado cuando el pago es exitoso
            deleteProductListAll();
        }, 3000); // Simulamos un procesamiento de 3 segundos

        // Redirigir a "miscompras" después de 3.5 segundos para mostrar el mensaje final
        setTimeout(() => {
            navigate("/miscompras");
        }, 3500);
    };

    return (
        <>
            <div className="container mt-5" style={{ width: '80%' }}>
                <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Carrito de Compras</h1>
                {productLis.length === 0 ? (
                    <div className="text-center">
                        <h6 style={{ margin: '10%', color: '#343a40' }}>No hay productos en el carrito.</h6>
                        <NavLink to="/" className="btn btn-outline-primary">Ver Más Productos</NavLink>
                        <br /><br /><br /><br /><br />
                        <NavLink to="/miscompras" className="btn btn-outline-secondary">Ir A Mis Compras</NavLink>
                    </div>
                ) : (
                    productLis.map(item => (
                        <div className="card mb-3 shadow-sm" key={item.id} style={{ borderRadius: '10px' }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="img-fluid rounded-start"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                            objectFit: 'contain',
                                            borderRadius: '8px'
                                        }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: 'bold' }}>{item.title}</h5>
                                        <small className="card-title text-muted">{item.description}</small>
                                        <br /><br />
                                        <p className="card-text" style={{ fontSize: '16px' }}>Precio unitario: <strong>${item.price}</strong></p>
                                        <p className="card-text" style={{ fontSize: '16px' }}>Cantidad: {item.count}</p>
                                        <p className="card-text" style={{ fontSize: '16px' }}>Subtotal: <strong>${item.count * item.price}</strong></p>

                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() => sumCountProductList(item.id)}
                                            >
                                                <i className="bi bi-plus-circle"></i> Sumar
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => resCountProductList(item.id)}
                                            >
                                                <i className="bi bi-dash-circle"></i> Restar
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger ms-auto"
                                                onClick={() => deleteProductList(item.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Espacio entre productos y el área de pago */}
            <div style={{ height: '100px' }}></div>

            {/* Contenedor para el total y el botón de pagar */}
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ position: 'fixed', bottom: '5px', width: '100%', zIndex: 1000 }}>
                {/* Total a pagar */}
                <div style={{ width: '80%', textAlign: 'center', color: '#fff', background: '#343a40', padding: '10px', borderRadius: '8px' }}>
                    Total a Pagar: <strong>${totalAPagar.toFixed(2)}</strong>
                </div>
                {/* Botón de Pagar */}
                <button
                    className="btn btn-primary"
                    onClick={() => handlePayCartProducts(productLis, totalAPagar)}
                    style={{ width: '80%', marginTop: '10px', borderRadius: '8px' }}
                    disabled={productLis.length < 1}
                >
                    {isProcessing ? (
                        <span><i className="bi bi-spinner" style={{ fontSize: '20px' }}></i> Procesando...</span>
                    ) : (
                        <span>Pagar</span>
                    )}
                </button>
            </div>

            {/* Modal de Proceso de Pago */}
            {isProcessing && (
                <div className="modal fade show" id="miModal" tabIndex="-1" aria-labelledby="miModalLabel" aria-hidden={!isProcessing} style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="miModalLabel">Procesando Pedido...</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setIsProcessing(false)}
                                    aria-label="Cerrar"
                                    disabled={isProcessing}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {isProcessing ? (
                                    <div className="text-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Cargando...</span>
                                        </div>
                                        <p>Estamos procesando tu pedido. Esto puede tomar un momento.</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <p>Tu pedido fue realizado exitosamente. Serás redirigido a "Mis Compras".</p>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setIsProcessing(false)}
                                    disabled={isProcessing}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
