import React, { createContext, useEffect, useState } from 'react'


export const CarritoContexto = createContext()

const CarritoProvider = ({children}) => {

  const [Carrito, SetCarrito] = useState ([]);

  const [ObjetoMonto, setObjetoMonto] = useState(0);

  const [ Total, setTotal] = useState(0);

  useEffect(() => {
    const Total = Carrito.reduce((acumulador, ObjetoActual) =>
    {
      return acumulador + ObjetoActual.price * ObjetoActual.amount;
    }, 0);
    setTotal(Total);
  });
 
  useEffect(() => {
      if (Carrito){
        const Monto = Carrito.reduce((acumulador, ObjetoActual ) => {
          return acumulador + ObjetoActual.amount;
      }, 0);
      setObjetoMonto(Monto);
    }
  }, [Carrito]);

  const agregaralCarrito = (productos,id) => {
    const nuevoProducto = { ...productos, amount:1};
    console.log(nuevoProducto);
    const CarritoObjeto = Carrito.find(Objeto =>{
      return Objeto.id === id;
    });
    console.log(CarritoObjeto);
    if (CarritoObjeto){
      const nuevoCarrito = [...Carrito].map((Objeto) => {
        if (Objeto.id === id) {
          return {...Objeto, amount: CarritoObjeto.amount+1 };
        } else{
          return Objeto;
        }
      });
      SetCarrito(nuevoCarrito);
    } else {
      SetCarrito([...Carrito,nuevoProducto]);
    }
  };
  const QuitarDelCarrito = (id) => {
    const nuevoCarrito = Carrito.filter(Objeto => {
      return Objeto.id !== id;
    });
    SetCarrito(nuevoCarrito);
  }

  const LimpiarCarrito = () => {
   SetCarrito([]); 
  };
  const MontoTotal =(id)=>{
    const CarritoObjeto = Carrito.find((Objeto) => Objeto.id);
    agregaralCarrito(CarritoObjeto, id);
  }

  const RemoverProducto = (id) => {
    const CarritoObjeto = Carrito.find((Objeto) => {
      return Objeto.id === id;
    });
    if( CarritoObjeto ) {
      const nuevoCarrito = Carrito.map(Objeto => {
        if(Objeto.id === id){
          return { ...Objeto, amount: CarritoObjeto.amount-1};
        } else{
          return Objeto;
        }
      });
      SetCarrito(nuevoCarrito);
    } 
      if(CarritoObjeto.amount < 2){
        QuitarDelCarrito(id);
      }
    
  }

  return <CarritoContexto.Provider value={{ Carrito, agregaralCarrito , QuitarDelCarrito, LimpiarCarrito, MontoTotal,RemoverProducto ,ObjetoMonto ,Total}}>{children}</CarritoContexto.Provider>
  
};

export default CarritoProvider;