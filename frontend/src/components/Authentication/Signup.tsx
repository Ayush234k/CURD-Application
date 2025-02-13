import React, {useState} from "react";
import { signup } from "../connection/api";
import { useNavigate } from "react-router-dom";


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
        <form onSubmit={handleSignup}>
            <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit">SIGNUP</button>
            {/* <button type="button" onClick={handleSubmit}>Signup</button> */}
        </form>
    )
}

export default Signup;