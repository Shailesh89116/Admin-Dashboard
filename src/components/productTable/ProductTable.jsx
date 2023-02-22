import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Link } from 'react-router-dom'
import { productColumns, productRows } from '../../datasource';
import "./productTable.scss"

const ProductTable = () => {
    const actionColumn=[{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell:()=>{
            return(
                <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
return (
<div className="datatable">
  <div className="datatableTitle">
    <Link to="/products/new" className="newProduct">
    Add New Product
    </Link>
  </div>
 <DataGrid className='datagrid '
    rows={productRows}
    columns={productColumns.concat(actionColumn)}
    pageSize={10}
    rowsPerPageOptions={[10]}
    checkboxSelection
  />
</div>
)
}

export default ProductTable
