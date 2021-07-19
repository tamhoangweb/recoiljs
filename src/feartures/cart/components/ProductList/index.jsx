import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addToCart, cartState } from '../../cartState';

import { productListState } from '../../productState';
import './ProductList.scss'

export default function ProductList() {
  const productList = useRecoilValue(productListState)
  const [cart, setCart] = useRecoilState(cartState)
  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product)
    setCart(newCart)
  }
  return (
    <div>
      <h1> Products List</h1>
      <ol>

        {
          productList.map(product => (
            <li key={product.id}>{product.title} - {product.price}

              <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </li>
          ))
        }
      </ol>
    </div>
  )
}
