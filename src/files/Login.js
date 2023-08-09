// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import facebook_logo from '../images/facebook logo.png';
import google_logo from '../images/google logo.png';
import twitter_logo from '../images/twitter_logo.png';

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
                    <h2><u>Login</u></h2>
                    <div className='accounts'>
                        <img src = {google_logo} alt="google" />
                        <img src = {facebook_logo} alt="facebook" />
                        <img src = {twitter_logo} alt="twitter" />  
                    </div>
                    <br/>
                    <div class="mb-auto">
                        <input  onChange={handleChange} class="form-control" name="email" type = "email" placeholder='E-mail' required/>
                    </div>
                    <div class="mb-auto">
                        <input onChange={handleChange} class="form-control" name="password" type = "password" placeholder='Password' required/>
                    </div>
                    <button class="btn" >Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;