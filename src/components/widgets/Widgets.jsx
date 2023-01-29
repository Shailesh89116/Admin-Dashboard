import { AccountBalanceWalletRounded, KeyboardArrowUpOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Person2Outlined from '@mui/icons-material/Person2Outlined'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./widgets.scss"

const Widgets = ({type}) => {

    let data;

    const amount=100;
    const diff=20;

    const navigate=useNavigate()

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link: "See all User",
                icon:<Person2Outlined className='icon' style={{
                    backgroundColor: "rgba(255,0,0,0.2)"
                }}/>,
                page:"users"
            };
            break;
            case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link: "See all Orders",
                icon:<ShoppingCartOutlined className='icon'  style={{
                    backgroundColor: "rgba(218,165,32,0.2)", color:"goldenrod"
                }}/>,
                page:"users"
            };
            break;
            case "earnings":
            data={
                title:"EARNINGS",
                isMoney:true,
                link: "View net earning",
                icon:<MonetizationOnOutlined className='icon'  style={{
                    backgroundColor: "rgba(0,128,0,0.2)", color:"green"
                }}/>,
                page:"users"
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link: "See Details",
                icon:<AccountBalanceWalletRounded className='icon'  style={{
                    backgroundColor: "rgba(128,0,128,0.2)", color:"purple"
                }}/>,
                page:"users"
            };
            break;
        default:
            break;

    }

  return (
    <div className='widgets'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{
            data.isMoney && "$"
        }{amount}</span>
        <span className="link" onClick={()=>{navigate(`/${data.page}`)}}>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"><KeyboardArrowUpOutlined/>{diff}</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
