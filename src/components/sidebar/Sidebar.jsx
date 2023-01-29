import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {

  const {dispatch}=useContext(DarkModeContext);
  
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">React Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{textDecoration:"none"}}>
            <li><DashboardIcon  className="icon"/>
            <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">LIST</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li><Person2OutlinedIcon className="icon"/>
            <span>Users</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li><StoreMallDirectoryIcon className="icon"/>
            <span>Products</span>
            </li>
            </Link>
            <li><CreditCardIcon className="icon"/>
            <span>Orders</span>
            </li>
            <li><LocalShippingIcon className="icon"/>
            <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li><InsertChartIcon className="icon"/>
            <span>Stats</span>
            </li>
            <li><NotificationsNoneOutlinedIcon className='icon' />
            <span>Notifications</span>
            </li>
            <p className="title">SERVICE </p>
            <li><SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>System Health</span>
            </li>
            <li><PsychologyOutlinedIcon  className="icon"/>
            <span>Logs</span>
            </li>
            <li><SettingsApplicationsOutlinedIcon className="icon"/>
            <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li><AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
            </li>
            <li><ExitToAppOutlinedIcon className="icon"/>
            <span>logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions" onClick={()=>{dispatch({type: "DARK"})}}></div>
        <div className="colorOptions"  onClick={()=>{dispatch({type: "LIGHT"})}}></div>
      </div>
    </div>
  )
}

export default Sidebar
