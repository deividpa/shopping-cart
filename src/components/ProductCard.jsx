import React from 'react'
import { AddToCartIcon } from './icons'
import './ProductCard.css'

export function ProductCard({ product }) {
  const {
    title,
    thumbnail,
    price,
    brand,
    rating
  } = product

  return (
    <li className="product-card">
      <img
        className="product-card__image"
        src={thumbnail}
        alt={title}
      />
      <div className="product-card__info">
        <h3 className="product-card__brand">{brand}</h3>
        <h2 className="product-card__title">{title} - ${price}</h2>
        <p className="product-card__rating">Rating: {rating}</p>
        <p className="product-card__price">${price.toFixed(2)}</p>
        <button className="product-card__add-to-cart">
          <AddToCartIcon />
          Add to Cart
        </button>
      </div>
    </li>
  )
}