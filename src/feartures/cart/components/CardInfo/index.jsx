import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartState, cartTotal } from '../../cartState'

export default function CartInfo() {
  const cart = useRecoilValue(cartState)
  const total = useRecoilValue(cartTotal)
  return (
    <div>
      <h1> Cart</h1>
      <ol>

        {
          cart.map(item => (
            <li key={item.id}>{item.product.title}-{item.quatity}-{item.product.price * item.quatity}</li>
          ))
        }
      </ol>
      <h3> TOTAL: {total} VND</h3>
    </div>
  )
}
