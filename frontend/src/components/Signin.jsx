import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { baseURL } from "../utils/constant";
function Signin(){
    const [username , setUsername]= useState("");
    const [password, setPassword]  = useState("");

    const navigate = useNavigate();
    async function check(e){
        e.preventDefault();
        try {
            const res = await axios.post(`${baseURL}/check_user`, {username,password});
            console.log(res.data);
            if (res.data.mssg === "exist") {
                localStorage.setItem('jwt', res.data.jwt);
                navigate('/home');
            } else {
                alert("User does not exist");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while checkin the user");
        }      
}

    return <div className="container-signin">
        <div className="container-border">
        <h1>Signin</h1>
        <form method="POST">
            <input onChange = {(e)=>{setUsername(e.target.value)}} placeholder="username"></input>
            <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"></input>
            <button onClick={check}>Submit</button>
        </form>
            <Link to="/signup"><button className="button-signin">Signup</button></Link>

        </div>
        
        
    </div>
}

export default Signin;