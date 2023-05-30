import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import updateProduct from './Service'
import { useLocation } from 'react-router-dom';

export default function UpdateProduct() {

  const {state} = useLocation();
  const {product} = state;
  const [brand, setBrand] = useState(product.brand);
  const [img, setImg] = useState(product.img);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  function handleSubmit(){
    product.brand = brand;
    product.img = img;
    product.description = description;
    product.price = price;
    updateProduct(product).then(() => alert("Updeted successfully")).catch(error => console.log(error))
  }
  

  return <>
    {/* <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/>
    <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/>
    <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/> */}
    <div className='addProduct'>
        <b style={{fontSize:'40px'}}>Update the product</b><br/><br/><br/><br/>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBrand" className='formGroup'>
            <Form.Label className='formLabel'>Brand:   </Form.Label>
            <Form.Control className='formControl' type="text" placeholder="Enter brand" value={brand} onChange={(event) => setBrand (event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formImg" className='formGroup'>
            <Form.Label className='formLabel'>Image name:   </Form.Label>
            <Form.Control className='formControl' type="text" placeholder="Enter image name" value={img} onChange={(event) => setImg (event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formDescription" className='formGroup'>
            <Form.Label className='formLabel'>Description:   </Form.Label>
            <Form.Control className='formControl' as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(event) => setDescription(event.target.value)
            } />
        </Form.Group>

        <Form.Group controlId="formPrice" className='formGroup'>
            <Form.Label className='formLabel'>Price:   </Form.Label>
            <Form.Control className='formControl' type="number" placeholder="Enter price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Form.Group>
            <br/>
        <Button className='custom-btn btn-11' onClick={() => handleSubmit()} style={{width:'150px'}} variant="primary" >
            Update Product
        </Button>
        </Form>
  </div>
  </>
}
