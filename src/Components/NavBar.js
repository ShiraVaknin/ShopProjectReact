import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';

import './Style.css'
import useCartetContext from './UseCartContex';
export default function NavBar(){
    const CartContext = useCartetContext()
    return <nav className='nav'>        
            <Link className='navBar' to= '/home'>Home</Link>   
            <Link className='navBar' to= '/product'>Product</Link>    
            <Link className='navBar' to= '/signin'>Sign In</Link>    
            <Link className='navBar' to= '/signup'>Sign Up</Link>  
            <img className='logo' src={require('../picture/logoo.png')}/>
            <Link className="navBar icon" to='/showCart'><Badge badgeContent={CartContext.sumCart} color="default">
            <ShoppingCartIcon fontSize={"large"} />
          </Badge></Link>
          {/*מעבר לתשלום*/ }
          {/* <Link className="navBar icon" to='/checkout'><Badge badgeContent={10} color="default">
            <ShoppingCartIcon fontSize={"large"} />
          </Badge></Link> */}
        </nav>        
}
