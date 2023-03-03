import Product from "./Product";
import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
// import products from '../products.json'
import { useOutletContext } from "react-router-dom";
import { getallProducts } from "../services/api";

function Products() {

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [currentUser] = useOutletContext();
  const [products, setProducts] = useState([])

  const buy = (product) => {
    product.quantity--;
    setVisible(true);
    setTimeout(() => { setVisible(false) }, 2000)
  }
  const refresh = () => {
    getallProducts()
      .then((res) => { setProducts(res.data) })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    refresh()
    // setVisible2(true);
    // setTimeout(()=>{setVisible2(false)},3000)
    // return () => {
    //   console.log("I m unmounting")
    // }
  }, [])


  return (
    <Container>
      <Row>
        {currentUser}
        {visible2 && <Alert variant="success">
          <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
          </p>
          <hr />
        </Alert>
        }
        {products.map((element, index) =>
          <Col key={index}>
            <Product product={element} refresh={refresh} buyFunction={buy} />
          </Col>
        )}
        {visible && <Alert style={{ marginTop: "30px" }} variant="primary">
          <p>
            You Bought an Item
          </p>
        </Alert>}
      </Row>
    </Container>);

}

export default Products;