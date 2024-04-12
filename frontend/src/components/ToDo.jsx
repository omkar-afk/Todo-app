import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const ToDo = ({ title, desc, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    const jwt = localStorage.getItem('jwt');
    axios.delete(`${baseURL}/delete/${id}`,{headers:{'Authorization': `Bearer ${jwt}`}}).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ title, desc, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      <div>
      <p>{title}</p>
      <p>{desc}</p>
      </div>
      
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateToDo} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
