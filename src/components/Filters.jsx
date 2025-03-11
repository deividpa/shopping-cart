import React, { useId } from 'react'
import './Filters.css'

const categories = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];

const Filters = ({ filters, setFilters }) => {

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPriceChange = (event) => {
    const newMinPrice = Number(event.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: newMinPrice
    }));
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }));
  };

  return (
    <section className="filters-container">
      <div className="filter-group">
        <label htmlFor={minPriceFilterId}>Precio mínimo: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          step="1"
          value={filters.minPrice}
          onChange={handleMinPriceChange}
        />
        <span className="filter-value">${filters.minPrice}</span>
      </div>

      <div className="filter-group">
        <label htmlFor={categoryFilterId}>Categoría: </label>
        <select
          id={categoryFilterId}
          value={filters.category}
          onChange={handleCategoryChange}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default Filters