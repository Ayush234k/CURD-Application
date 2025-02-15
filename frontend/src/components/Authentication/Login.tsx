import React, {useState} from "react";
import { login } from "../connection/api";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e : React.FormEvent) =>{
        e.preventDefault();
        try{
            const response = await login({email, password});
            if(response.status === 200){
                navigate("/dashboard");
            }
            else{
                alert("Login Failed");
            }
        }
        catch(err: any){
            if(err.status === 404){
                alert("Invalid Credentials");
            }
            else{
                console.log("Error : ", err);
                alert("Something went wrong, please try again");
            }
        }
    }

    return(
        <form id="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input id="login-input" type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required></input>
            <input id="login-input" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input>
            <button id="login-btn" type="submit">LOGIN</button>
            <p id="login-p" onClick={() => navigate("/")}>Signup</p>
            {/* <button type="button" onClick={handleSubmit}>Login</button> */}
        </form>
    )
}

export default Login;