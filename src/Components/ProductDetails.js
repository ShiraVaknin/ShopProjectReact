import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import useCartetContext from "./UseCartContex";
import updateProduct,{deleteProduct } from './Service'

export default function ProductDetails(){

  const CartContext = useCartetContext()
  const {state} = useLocation();
  const {product} = state;
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();

  function handleDelete(product){
    const input = window.prompt('Enter an administrator password:');
    const parsedInput = parseInt(input);
    if(parsedInput === 1234){
        CartContext.removeFromCart(product);
        deleteProduct(product._id).then(() => {
          //לבדוק אם צריך לעדכן רשימה כלשהי שנימצא בה כל המוצרים
          alert("Deleted Successfully")
          navigate('/product')
        }).catch(error => console.log(error))
      }
      else{
        alert("Wrong password")
      }
  }

  function handleUpdata(product){
    const input = window.prompt('Enter an administrator password:');
    const parsedInput = parseInt(input);
    if(parsedInput === 1234){
        //לבדוק אם צריך לעדכן את הסל קניות
        navigate('/updateProduct', {state:{product}})
    }
    else{
      alert("Wrong password")
    }
  }

    return <>
    <img style={{float:'right'}}  className="descriptionImg" src={require(`../picture/${product.img}.jpg`)} alt="image"/>
     <div className="details"  >
     <b style={{fontSize:'100px'}}>{product.brand}</b>
     <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">rate me</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
     <p>{product.description}</p>
     <p>₪ {product.price}</p>
     <button  className="custom-btn btn-11 " onClick={()=>CartContext.AddToCart(product)}>Add To Cart</button><br/>
     {/* onClick={()=>CartContext.AddToCart(product)}
     onClick={()=>setIsModalOpen(true)} 
      onClick={()=>handleDelete(product._id)}*/}

     <button style={{width:'95px'}} className="custom-btn btn-11" onClick={()=>handleDelete(product)}>Delete</button>
     <button style={{width:'95px'}} className="custom-btn btn-11" onClick={()=> handleUpdata(product)}>Update</button>
     </div>
    </>
}