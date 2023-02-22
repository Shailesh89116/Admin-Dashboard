import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title, btn }) => {
  const [file, setFile] = useState();


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="formInput">
              <label htmlFor="file">
                {console.log(file)}
              <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
              alt=""
            />
              </label>
              <input type="file" id="file" style={{display:"none", cursor:"pointer"}} onChange={(e)=>{setFile(e.target.files[0])}} />
            </div>
            <p>Choose Image to Upload</p>
          </div>
          <div className="right">
            <form>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder } />
                </div>
              ))}
              <button>{btn}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
