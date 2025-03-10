import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import Header from './components/Header';

function App() {

  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      if (filters.category === 'all') {
        return product.price >= filters.minPrice;
      }
      return product.category === filters.category && product.price >= filters.minPrice;
    });
  }

  const filteredProducts = filterProducts(products);



  return (
    <>
      <Header filters={filters} setFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
    
  )
}

export default App
