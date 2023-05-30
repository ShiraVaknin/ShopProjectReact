import React from 'react'
import useCartContext from './UseCartContex'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
//import { Button } from '@material-ui/core';


export default function ShowCart(){

    const CartContext = useCartContext()
    const navigate = useNavigate()

    function payment(){
        navigate('/checkout')
    }
    return <>
        <img style={{float:'right'}} className='imgCart' src={require('../picture/cart.jpg')}/>
        <div style={{float:'right',marginRight:'30%'}}>
            <h1 style={{fontSize:'57px'}}>Your Shopping cart</h1>
            {CartContext.existProduct.length==0&&(
                <h2>There are no products in the shopping cart</h2>
            )}
        </div>
        <div className='mx-4'>
            <b>
                <p>Total quantity: {CartContext.sumCart}</p>
                <p>Tatal Price: {CartContext.totalPrice} ₪</p>
            </b>
            {CartContext.sumCart===0? (
                <button className='custom-btn btn-11 ' disabled>payment</button>
            ):(
                <button className='custom-btn btn-11 ' onClick={payment}>payment</button> 
            )}
        </div> 
        <br/><br/><br/><br/>
        <div className='table'>
         {CartContext.existProduct.map((item)=>
            <div className='cartProduct' key={item._id}> 
                <img className="cart" src={require(`../picture/${item.img}.jpg`)} alt="image"/> <br/>
                <div >
                    <button className="myButton" onClick={()=>CartContext.handleAddProduct(item)}><AddIcon/></button>
                    <span className="mx-2"><b>
                        {CartContext.productById.find((product) => product.id === item._id)
                            ?.count || 0}</b>
                    </span>
                    <button className="myButton" onClick={()=>CartContext.handleRemoveProduct(item)}><RemoveIcon/></button>
                    <p >₪{item.price}</p>
                    <DeleteIcon onClick={() => CartContext.removeFromCart(item)}/>
                </div>
            </div> )}
        </div>
    </>
}
