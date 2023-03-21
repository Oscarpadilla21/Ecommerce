import React, {useContext} from 'react';
import { ProductoContexto } from '../contexto/ProductoContexto';
import Producto from "../componentes/Producto";
import Hero from "../componentes/Hero";

const Inicio = () => {
  //obtener productos desde el contexto
  const {productos} = useContext(ProductoContexto)
  console.log(productos)
  //Obtencion de ropa para Hombre y mujer desde las categorias
  const filtroProductos = productos.filter(item=>{
    return ( item.category === "men's clothing" || item.category ==="women's clothing");
  });
  console.log(filtroProductos);
  return (
    <div>
      <Hero/>
      <section className='py-16'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
              {filtroProductos.map(productos => {
                return <Producto productos={productos} key={productos.id}/>
              })}
              </div>
            </div>
      </section>
    </div>
  )
}

export default Inicio;