import React, {useContext, useEffect, useState} from 'react'
import { SidebarContexto } from '../contexto/SidebarContexto'
import fashion from "../img/fashion.png"
import { CarritoContexto } from '../contexto/CarritoContexto'
import {Link} from "react-router-dom"

//Iconos
import {BsBag} from "react-icons/bs"

const Header = () => {
  const [EstaActivo, SetEstaActivo] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContexto);
  const { ObjetoMonto } = useContext(CarritoContexto);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? SetEstaActivo(true) : SetEstaActivo(false);
    });
  });

  return (
    
    <header className={`${EstaActivo ? "bg-white py-4 shadow-md":"bg-dark-400" } fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={"/"}>
          <div>
           <img className="w-[40px]" src={fashion} alt=""/>
          </div>
      </Link>
      
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative ">
        <BsBag className='text-2x1'/><div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[15px]
        h-[15px] text-white rounded-full flex justify-center items-center'> { ObjetoMonto } </div>
      </div>
      </div>
    </header>
    
  );
}

export default Header