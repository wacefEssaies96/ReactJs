import axios from 'axios';
const url = "http://localhost:3001/products";
export const getallProducts = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const addProduct = async (product) => {
    console.log(product);
    return await axios.post(url, product);
}
export const editProduct = async (id, product) => {
    return await axios.put(`${url}/${id}`, product);
}
export const deleteProduct = async (id) => {
    return await axios.delete(`${url}/${id}`);
}