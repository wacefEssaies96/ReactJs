import { useParams } from "react-router-dom";
function ProductDetails() {
    const { productname } = useParams()
    return (
        <>
            <p>Product Details
            </p>
            {productname}
        </>
    )
}
export default ProductDetails;