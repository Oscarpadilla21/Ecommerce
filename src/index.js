import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//provedor producto
import ProductoProvedor from './contexto/ProductoContexto';
//provedor sidebar
import SidebarProvider from './contexto/SidebarContexto';
import CarritoProvider from './contexto/CarritoContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <SidebarProvider>
  <CarritoProvider>
  <ProductoProvedor>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductoProvedor>
  </CarritoProvider>
 </SidebarProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
