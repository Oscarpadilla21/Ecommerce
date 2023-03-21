import React,{createContext, useState, useEffect} from "react"

//creador contexto

export const ProductoContexto = createContext();

const ProductoProvedor = ({children}) => {
   //estado de los productos
    const [productos, setProductos] = useState([]);
    //Buscador de productos
    useEffect(() =>{
        const BuscadorProductos = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductos(data);
            
        };
        BuscadorProductos();
    },[]);
  return (
    <ProductoContexto.Provider value={{productos}}>{children}</ProductoContexto.Provider>
  )
};

export default ProductoProvedor;