import React, { useState } from 'react'
import { CartPayContext } from './CartPayContext'


export const CartPayProvider = ({ children }) => {
    const [cartPayProductsList, setCartPayProductsList] = useState([])

    const addCartPayProductsList = (cartPay) => {
        setCartPayProductsList([...cartPayProductsList,cartPay])
    }

    return (
        <CartPayContext.Provider value={{cartPayProductsList,addCartPayProductsList}}>
            {children}
        </CartPayContext.Provider>
    )
}
