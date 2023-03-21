import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2} from "react-icons/fi";
//Componentes
import { CarritoProductos } from "./CarrtitoProductos"
//SidebarContexto
import { SidebarContexto } from '../contexto/SidebarContexto';

import { CarritoContexto } from '../contexto/CarritoContexto';

const Sidebar = () => {
   
    const{ isOpen, handleClose} = useContext(SidebarContexto);
    const { Carrito, LimpiarCarrito, Total}=useContext(CarritoContexto);

    return (
    <div className={`${ isOpen ? 'right-0' : '-left-full'} w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vm] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className='uppercase text-sm font-semibold'>Bolsa de compras(0)</div>
          <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
            <IoMdArrowForward className='text-2x1'/> 
          </div>
        </div>
        <div className='flex flex-col gap-y-2 h-[600px] lg:h-[600px] overflow-y-auto overflow-x-hidden border-b'>{Carrito.map((Objeto) => {
          return <CarritoProductos Objeto={Objeto} key={Objeto.id}/>;
        })}</div>
        <div className=' flex flex-col gap-y-3 py-4 mt-4'>
          <div className=' flex w-full justify-between items-center'>
            {/*Cuneta Total*/}
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total:</span>$ {parseFloat(Total).toFixed(2)}
            </div>
            <div onClick={LimpiarCarrito} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2/></div>
          </div>
          <Link to="/" className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>Mira el carrito</Link>
          <Link to="/" className="bg-red-500 flex p-4 justify-center items-center text-white w-full font-medium">Verificar</Link>
        </div>
      </div>
    );
  
};

export default Sidebar