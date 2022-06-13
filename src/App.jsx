import './App.css';
import Cards from './components/Cards/Cards';
import Shop from './components/Shop/Shop';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className='cardShop__title text-center mt-5'>Card/Shop</h1>
      <div className='d-flex align-items-center justify-content-between container mt-5'>
        <div className='col-6 text-center'>
          <Link to={"/cards"}>
            Cards
          </Link>
        </div>
        <div className='col-6 text-center'>
          <Link to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='cards' element={<Cards />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
