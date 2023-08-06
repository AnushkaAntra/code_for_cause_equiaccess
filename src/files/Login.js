// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import axios from 'axios';
const Login = () => {
    const history=useHistory()
    const [form,setForm]=useState([])
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        // console.log("login:",form)
        // alert("Added Successfully");
        try {
            const res=await  axios.post('http://localhost/login/auth',form)
            if(res.data.message==="authorized")
                    history.push('/dashboard')
            if(res.data.message==="Wrong Credentials !")
                    alert("Wrong Credentials !")
                    // alert("Added Successfully");
        } catch (error) {
            alert('something went wrong !')
        }
    }
    // const History = useHistory(); 
    // const next_page = () =>{
    //     History.push("/Home");
    // }
    return ( 
        <div className="Login">
             <div className="form">
                <form onSubmit={handlesubmit}>
                    <h2>Login</h2>
                    <div className='accounts'>
                        <img src = {google_logo} alt="google" />
                        <img src = {facebook_logo} alt="facebook" />
                        <img src = {twitter_logo} alt="twitter" />  
                    </div>
                    <input  onChange={handleChange} name='name' type = "text" placeholder='Name' required/>
                    <input onChange={handleChange} name='password' type = "password" placeholder='Password' required/>
                    <button >Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;