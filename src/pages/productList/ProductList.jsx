import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ProductTable from '../../components/productTable/ProductTable'
import Sidebar from '../../components/sidebar/Sidebar'
import "./productList.scss"

const ProductList = () => {
    return (
        <div className="home">
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
           <ProductTable/>
          </div>
        </div>
      )
}

export default ProductList
