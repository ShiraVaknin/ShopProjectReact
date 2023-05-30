import { useNavigate } from 'react-router-dom';
import './Style.css'
const AllProduct=({product})=>{

    const navigate = useNavigate()
    function navigateToDescription()
    {
      navigate('/ProductDetails',{state:{product}});
    } 

    return <div>
        <img className="impProduct" src={require(`../picture/${product.img}.jpg`)} onClick={navigateToDescription}/>
        <h3>{product.brand}</h3>
        <p>₪{product.price}</p>
    </div>
}


export default  AllProduct

