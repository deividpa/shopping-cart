import { useState } from 'react'

const useFilters = () => {
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

  return { filters, filterProducts, setFilters }
}

export default useFilters