import React from 'react'
import Filters from './Filters'

const Header = ({ filters, setFilters }) => {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters filters={filters} setFilters={setFilters} />
    </header>
  )
}

export default Header