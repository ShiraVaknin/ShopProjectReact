import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {addProduct} from './Service'

export default function AddProduct() {
  const [brand, setBrand] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(){
    const newProduct = {}
    newProduct.brand = brand;
    newProduct.img = img;
    newProduct.description = description;
    newProduct.price = price;
    addProduct(newProduct).then(() => alert("Added successfully")).catch(error => console.log(error))
  }
  

  return <>
    {/* <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/>
    <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/>
    <img className='line' style={{float:'right'}} src={require('../picture/line.jpg.png')}/> */}
    <div className='addProduct'>
        <b style={{fontSize:'40px'}}>Add product to data base</b><br/><br/><br/><br/>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBrand" className='formGroup'>
            <Form.Label className='formLabel'>Brand:   </Form.Label>
            <Form.Control className='formControl' type="text" placeholder="Enter brand" value={brand} onChange={(event) => setBrand(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formImg" className='formGroup'>
            <Form.Label className='formLabel'>Image name:   </Form.Label>
            <Form.Control className='formControl' type="text" placeholder="Enter image name" value={img} onChange={(event) => setImg(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formDescription" className='formGroup'>
            <Form.Label className='formLabel'>Description:   </Form.Label>
            <Form.Control className='formControl' as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPrice" className='formGroup'>
            <Form.Label className='formLabel'>Price:   </Form.Label>
            <Form.Control className='formControl' type="number" placeholder="Enter price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Form.Group>
            <br/>
        <Button className='custom-btn btn-11' onClick={() => handleSubmit()} style={{width:'150px'}} variant="primary" >
            Add Product
        </Button>
        </Form>
  </div>
  </>
}
