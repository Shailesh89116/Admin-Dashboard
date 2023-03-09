import "./singleOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const SingleOrder = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="topBack">
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <ArrowBackIcon className="back" />
          </Link>
        </div>
        <div className="top">
          <div className="left">
            <h1 className="title">Customer Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="orderInfo">
            <h1 className="title">Order Information</h1>
            <div className="item">
            <div className="orderLeft">
              <div className="details">
                <h1 className="itemTitle">Acer Nitro 5</h1>
                <div className="detailItem">
                  <span className="itemKey">OrderId:</span>
                  <span className="itemValue">1143155</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemValue">01</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Amount:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Delivery Status:</span>
                  <span className="itemValue">Delivered</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment Status:</span>
                  <span className="itemValue">Paid</span>
                </div>
              </div>
            </div>
          <div className="orderRight">
            <img
              src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
              alt=""
              className="itemImg"
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
