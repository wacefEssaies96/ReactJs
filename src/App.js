import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/products">
          <Route path="list"element={<Products></Products>}></Route>
          <Route path=":productname" element={<ProductDetails></ProductDetails>}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
