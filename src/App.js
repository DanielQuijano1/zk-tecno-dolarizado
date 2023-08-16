import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './storage/cartContext';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Categories from './componentes/Categories/Catergories';
import HomePage from './componentes/HomePage/HomePage';
import Error404 from './componentes/Error404/Error404';
import "./App.css";
import CartContainer from './componentes/CartContainer/CartContainer';
import { useState, useEffect } from 'react';


function App() {

  const [windowsSize, setWindowsSize] = useState([window.innerWidth])

    useEffect(() => {
        const handleWindowsResize = () => {
            setWindowsSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowsResize);

        return () => {
            window.removeEventListener('resize', handleWindowsResize);
        };
    });


  return (
    <div className='estiloAll'>
      <BrowserRouter>
        <CartProvider >
          <NavBar />
          <Categories />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/detalle/:itemid' element={<ItemDetailContainer />} />
            <Route path='/categorias/:categoryid' element={<ItemListContainer windowsSize={windowsSize} />} />
            <Route path='/cart'  element={<CartContainer/>}/>
            <Route path='*' element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
