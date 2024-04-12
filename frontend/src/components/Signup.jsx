
import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { baseURL } from "../utils/constant";
import Signin from './Signin';

function Signup(){
    const navigate = useNavigate(); 
    const [username , setUsername]= useState("");
    const [password, setPassword]  = useState("");
    async function save(e){
        e.preventDefault();
            try {
                const res = await axios.post(`${baseURL}/save_user`, { username, password });
                if (res.data.mssg === "exist") {
                    alert("User already exists");
                } else {
                    localStorage.setItem('jwt', res.data.jwt);
                    navigate('/home')
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while saving the user");
            }      
    }
    return <div className="container-signin">
            <div className="container-border">
                <h1>Signup</h1>

                <form action="http://localhost:5173/signup" method="POST">
                    <input onChange = {(e)=>{setUsername(e.target.value)}} placeholder="username"></input>
                    <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"></input>
                    <button onClick={save}>Submit</button>
                </form>

                <Link to="/"><button className="button-signin">Signin</button></Link>


            </div>
        
        </div>
}

export default Signup;