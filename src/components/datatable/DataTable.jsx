import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datasource'
import { Link } from 'react-router-dom';
  
const DataTable = () => {

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
        <Link to="/users/new" className="newUser">
        Add New User
        </Link>
      </div>
     <DataGrid className='datagrid '
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
