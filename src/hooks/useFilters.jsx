import { useContext } from 'react'
import { FiltersContext } from '../context/filters';

const useFilters = () => {
  const {filters, setFilters} = useContext(FiltersContext);

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