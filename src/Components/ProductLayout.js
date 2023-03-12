import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProductLayout() {
    const [currentUser,setCurrentUser]=(["Jhon Doe"])
  return (
    <>
    
    {/* <ul>
        <li><Link to="/products">List Produt</Link></li>
        <li><Link to="/products/add" replace={true}>Add new Product</Link></li>
        <li><Link to="/products/2">Product Details</Link></li>

    </ul> */}
    <Outlet context={[currentUser]}/>
    </>
  )
}

export default ProductLayout