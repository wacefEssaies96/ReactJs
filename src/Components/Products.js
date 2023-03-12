import Product from "./Product";
import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { deleteProduct, getProducts } from "../services/api";
function Products () {
    const [products,setProducts] = useState([]);
    const [visible,setVisible]=useState(false)
    const [visible2,setVisible2]=useState(false)
    const [currentUser] = useOutletContext();
    useEffect(() => {
      // getProducts()
      // .then((res)=>{setProducts(res.data);console.log(res)})
      // .catch((error)=>console.log(error))
      getAllProduct();

    }, [])
    
    const getAllProduct=async()=>{
      const res = await getProducts();
      setProducts(res.data);
    }
    const buy=(product)=>{
        product.quantity--;
        setVisible(true);
        setTimeout(()=>{setVisible(false)},2000)
    }
    const deleteProd = async (id) => {
      const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteProduct(id);
      getAllProduct(); }
  }
    useEffect(() => {
      setVisible2(true);
      setTimeout(()=>{setVisible2(false)},3000)
      return () => {
        console.log("I m unmounting")
      }
    }, [])
    
    
        return ( 
            <Container>
            <Row>
            {/* {currentUser} */}
           {visible2 &&  <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert>
        }
            {products.map((element,index)=>
                <Col key={index}>
                <Product product={element} buyFunction={buy} deleteProd={deleteProd}/>
                </Col>
            )}
         {visible &&   <Alert style={{ marginTop: "30px" }} variant="primary">
            <p>
            You Bought an Item
            </p>
             </Alert>}
        </Row>
        </Container> );
    
}
 
export default Products;