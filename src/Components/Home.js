import React from 'react'
import './Style.css'

export default function Home(){
    
    return <>
    <img className="home_picture" src={require('../picture/home.jpg')}/><br/><br/>
     <img className='list_logo' src={require('../picture/logos/ariana grand.jpg')}/>
     <img className='list_logo2' src={require('../picture/logos/chanel.jpg')}/>
     <img className='list_logo2' src={require('../picture/logos/gucci.jpg')}/>
     <img className='list_logo' src={require('../picture/logos/lacost.jpg')}/>
     <img className='list_logo' src={require('../picture/logos/mont blanc.jpg')}/>
     <img className='list_logo' src={require('../picture/logos/lancome.jpg')}/>
     <img className='list_logo2' src={require('../picture/logos/dior.jpg')}/>
     <img className='list_logo' src={require('../picture/logos/guess.jpg')}/>
     <img className='list_logo2' src={require('../picture/logos/tous.jpg')}/>
     {/* <img className='list_logo' src={require('../picture/logos/prada.jpg')}/>

     <img className='list_logo' src={require('../picture/logos/ysl.jpg')}/> */}
    </>
}