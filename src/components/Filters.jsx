import React from 'react'
import './Filters.css'

const Filters = ({ filters, setFilters }) => {
  const categories = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];

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
        <label htmlFor="minPrice">Precio mínimo: </label>
        <span className="filter-value">${filters.minPrice}</span>
        <input
          type="range"
          id="minPrice"
          min="0"
          max="1000"
          step="1"
          value={filters.minPrice}
          onChange={handleMinPriceChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Categoría: </label>
        <select
          id="category"
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