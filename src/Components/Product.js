import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import ProductDetails from './ProductDetails';
// import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ListPage from './ListPage';
import { Margin } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Style.css'
import { useNavigate } from 'react-router-dom';

export default function Product(){
    
    const [allProduct, setAllProduct] = useState([]);
    const [searchResults, setSearchResults]=useState([]);
  const navigate = useNavigate();

    function handleAddProduct(){
      const input = window.prompt('Enter an administrator password:');
      const parsedInput = parseInt(input);
      if(parsedInput === 1234){
        navigate('/addProduct')
      }
      else{
        alert("Wrong password")
      }
    }
    useEffect(() => {
        axios.get('http://localhost:8000/products/')
        .then(response => {
          setAllProduct(response.data)
          setSearchResults(response.data)
        })
        .catch(error => {
          console.log(error);
        });
      }, []);

    return  <div className="product" >
   <SearchBar className="search" allProducts={allProduct} setSearchResults={setSearchResults}/>
   <Fab className='add' onClick={() => handleAddProduct()} style={{float:'right', marginRight:'5%'}} size="medium" sx={{bgcolor:"rgb(238,201,195)"}} aria-label="add">
        <AddIcon />
      </Fab>
    <ListPage searchResults={searchResults}/>
    </div>
}
