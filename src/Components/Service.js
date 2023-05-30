import axios from 'axios'

export default async function updateProduct(product){
    try{
        return await axios.put('http://localhost:8000/products/', product).data
    } catch(error){
        console.log(error)
    }
}
// הקוד של העידכון נמצא בדקה 49

export async function deleteProduct(id){
    try{
        return await axios.delete(`http://localhost:8000/products/${id}`).data
    } catch(error){
        console.log(error)
    }
}

export async function addProduct(product){
    try {
        return await axios.post(`http://localhost:8000/products/`, product).data
    } catch (error) {
        console.log(error)
    }
}
