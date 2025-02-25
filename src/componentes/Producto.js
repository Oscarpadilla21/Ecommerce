import React, {useContext} from 'react'
//importaciones de links
import {Link} from 'react-router-dom';
//importacion de iconos
import {BsPlus, BsEyeFill} from "react-icons/bs";
//contexto carrito
import {CarritoContexto} from "../contexto/CarritoContexto";

const Producto = ({productos}) => {
  const { agregaralCarrito } = useContext(CarritoContexto);

  const {id, image, category, title, price } = productos;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
          </div>
          <div className='absolute top-6 -right-11 group-hover:right-3  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button onClick={()=> agregaralCarrito(productos,id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl'/>
              </div>
            </button>
            <Link to={`/productos/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary text-primary drop-shadow-xl">
              <BsEyeFill/>
            </Link>
          </div>
          </div>
        </div>
        {/*Titulo & Categorias & precio */}
        <div>
          <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
            <Link to={`/productos/${id}`}>
              <h2 className="font-semibold mb-1">{title}</h2>
            </Link>
          <h2 className='font-semibold'>${price}</h2>
        </div>
    </div>
  )
}

export default Producto