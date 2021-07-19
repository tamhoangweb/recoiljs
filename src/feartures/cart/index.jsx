import React from 'react'
import CartInfo from './components/CardInfo'
import ProductList from './components/ProductList'

export default function Cart() {
  return (
    <div>
      <ProductList />
      <CartInfo />
    </div>
  )
}
