import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { orderColumns, orderRows } from '../../OrderData';
import "./orderTable.scss"

const OrderTable = () => {



    const navigate=useNavigate();

    
    const handleView=()=>{
        console.log(orderRows.orderId)
        navigate(`/orders/${orderRows.orderId}`)
    }

    const actionColumn=[{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell:()=>{
            return(
                <div className="cellAction">
                  
                    <div className="viewButton" onClick={handleView}>View</div>
                   
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
return (
<div className="datatable">
  <div className="datatableTitle">
    
  </div>
 <DataGrid className='datagrid '
    rows={orderRows}
    columns={orderColumns.concat(actionColumn)}
    pageSize={10}
    rowsPerPageOptions={[10]}
    checkboxSelection
  />
</div>
)
}

export default OrderTable
