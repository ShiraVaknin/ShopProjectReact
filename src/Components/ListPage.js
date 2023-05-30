import AllProduct from "./AllProduct";
import './Style.css';

const ListPage = ({searchResults}) =>{
    const result = searchResults.map(product => <AllProduct key={product._id} product = {product}/>)
    const content = result?.length ? result:<b><h1 className="center">No Matching, try another brand</h1></b>
    return <div className="table">{content}</div>
}
export default ListPage
