import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import OrderTable from '../../components/orderTable/OrderTable'
import Sidebar from '../../components/sidebar/Sidebar'
import "./orderList.scss"

const OrderList = () => {
  return (
    <div className="home">
    <Sidebar/>
    <div className="homeContainer">
      <Navbar/>
     <OrderTable/>
    </div>
  </div>
  )
}

export default OrderList
