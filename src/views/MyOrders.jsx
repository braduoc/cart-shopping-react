import React, { useContext } from 'react';
import { CartPayContext } from '../context/CartPayContext';
import { NavLink } from 'react-router';

export const MyOrders = () => {
    const { cartPayProductsList } = useContext(CartPayContext);

    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Mis Compras</h1> 

            { cartPayProductsList.length < 1 ?
                <div className="text-center">
                    <h6 style={{ margin: '8%' }}>No has realizado ninguna compra aún.</h6>
                    <br />
                    <NavLink to="/" className="btn btn-primary mb-2">
                        Ver Más Productos
                    </NavLink>
                    <br /><br /><br /><br /><br />
                    <NavLink to="/carrito" className="btn btn-secondary">
                        Ir Al Carrito
                    </NavLink>
                </div>
            :
                cartPayProductsList.map((order, index) => (
                    <div className="order-card mt-5" key={index} style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                        <h3 style={{ color: '#343a40' }}>Orden Nº: {order.id}</h3>
                        <table className="table table-hover table-bordered table-sm mt-3">
                            <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
                                <tr>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.productLis.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="img-fluid rounded"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.count}</td>
                                        <td>${(item.price * item.count).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3 className="mt-4" style={{ color: '#28a745' }}>Total Pagado: ${order.totalAPagar.toFixed(2)}</h3>
                        <hr />
                    </div>
                ))
            }
        </div>
        </>
    );
};
