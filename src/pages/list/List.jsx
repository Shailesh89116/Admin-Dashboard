import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import Table from "../../components/table/Table";
import DataTable from '../../components/datatable/DataTable'
const List = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
       <DataTable/>
      </div>
    </div>
  )
}

export default List
