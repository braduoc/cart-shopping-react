import React, {  useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext'

export const ProductsProvider = ({ children }) => {
    const [dataProducts, setDataProducts] = useState([])
    const [dataLoad, setDataLoad] = useState(false)

  

        
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setDataProducts(data);
        setDataLoad(true);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchData();
  }, []);
        


    
    return (
        <ProductsContext.Provider value={{ dataProducts, dataLoad }}>
            {children}
        </ProductsContext.Provider>
    )
}
