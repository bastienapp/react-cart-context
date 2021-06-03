import { useState } from 'react';
import Basket from './components/views/Basket/Basket';
import ProductList from './components/views/ProductList/ProductList';
import CartContext from './contexts/CartContext';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <ProductList />
        <Basket />
      </CartContext.Provider>
    </div>
  );
}

export default App;
