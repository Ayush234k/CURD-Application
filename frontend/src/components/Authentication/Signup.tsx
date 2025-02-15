import React, {useState} from "react";
import { signup } from "../connection/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export const Signup: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) =>{
        e.preventDefault();
        try{
            await signup({email, password});
            navigate("/login");
        }
        catch(err){
            console.log("Error : {Signup}");
        }
    }

    return(
        <form id="login-form" onSubmit={handleSignup}>
            <h1 id="login-h1">SignUp</h1>
            <input id="login-input" type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required></input>
            <input id="login-input" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input>
            <button id="login-btn" type="submit">SIGNUP</button>
            <p id="login-p" onClick={() => navigate("/login")}>Login</p>
            {/* <button type="button" onClick={handleSubmit}>Signup</button> */}
        </form>
    )
}

export default Signup;