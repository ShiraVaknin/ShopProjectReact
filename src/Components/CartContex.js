import { CleaningServicesOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

export const CartContext = React.createContext(null)

export default function CartProvider(props)
{
const [existProduct,setExistProduct] = useState([])//כאן נמצא לי האוביקט של המוצר
const [productById,setProductById] = useState([])//כאן ישלי מזהה של מוצר וכמות
const [sumCart,setSumCart] = useState(0)//sum of product in the cart
const [totalPrice, setTotalPrice] = useState(0)// total price of the cart

function AddToCart(product)
{
    const existpro = existProduct.find(p=>p._id===product._id)
    if(existpro==null)
    {
        setProductById([...productById,{id:product._id,count:1}])
        setExistProduct([...existProduct,product])

    }
    else
    {
        setProductById(productById.map(prod=>prod.id===product._id? {...prod , count:prod.count+1}:prod))
    }
    setSumCart(sumCart+1)
    setTotalPrice(totalPrice+product.price)
}

function handleAddProduct(product) {
      setProductById(
        productById.map((prod) =>
          prod.id === product._id ? { ...prod, count: prod.count + 1 } : prod
        )
      )
    setTotalPrice(totalPrice + product.price)
    setSumCart(sumCart+1)
  }
function handleRemoveProduct(product)
{
    const quantity = productById.find((prod) => prod.id === product._id)?.count 
    if(quantity===1)
    {
        setProductById(
            productById.map((prod) =>
              prod.id === product._id ? { ...prod, count: prod.count - 1 } : prod
            )
          )
          setExistProduct(existProduct.filter(item=>item._id!==product._id))
    }
    else {
        if(quantity >1){
            setProductById(
                productById.map((prod) =>
                prod.id === product._id ? { ...prod, count: prod.count - 1 } : prod
                )
            )
        }
    }
    //set down the total price and sumCart if the quantity >0
    if(quantity>0){
        setTotalPrice(totalPrice - product.price)
        setSumCart(sumCart-1)
    }
    
}
function removeFromCart(product){
    const quantity =  productById.find((prod) => prod.id === product._id)?.count 
    const price = existProduct.find((prod) => prod._id === product._id)?.price
    if(quantity!= null){
      setSumCart(sumCart-quantity);
      setTotalPrice(totalPrice-(quantity*price));
      setExistProduct(existProduct.filter(item=>item._id!==product._id))
      setProductById(productById.filter((prod => prod.id != product._id)))
    }
    

}
return <CartContext.Provider value={{setExistProduct, setProductById, setTotalPrice, existProduct, productById, 
    totalPrice, AddToCart, handleAddProduct, handleRemoveProduct, sumCart, setSumCart, removeFromCart}}>
    {props.children}
</CartContext.Provider>
}