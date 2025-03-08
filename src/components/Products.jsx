import React from 'react'
import { ProductCard } from './ProductCard'
import './Products.css'

export function Products({ products }) {
  return (
    <main className="products">
      <ul className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  )
}