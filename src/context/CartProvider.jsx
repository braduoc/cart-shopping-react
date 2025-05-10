import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

const initialStateProductList = [];

const productListReducer = (state = initialStateProductList, action = {}) => {
    switch (action.type) {
        case '[ProductList] Add Product List':
            return [...state, action.payload];

        case '[ProductList] Delete Product List':
            return state.filter(item => item.id !== action.payload);

        case '[ProductList] Delete All Product List':
            return [];

        case '[ProductList] Sum Product List':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, count: item.count + 1 }
                    : item
            );

        case '[ProductList] Res Product List':
            return state.map(item =>
                item.id === action.payload && item.count > 1
                    ? { ...item, count: item.count - 1 }
                    : item
            );

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [productLis, dispatch] = useReducer(productListReducer, initialStateProductList);

    const addProductList = (item) => {
        dispatch({ type: '[ProductList] Add Product List', payload: { ...item, count: 1 } });
    };

    const deleteProductList = (id) => {
        dispatch({ type: '[ProductList] Delete Product List', payload: id });
    };
    const deleteProductListAll = () => {
        dispatch({ type: '[ProductList] Delete All Product List' });
    };

    const sumCountProductList = (id) => {
        dispatch({ type: '[ProductList] Sum Product List', payload: id });
    };

    const resCountProductList = (id) => {
        dispatch({ type: '[ProductList] Res Product List', payload: id });
    };

    return (
        <CartContext.Provider value={{ productLis, addProductList, deleteProductList, sumCountProductList, resCountProductList , deleteProductListAll}}>
            {children}
        </CartContext.Provider>
    );
};
