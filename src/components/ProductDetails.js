import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductList from "../products.json";
import Product from "./Product";

function ProductDetails() {
    
    const navigate = useNavigate();
    const { productname } = useParams();
    const product = ProductList.find(element => element.name === productname);

    if (product !== undefined ) {
        return (
            <div className="product-details">
                <Product product={product}></Product>
            </div>
        )
    }
    else {
        navigate('/notfound')
    }

}
export default ProductDetails;