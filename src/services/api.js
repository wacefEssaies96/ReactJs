import axios from 'axios';
const apiUrl = "http://localhost:3001/products"
export async function getProducts(){
    return await axios.get(apiUrl);
}
export async function getProduct(id){
    return await axios.get(`${apiUrl}/${id}`);
}
export async function addProduct(product){
    return await axios.post(apiUrl,product);
}
export async function updateProduct(id,product){
    return await axios.put(`${apiUrl}/${id}`,product)
}
export async function deleteProduct(id){
    return await axios.delete(`${apiUrl}/${id}`);
}