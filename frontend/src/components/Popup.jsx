import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input_title, setInput_title] = useState(popupContent.title);
  const [input_desc, setInput_desc] = useState(popupContent.desc);

  const updateToDo = () => {
    const jwt = localStorage.getItem('jwt');
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { title: input_title, description: input_desc },{headers:{'Authorization': `Bearer ${jwt}`}})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input_title}
            onChange={(e) => setInput_title(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <input
            value={input_desc}
            onChange={(e) => setInput_desc(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
