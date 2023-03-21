import React from 'react'
import asuna from "../img/asuna.png"

import { Link } from 'react-router-dom';

const Hero = ()  => {
  return  <section className='bg-yellow-500 h-[800px] bg-hero bg-no bg-repeat bg-cover bg-center py-24 '>
        <div className='container mx-auto flex justify-around h-full'>
            <div className='flex flex-col justify-center'>
                <div className='font-semibold flex items-center uppercase'>
                    <div className='w-10 h-[2px] bg-rose-500 mr-3'></div>
                    Tendencia
                </div>
                <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                OFERTAS CON ESTILO<br/>
                <span className='font-semibold'>MUJERES</span>
            </h1>
            <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-primary">Ver mas</Link>
            </div>
            <div className='hidden lg:block'>
                <img className='w-[349px]' src={asuna} alt=''></img>
            </div>
        </div>  
            


    </section>
  
};

export default Hero;