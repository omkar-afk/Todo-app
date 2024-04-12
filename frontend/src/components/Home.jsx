
import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Popup from "./Popup";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [input_title, setInput_title] = useState("");
  const [input_desc, setInput_desc] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    axios
      .get(`${baseURL}/get`,{headers:{'Authorization': `Bearer ${jwt}`}})
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
      console.log(toDos);
  }, [updateUI]);

  const saveToDo = () => {
    const jwt = localStorage.getItem('jwt');
      axios
        .post(`${baseURL}/save`, { title: input_title, description: input_desc },{headers:{'Authorization': `Bearer ${jwt}`}})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput_title("");
        setInput_desc("");
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input_title}
            onChange={(e) => setInput_title(e.target.value)}
            type="text"
            placeholder="title"
          />
          <input
            value={input_desc}
            onChange={(e) => setInput_desc(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              title={el.title}
              desc = {el.description}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default Home;
