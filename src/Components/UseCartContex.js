import React from 'react'
import {CartContext} from './CartContex'

export default function useCartContext()
 {

const context = React.useContext(CartContext)

return context
}