import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavigationBar';

function App() {

  const Products = React.lazy(() => import('./components/Products'));
  const ProductDetails = React.lazy(() => import('./components/ProductDetails'));
  const NotFound = React.lazy(() => import('./components/NotFound'));

  return (
    <div className="App">
      <NavBar></NavBar>
      <Suspense fallback={<p>Chargement...</p>}>
        <Routes>
          <Route path="/products">
            <Route path="list" element={<Products></Products>}></Route>
            <Route path=":productname" element={<ProductDetails></ProductDetails>}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div >
  );
}

export default App;
