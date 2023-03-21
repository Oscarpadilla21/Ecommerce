
import { BrowserRouter as Router,Route,Routes,
} from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import Header from './componentes/Header';
import ProductoDetalles from './Paginas/ProductoDetalles';
import Sidebar from './componentes/Sidebar';
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <div className=''>
      <Router>
       <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/producto/:id' element={<ProductoDetalles/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
